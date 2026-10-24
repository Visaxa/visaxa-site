const REGISTRY = [
  { id: "openai_search", group: "ai", test: /OAI-SearchBot/i },
  { id: "openai_training", group: "ai", test: /GPTBot/i },
  { id: "openai_user", group: "ai", test: /ChatGPT-User/i },
  { id: "anthropic", group: "ai", test: /ClaudeBot|Claude-SearchBot|Claude-User|anthropic-ai/i },
  { id: "perplexity", group: "ai", test: /PerplexityBot|Perplexity-User/i },
  { id: "google", group: "search", test: /Googlebot/i },
  { id: "bing", group: "search", test: /bingbot|BingPreview/i },
]

const DOCUMENT = /^(?:\/|\/blog(?:\/[^/.]+)?|\/research(?:\/about)?|\/features|\/pricing|\/compare(?:\/[^/.]+)?|\/what-is-visaxa|\/contact|\/privacy|\/terms)$/

export function classifyCrawler({ userAgent = "", verifiedProvider = null } = {}) {
  const match = REGISTRY.find((agent) => agent.test.test(userAgent))
  if (!match) return { agent: "unknown", classification: userAgent ? "unknown_automation" : "unknown_automation", verification: "unknown" }
  const verified = verifiedProvider === match.id
  return {
    agent: match.id,
    classification: `${verified ? "verified" : "claimed"}_${match.group}_crawler`,
    verification: verified ? "provider_verified" : "user_agent_only",
  }
}

export function normalizeCrawlerRecord(record) {
  const proxy = record?.proxy ?? {}
  const rawPath = proxy.path ?? record?.path ?? "/"
  let path
  try { path = new URL(rawPath, "https://www.visaxa.app").pathname.replace(/\/$/, "") || "/" } catch { return null }
  const userAgent = Array.isArray(proxy.userAgent) ? proxy.userAgent[0] : proxy.userAgent ?? record?.userAgent ?? ""
  const identity = classifyCrawler({ userAgent, verifiedProvider: record?.verifiedProvider ?? null })
  const method = String(proxy.method ?? record?.method ?? "GET").toUpperCase()
  const status = Number(proxy.statusCode ?? record?.statusCode ?? 0)
  return {
    timestamp: Number(record?.timestamp ?? Date.now()),
    path: path.slice(0, 300),
    agent: identity.agent,
    classification: identity.classification,
    verification: identity.verification,
    method,
    status,
    cache: String(proxy.vercelCache ?? record?.cache ?? "unknown").slice(0, 40),
    observation: record?.source ? "edge_or_platform_log" : "origin_or_imported_log",
    successfulDocumentFetch: method === "GET" && status >= 200 && status < 300 && DOCUMENT.test(path),
  }
}

export { REGISTRY as CRAWLER_REGISTRY }
