import assert from "node:assert/strict"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"

import { allPublishedUrls, urlsForChanges } from "../scripts/indexnow.mjs"
import {
  articleLastModified,
  latestArticleModification,
  STATIC_SITEMAP_ROUTES,
} from "../src/lib/site-indexing.mjs"

test("article lastmod uses an explicit meaningful update and otherwise publication", () => {
  assert.equal(articleLastModified({ date: "2026-01-01" }), "2026-01-01")
  assert.equal(
    articleLastModified({ date: "2026-01-01", updated: "2026-02-03" }),
    "2026-02-03",
  )
  assert.equal(
    latestArticleModification([
      { date: "2026-01-01" },
      { date: "2026-02-01", updated: "2026-03-01" },
    ]),
    "2026-03-01",
  )
})

test("all static sitemap routes have stable, defensible lastmod policies", () => {
  assert.equal(STATIC_SITEMAP_ROUTES.length, 10)
  for (const route of STATIC_SITEMAP_ROUTES) {
    assert.match(route.lastModified, /^(\d{4}-\d{2}-\d{2}|latest-post)$/)
  }
})

test("changed publication submits the article and both collection indexes", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "visaxa-indexnow-"))
  const relative = "src/content/blog/example.mdx"
  await fs.mkdir(path.join(root, "src/content/blog"), { recursive: true })
  await fs.writeFile(path.join(root, relative), "---\ndraft: false\n---\nArticle\n")

  const urls = await urlsForChanges([{ status: "M", file: relative }], root)
  assert.deepEqual(urls, [
    "https://www.visaxa.app/blog",
    "https://www.visaxa.app/blog/example",
    "https://www.visaxa.app/research",
  ])
})

test("draft and cosmetic illustration changes do not trigger IndexNow", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "visaxa-indexnow-"))
  const relative = "src/content/blog/draft.mdx"
  await fs.mkdir(path.join(root, "src/content/blog"), { recursive: true })
  await fs.writeFile(path.join(root, relative), "---\ndraft: true\n---\nDraft\n")

  const urls = await urlsForChanges(
    [
      { status: "A", file: relative },
      { status: "M", file: "public/blog/example/figure.svg" },
    ],
    root,
  )
  assert.deepEqual(urls, [])
})

test("current repository exposes exactly 27 published canonical URLs", async () => {
  const urls = await allPublishedUrls()
  assert.equal(urls.length, 27)
  assert.equal(new Set(urls).size, 27)
})
