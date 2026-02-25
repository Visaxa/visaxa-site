import fs from "node:fs/promises"
import path from "node:path"

import matter from "gray-matter"
import readingTime from "reading-time"

export type BlogPostMeta = {
  slug: string
  title: string
  subtitle?: string
  description: string
  date: string
  tags: string[]
  readingTimeText: string
}

export type BlogPost = BlogPostMeta & {
  content: string
}

type FrontmatterShape = {
  title?: unknown
  subtitle?: unknown
  description?: unknown
  date?: unknown
  tags?: unknown
  draft?: unknown
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog")

function normalizeString(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback
}

function normalizeStringArray(value: unknown) {
  if (!Array.isArray(value)) return []
  return value.filter((t): t is string => typeof t === "string" && t.trim().length > 0)
}

function isDraft(value: unknown) {
  return value === true
}

async function readMdxFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, "utf8")
  const parsed = matter(raw)
  const fm = parsed.data as FrontmatterShape

  const title = normalizeString(fm.title, slug)
  const subtitle = normalizeString(fm.subtitle, "")
  const description = normalizeString(fm.description, "")
  const date = normalizeString(fm.date, "1970-01-01")
  const tags = normalizeStringArray(fm.tags)
  const draft = isDraft(fm.draft)

  const rt = readingTime(parsed.content)

  const meta: BlogPostMeta = {
    slug,
    title,
    subtitle: subtitle.length > 0 ? subtitle : undefined,
    description,
    date,
    tags,
    readingTimeText: rt.text,
  }

  return { meta, content: parsed.content, draft }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true })
  const slugs = entries
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => e.name.replace(/\.mdx$/, ""))

  const metas: BlogPostMeta[] = []
  for (const slug of slugs) {
    const { meta, draft } = await readMdxFile(slug)
    if (draft) continue
    metas.push(meta)
  }

  metas.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return metas
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { meta, content, draft } = await readMdxFile(slug)
    if (draft) return null
    return { ...meta, content }
  } catch {
    return null
  }
}

