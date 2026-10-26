import { readDaily } from "../src/lib/site-intelligence/storage.mjs"

const days = Number(process.argv[2] ?? 28)
if (![7, 28, 90].includes(days)) throw new Error("Window must be 7, 28, or 90 days")

function dates(count) { return Array.from({ length: count }, (_, offset) => { const date = new Date(); date.setUTCDate(date.getUTCDate() - offset); return date.toISOString().slice(0, 10) }).reverse() }
function merge(target, source) { for (const [key, value] of Object.entries(source ?? {})) target[key] = (target[key] ?? 0) + value; return target }
function top(entries, prefix, count = 10) { return Object.entries(entries).filter(([key]) => key.startsWith(prefix)).sort((a, b) => b[1] - a[1]).slice(0, count) }

const human = {}
const crawler = {}
const daily = []
let humanAvailable = true
let crawlerAvailable = true
let humanObserved = false
let crawlerObserved = false
for (const day of dates(days)) {
  const [h, c] = await Promise.all([readDaily("human", day), readDaily("crawler", day)])
  if (h !== null) humanObserved = true
  if (c !== null) crawlerObserved = true
  daily.push({ day, pageViews: h ? (h["event|page_view"] ?? 0) : null, crawlerRequests: c ? Object.entries(c).filter(([key]) => key.startsWith("request|")).reduce((sum, [, value]) => sum + value, 0) : null })
  merge(human, h); merge(crawler, c)
}
humanAvailable = humanAvailable && humanObserved
crawlerAvailable = crawlerAvailable && crawlerObserved

console.log(`# Visaxa Site Intelligence — ${days} days`)
console.log(`\nHuman dataset: ${humanAvailable ? "Available" : "Not available"}`)
console.log(`Crawler dataset: ${crawlerAvailable ? "Available" : "Not available"}`)
console.log("\n## Traffic")
console.log(humanAvailable ? JSON.stringify({ byDay: daily.map(({ day, pageViews }) => ({ day, pageViews: pageViews ?? 0 })), topViewedPages: top(human, "path|").filter(([key]) => key.endsWith("|page_view")), note: "Page views are events, not unique visitors." }, null, 2) : "Not available")
console.log("\n## Editorial engagement")
console.log(humanAvailable ? JSON.stringify({ eventTotals: top(human, "event|"), topInternalLinks: top(human, "link|").filter(([key]) => key.includes("|internal_link_click")), nextArticleTransitions: top(human, "link|").filter(([key]) => key.includes("|article_next_click")), topCopiedQuestions: top(human, "question|"), productCtas: top(human, "link|").filter(([key]) => key.includes("|product_cta_click")), externalReferenceClicks: top(human, "link|").filter(([key]) => key.includes("|external_link_click")) }, null, 2) : "Not available")
console.log("\n## AI referrals")
console.log(humanAvailable ? JSON.stringify(top(human, "ai_referral|"), null, 2) : "Not available")
console.log("\n## AI and search crawlers")
console.log(crawlerAvailable ? JSON.stringify({ requests: top(crawler, "request|"), successfulDocuments: top(crawler, "document|") }, null, 2) : "Not available")
console.log("\nInterpretation: human events, crawler requests, AI-associated referrals, and externally reported citations are separate datasets.")
