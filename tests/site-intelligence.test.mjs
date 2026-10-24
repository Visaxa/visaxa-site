import assert from "node:assert/strict"
import test from "node:test"

import { aggregateFields, normalizePath, referrerCategory, safeCampaign, validateEvent } from "../src/lib/site-intelligence/core.mjs"
import { classifyCrawler, normalizeCrawlerRecord } from "../src/lib/site-intelligence/crawlers.mjs"
import { classifyLink, shouldEmitPageView } from "../src/lib/site-intelligence/client.mjs"

test("emits one page view for each genuine pathname transition", () => {
  assert.equal(shouldEmitPageView(null, "/blog/a"), true)
  assert.equal(shouldEmitPageView("/blog/a", "/blog/a"), false)
  assert.equal(shouldEmitPageView("/blog/a", "/blog/b"), true)
})

test("classifies internal and external links without depending on link text", () => {
  assert.deepEqual(classifyLink("/blog/b", "https://www.visaxa.app"), { type: "internal_link_click", destinationPath: "/blog/b", destinationHost: null })
  assert.deepEqual(classifyLink("https://example.com/a?private=x", "https://www.visaxa.app"), { type: "external_link_click", destinationPath: null, destinationHost: "example.com" })
  assert.equal(classifyLink("/blog/b", "https://www.visaxa.app", "article_next_click").type, "article_next_click")
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
})

test("creates aggregate dimensions without raw question or query data", () => {
  const event = validateEvent({ type: "research_question_copy", sourcePath: "/blog/a?secret=x", articleSlug: "a", questionId: "a18-question", referrerCategory: "ai_chatgpt" })
  assert.deepEqual(aggregateFields(event), ["event|research_question_copy", "path|/blog/a|research_question_copy", "article|a|research_question_copy", "question|a18-question|research_question_copy", "ai_referral|ai_chatgpt|/blog/a"])
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
