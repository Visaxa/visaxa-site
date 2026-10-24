export const EVENT_TYPES = new Set([
  "page_view",
  "internal_link_click",
  "external_link_click",
  "research_question_copy",
  "article_next_click",
  "product_cta_click",
])

const SAFE_CAMPAIGN_KEYS = new Set(["utm_source", "utm_medium", "utm_campaign"])
const VALUE = /^[a-zA-Z0-9._:-]{1,120}$/

export function normalizePath(value) {
  if (typeof value !== "string") return null
  try {
    const url = new URL(value, "https://www.visaxa.app")
    if (url.origin !== "https://www.visaxa.app") return null
    return (url.pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/").slice(0, 300)
  } catch {
    return null
  }
}

export function safeCampaign(search = "") {
  const params = new URLSearchParams(search)
  return Object.fromEntries(
    [...SAFE_CAMPAIGN_KEYS]
      .map((key) => [key, params.get(key)])
      .filter(([, value]) => value && VALUE.test(value)),
  )
}

export function referrerCategory(referrer) {
  if (!referrer) return "unknown_direct"
  let host
  try { host = new URL(referrer).hostname.toLowerCase().replace(/^www\./, "") } catch { return "unknown_direct" }
  if (host === "visaxa.app" || host.endsWith(".visaxa.app")) return "internal"
  if (host === "chatgpt.com" || host.endsWith(".chatgpt.com")) return "ai_chatgpt"
  if (host === "perplexity.ai" || host.endsWith(".perplexity.ai")) return "ai_perplexity"
  if (host === "copilot.microsoft.com") return "ai_copilot"
  if (host === "claude.ai" || host.endsWith(".claude.ai")) return "ai_claude"
  if (host === "gemini.google.com") return "ai_gemini"
  if (/^(google|bing|duckduckgo|yahoo)\./.test(host)) return "search"
  return "external_other"
}

export function validateEvent(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null
  if (!EVENT_TYPES.has(input.type)) return null
  const sourcePath = normalizePath(input.sourcePath)
  if (!sourcePath) return null
  const clean = {
    type: input.type,
    sourcePath,
    destinationPath: input.destinationPath ? normalizePath(input.destinationPath) : null,
    destinationHost: typeof input.destinationHost === "string" && /^(?:[a-z0-9-]+\.)+[a-z]{2,}$/i.test(input.destinationHost) ? input.destinationHost.toLowerCase().slice(0, 160) : null,
    linkId: typeof input.linkId === "string" && VALUE.test(input.linkId) ? input.linkId : null,
    articleSlug: typeof input.articleSlug === "string" && VALUE.test(input.articleSlug) ? input.articleSlug : null,
    questionId: typeof input.questionId === "string" && VALUE.test(input.questionId) ? input.questionId : null,
    referrerCategory: typeof input.referrerCategory === "string" && VALUE.test(input.referrerCategory) ? input.referrerCategory : "unknown_direct",
    deviceCategory: ["mobile", "tablet", "desktop", "unknown"].includes(input.deviceCategory) ? input.deviceCategory : "unknown",
    campaign: input.campaign && typeof input.campaign === "object" ? Object.fromEntries(Object.entries(input.campaign).filter(([k, v]) => SAFE_CAMPAIGN_KEYS.has(k) && typeof v === "string" && VALUE.test(v))) : {},
  }
  if (clean.type === "external_link_click" && !clean.destinationHost) return null
  if (["internal_link_click", "article_next_click", "product_cta_click"].includes(clean.type) && !clean.destinationPath) return null
  if (clean.type === "research_question_copy" && !clean.questionId) return null
  return clean
}

export function aggregateFields(event) {
  const fields = [`event|${event.type}`, `path|${event.sourcePath}|${event.type}`]
  if (event.destinationPath) fields.push(`destination|${event.sourcePath}|${event.destinationPath}|${event.type}`)
  if (event.destinationHost) fields.push(`external|${event.destinationHost}|${event.type}`)
  if (event.articleSlug) fields.push(`article|${event.articleSlug}|${event.type}`)
  if (event.questionId) fields.push(`question|${event.questionId}|${event.type}`)
  if (event.referrerCategory.startsWith("ai_")) fields.push(`ai_referral|${event.referrerCategory}|${event.sourcePath}`)
  return fields
}
