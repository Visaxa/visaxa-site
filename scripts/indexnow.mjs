import { execFileSync } from "node:child_process"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import matter from "gray-matter"

import {
  INDEXNOW_ENDPOINT,
  INDEXNOW_KEY,
  INDEXNOW_KEY_PATH,
} from "../src/config/indexnow.mjs"
import { SITE_ORIGIN, STATIC_SITEMAP_ROUTES } from "../src/lib/site-indexing.mjs"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const HOST = new URL(SITE_ORIGIN).host
const BLOG_PREFIX = "src/content/blog/"

const STATIC_FILE_ROUTES = new Map([
  ["src/app/page.tsx", "/"],
  ["src/app/features/page.tsx", "/features"],
  ["src/app/pricing/page.tsx", "/pricing"],
  ["src/app/compare/page.tsx", "/compare"],
  ["src/app/blog/page.tsx", "/blog"],
  ["src/app/research/page.tsx", "/research"],
  ["src/app/what-is-visaxa/page.tsx", "/what-is-visaxa"],
  ["src/app/contact/page.tsx", "/contact"],
  ["src/app/privacy/page.tsx", "/privacy"],
  ["src/app/terms/page.tsx", "/terms"],
])

function canonicalUrl(route) {
  return new URL(route, `${SITE_ORIGIN}/`).href.replace(/\/$/, route === "/" ? "" : "/")
}

function normalizeUrl(url) {
  const parsed = new URL(url)
  if (parsed.protocol !== "https:" || parsed.host !== HOST) {
    throw new Error(`Refusing non-canonical IndexNow URL: ${url}`)
  }
  parsed.hash = ""
  return parsed.href.replace(/\/$/, parsed.pathname === "/" ? "" : "/")
}

async function isPublishedArticle(filePath) {
  const raw = await fs.readFile(filePath, "utf8")
  return matter(raw).data.draft !== true
}

export async function urlsForChanges(changes, root = ROOT) {
  const routes = new Set()

  for (const { status, file } of changes) {
    const normalized = file.replaceAll("\\", "/")
    const staticRoute = STATIC_FILE_ROUTES.get(normalized)
    if (staticRoute) routes.add(staticRoute)

    if (!normalized.startsWith(BLOG_PREFIX) || !normalized.endsWith(".mdx")) continue

    const slug = path.posix.basename(normalized, ".mdx")
    const deleted = status.startsWith("D")
    if (deleted || (await isPublishedArticle(path.join(root, normalized)))) {
      routes.add(`/blog/${slug}`)
      routes.add("/blog")
      routes.add("/research")
    }
  }

  return [...routes].map(canonicalUrl).map(normalizeUrl).sort()
}

export function gitChanges(base, head, root = ROOT) {
  const output = execFileSync(
    "git",
    ["diff", "--name-status", "--diff-filter=ACDMRT", base, head, "--"],
    { cwd: root, encoding: "utf8" },
  )

  return output
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const [status, ...files] = line.split("\t")
      return { status, file: files.at(-1) }
    })
}

export async function allPublishedUrls(root = ROOT) {
  const routes = new Set(STATIC_SITEMAP_ROUTES.map((entry) => entry.path))
  const blogDir = path.join(root, "src", "content", "blog")
  const files = await fs.readdir(blogDir)

  for (const file of files.filter((name) => name.endsWith(".mdx"))) {
    const fullPath = path.join(blogDir, file)
    if (await isPublishedArticle(fullPath)) {
      routes.add(`/blog/${path.basename(file, ".mdx")}`)
    }
  }

  return [...routes].map(canonicalUrl).map(normalizeUrl).sort()
}

export async function waitForDeployment(commit, options = {}) {
  const timeoutMs = options.timeoutMs ?? 12 * 60 * 1000
  const intervalMs = options.intervalMs ?? 15 * 1000
  const deadline = Date.now() + timeoutMs

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${SITE_ORIGIN}/deployment.json`, { cache: "no-store" })
      if (response.ok && (await response.json()).commit === commit) return
    } catch {
      // Deployment may not be reachable while Vercel is still promoting it.
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs))
  }

  throw new Error(`Production did not report commit ${commit} before timeout`)
}

export async function submitUrls(urls, options = {}) {
  const uniqueUrls = [...new Set(urls.map(normalizeUrl))]
  if (uniqueUrls.length === 0) {
    console.log("IndexNow: no canonical public URLs changed; nothing submitted.")
    return { status: "skipped", count: 0 }
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}${INDEXNOW_KEY_PATH}`,
    urlList: uniqueUrls,
  }
  const attempts = options.attempts ?? 3
  let lastError

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      })
      const body = (await response.text()).slice(0, 500)
      console.log(
        `IndexNow attempt ${attempt}: endpoint=${INDEXNOW_ENDPOINT} urls=${uniqueUrls.length} status=${response.status}`,
      )
      if (response.status === 200 || response.status === 202) {
        return { status: response.status, count: uniqueUrls.length, body }
      }
      lastError = new Error(`IndexNow returned ${response.status}: ${body}`)
      if (![429, 500, 502, 503, 504].includes(response.status)) break
    } catch (error) {
      lastError = error
    }

    if (attempt < attempts) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 3000))
    }
  }

  throw lastError ?? new Error("IndexNow submission failed")
}

function parseArgs(argv) {
  const args = { command: argv[2] ?? "changed", urls: [] }
  for (let index = 3; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === "--base") args.base = argv[++index]
    else if (value === "--head") args.head = argv[++index]
    else if (value === "--wait-for-deployment") args.waitCommit = argv[++index]
    else if (value === "--url") args.urls.push(argv[++index])
    else throw new Error(`Unknown argument: ${value}`)
  }
  return args
}

async function main() {
  const args = parseArgs(process.argv)
  let urls

  if (args.command === "all") urls = await allPublishedUrls()
  else if (args.command === "urls") urls = args.urls
  else if (args.command === "changed") {
    if (!args.base || !args.head) throw new Error("changed requires --base and --head")
    urls = await urlsForChanges(gitChanges(args.base, args.head))
  } else throw new Error(`Unknown command: ${args.command}`)

  if (args.waitCommit) await waitForDeployment(args.waitCommit)
  const result = await submitUrls(urls)
  console.log(`IndexNow result: ${JSON.stringify(result)}`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`IndexNow failed: ${error.message}`)
    process.exitCode = 1
  })
}
