import fs from "node:fs/promises"

import { normalizeCrawlerRecord } from "../src/lib/site-intelligence/crawlers.mjs"
import { incrementCrawler } from "../src/lib/site-intelligence/storage.mjs"

const file = process.argv[2]
if (!file) throw new Error("Usage: npm run intelligence:import-crawlers -- <vercel-log.json-or-ndjson>")
const text = await fs.readFile(file, "utf8")
let rows
try { const parsed = JSON.parse(text); rows = Array.isArray(parsed) ? parsed : [parsed] } catch { rows = text.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line)) }
let imported = 0
for (const row of rows) {
  const record = normalizeCrawlerRecord(row)
  if (!record || record.agent === "unknown") continue
  await incrementCrawler(record)
  imported += 1
}
console.log(`Imported ${imported} crawler records. User-Agent-only identities remain claimed, never verified.`)
