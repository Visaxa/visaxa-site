import assert from "node:assert/strict"
import test from "node:test"
import http from "node:http"

import { aggregateFields, normalizePath, referrerCategory, safeCampaign, validateEvent } from "../src/lib/site-intelligence/core.mjs"
import { classifyCrawler, normalizeCrawlerRecord } from "../src/lib/site-intelligence/crawlers.mjs"
import { classifyLink, shouldEmitPageView, stableLinkId } from "../src/lib/site-intelligence/client.mjs"
import { incrementEvent, readDaily } from "../src/lib/site-intelligence/storage.mjs"

test("emits one page view for each genuine pathname transition", () => {
  assert.equal(shouldEmitPageView(null, "/blog/a"), true)
  assert.equal(shouldEmitPageView("/blog/a", "/blog/a"), false)
  assert.equal(shouldEmitPageView("/blog/a", "/blog/b"), true)
})

test("classifies internal and external links without depending on link text", () => {
  assert.deepEqual(classifyLink("/blog/b", "https://www.visaxa.app"), { type: "internal_link_click", destinationPath: "/blog/b", destinationHost: null, linkCategory: "editorial" })
  assert.deepEqual(classifyLink("https://example.com/a?private=x", "https://www.visaxa.app"), { type: "external_link_click", destinationPath: null, destinationHost: "example.com", linkCategory: "external_reference" })
  assert.equal(classifyLink("/blog/b", "https://www.visaxa.app", "article_next_click").type, "article_next_click")
})

test("distinguishes repeated links to the same destination without using visible text", () => {
  const first = stableLinkId({ sourcePath: "/blog/a", destination: "/blog/b", occurrence: 1 })
  const second = stableLinkId({ sourcePath: "/blog/a", destination: "/blog/b", occurrence: 2 })
  assert.notEqual(first, second)
  assert.match(first, /^[a-zA-Z0-9._:-]+$/)
  assert.equal(stableLinkId({ sourcePath: "/blog/a", destination: "/blog/b", occurrence: 9, explicitId: "canonical-next" }), "canonical-next")
})

test("normalizes paths and retains only bounded campaign fields", () => {
  assert.equal(normalizePath("https://www.visaxa.app/blog/example/?email=private"), "/blog/example")
  assert.deepEqual(safeCampaign("?utm_source=chatgpt.com&utm_campaign=launch&email=a@b.com"), { utm_source: "chatgpt.com", utm_campaign: "launch" })
})

test("categorizes AI referrals without retaining full referrer URLs", () => {
  assert.equal(referrerCategory("https://chatgpt.com/c/secret?query=value"), "ai_chatgpt")
  assert.equal(referrerCategory(""), "unknown_direct")
})

test("rejects malformed events and arbitrary records", () => {
  assert.equal(validateEvent({ type: "made_up", sourcePath: "/" }), null)
  assert.equal(validateEvent({ type: "research_question_copy", sourcePath: "/blog/a" }), null)
  assert.ok(validateEvent({ type: "research_question_copy", sourcePath: "/blog/a", questionId: "a18-question" }))
  assert.equal(validateEvent({ type: "internal_link_click", sourcePath: "/", destinationPath: "/blog/a", linkId: "x" }), null)
  assert.ok(validateEvent({ type: "internal_link_click", sourcePath: "/", destinationPath: "/blog/a", linkId: "x", linkCategory: "editorial" }))
})

test("creates aggregate dimensions without raw question or query data", () => {
  const event = validateEvent({ type: "research_question_copy", sourcePath: "/blog/a?secret=x", articleSlug: "a", questionId: "a18-question", referrerCategory: "ai_chatgpt" })
  assert.deepEqual(aggregateFields(event), ["event|research_question_copy", "path|/blog/a|research_question_copy", "article|a|research_question_copy", "question|a18-question|research_question_copy", "ai_referral|ai_chatgpt|/blog/a"])
})

test("Redis REST pipeline atomically increments bounded aggregate fields and applies expiry", { concurrency: false }, async () => {
  const hashes = new Map()
  const commandsSeen = []
  const server = http.createServer(async (request, response) => {
    let body = ""
    for await (const chunk of request) body += chunk
    const commands = JSON.parse(body)
    commandsSeen.push(...commands)
    const result = commands.map(([name, key, field, amount]) => {
      if (name === "HINCRBY") { const hash = hashes.get(key) ?? new Map(); hash.set(field, (hash.get(field) ?? 0) + Number(amount)); hashes.set(key, hash); return { result: hash.get(field) } }
      if (name === "EXPIRE") return { result: 1 }
      if (name === "HGETALL") { const hash = hashes.get(key) ?? new Map(); return { result: [...hash].flat() } }
      return { error: "unsupported" }
    })
    response.writeHead(200, { "Content-Type": "application/json" }); response.end(JSON.stringify(result))
  })
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
  const address = server.address()
  process.env.UPSTASH_REDIS_REST_URL = `http://127.0.0.1:${address.port}`
  process.env.UPSTASH_REDIS_REST_TOKEN = "test-only"
  process.env.SITE_INTELLIGENCE_NAMESPACE = "qa-isolated"
  try {
    const event = validateEvent({ type: "internal_link_click", sourcePath: "/blog/a", destinationPath: "/blog/b", articleSlug: "a", linkId: "a-to-b-1", linkCategory: "editorial" })
    await Promise.all([incrementEvent(event, new Date("2026-10-24T10:00:00Z")), incrementEvent(event, new Date("2026-10-24T10:00:01Z"))])
    const daily = await readDaily("human", "2026-10-24")
    assert.equal(daily["event|internal_link_click"], 2)
    assert.equal(daily["link|/blog/a|a-to-b-1|/blog/b|editorial|internal_link_click"], 2)
    assert.ok(commandsSeen.some(([name, key]) => name === "EXPIRE" && key === "qa-isolated:human:2026-10-24"))
  } finally {
    delete process.env.UPSTASH_REDIS_REST_URL; delete process.env.UPSTASH_REDIS_REST_TOKEN; delete process.env.SITE_INTELLIGENCE_NAMESPACE
    await new Promise((resolve) => server.close(resolve))
  }
})

test("crawler User-Agent remains claimed without provider verification", () => {
  assert.deepEqual(classifyCrawler({ userAgent: "Mozilla/5.0 (compatible; OAI-SearchBot/1.0)" }), { agent: "openai_search", classification: "claimed_ai_crawler", verification: "user_agent_only" })
  assert.equal(classifyCrawler({ userAgent: "curl/8" }).classification, "unknown_automation")
})

test("verified identity requires an independent matching signal", () => {
  assert.equal(classifyCrawler({ userAgent: "Googlebot", verifiedProvider: "google" }).classification, "verified_search_crawler")
  assert.equal(classifyCrawler({ userAgent: "Googlebot", verifiedProvider: "bing" }).classification, "claimed_search_crawler")
})

test("crawler imports strip queries and distinguish document fetches", () => {
  const record = normalizeCrawlerRecord({ source: "static", timestamp: 1, proxy: { path: "/blog/example?token=secret", method: "GET", statusCode: 200, userAgent: ["bingbot"], vercelCache: "HIT" } })
  assert.equal(record.path, "/blog/example")
  assert.equal(record.successfulDocumentFetch, true)
  assert.equal(record.observation, "edge_or_platform_log")
  assert.equal(Object.hasOwn(record, "userAgent"), false)
})

test("static resources, redirects, failures, and HEAD are not successful document fetches", () => {
  for (const input of [
    { proxy: { path: "/asset.svg", method: "GET", statusCode: 200, userAgent: ["GPTBot"] } },
    { proxy: { path: "/blog/a", method: "HEAD", statusCode: 200, userAgent: ["GPTBot"] } },
    { proxy: { path: "/blog/a", method: "GET", statusCode: 301, userAgent: ["GPTBot"] } },
    { proxy: { path: "/blog/a", method: "GET", statusCode: 500, userAgent: ["GPTBot"] } },
  ]) assert.equal(normalizeCrawlerRecord(input).successfulDocumentFetch, false)
})
