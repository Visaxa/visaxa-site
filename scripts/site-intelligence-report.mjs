import { readDaily } from "../src/lib/site-intelligence/storage.mjs"

const days = Number(process.argv[2] ?? 28)
if (![7, 28, 90].includes(days)) throw new Error("Window must be 7, 28, or 90 days")

function dates(count) { return Array.from({ length: count }, (_, offset) => { const date = new Date(); date.setUTCDate(date.getUTCDate() - offset); return date.toISOString().slice(0, 10) }).reverse() }
function merge(target, source) { for (const [key, value] of Object.entries(source ?? {})) target[key] = (target[key] ?? 0) + value; return target }
function top(entries, prefix, count = 10) { return Object.entries(entries).filter(([key]) => key.startsWith(prefix)).sort((a, b) => b[1] - a[1]).slice(0, count) }

const human = {}
const crawler = {}
const daily = []
let available = true
for (const day of dates(days)) {
  const [h, c] = await Promise.all([readDaily("human", day), readDaily("crawler", day)])
  if (h === null || c === null) available = false
  daily.push({ day, pageViews: h?.["event|page_view"] ?? null, crawlerRequests: c ? Object.entries(c).filter(([key]) => key.startsWith("request|")).reduce((sum, [, value]) => sum + value, 0) : null })
  merge(human, h); merge(crawler, c)
}

console.log(`# Visaxa Site Intelligence — ${days} days`)
console.log(`\nStorage: ${available ? "Available" : "Not available"}`)
console.log("\n## Traffic")
console.log(available ? JSON.stringify({ byDay: daily, topPages: top(human, "path|").filter(([key]) => key.endsWith("|page_view")), trafficSeparation: "Human interactions are browser events; crawler requests are reported separately; unknown non-JavaScript traffic is Not available." }, null, 2) : "Not available")
console.log("\n## Editorial engagement")
console.log(available ? JSON.stringify(top(human, "event|"), null, 2) : "Not available")
console.log("\n## AI referrals")
console.log(available ? JSON.stringify(top(human, "ai_referral|"), null, 2) : "Not available")
console.log("\n## AI and search crawlers")
console.log(available ? JSON.stringify(top(crawler, "request|"), null, 2) : "Not available")
console.log("\nInterpretation: human events, crawler requests, AI-associated referrals, and externally reported citations are separate datasets.")
