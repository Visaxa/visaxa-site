import { aggregateFields } from "./core.mjs"

function config() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? { url: url.replace(/\/$/, ""), token } : null
}

function namespace() {
  const value = process.env.SITE_INTELLIGENCE_NAMESPACE ?? "site-intelligence"
  return /^[a-zA-Z0-9:_-]{1,48}$/.test(value) ? value : "site-intelligence"
}

async function command(command) {
  const cfg = config()
  if (!cfg) return { available: false }
  const response = await fetch(`${cfg.url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  })
  if (!response.ok) throw new Error(`Telemetry storage returned ${response.status}`)
  return { available: true, body: await response.json() }
}

export async function incrementEvent(event, now = new Date()) {
  const retentionDays = Math.min(Math.max(Number(process.env.SITE_INTELLIGENCE_AGGREGATE_DAYS ?? 365), 7), 366)
  const day = now.toISOString().slice(0, 10)
  const key = `${namespace()}:human:${day}`
  const fields = aggregateFields(event)
  const commands = fields.map((field) => ["HINCRBY", key, field, 1])
  commands.push(["EXPIRE", key, retentionDays * 86400])
  return command(commands)
}

export async function readDaily(kind, day) {
  if (!new Set(["human", "crawler"]).has(kind)) throw new Error("Unsupported analytics dataset")
  const result = await command([["HGETALL", `${namespace()}:${kind}:${day}`]])
  if (!result.available) return null
  const raw = result.body?.[0]?.result ?? []
  return Object.fromEntries(Array.from({ length: Math.floor(raw.length / 2) }, (_, i) => [raw[i * 2], Number(raw[i * 2 + 1])]))
}

export async function incrementCrawler(record) {
  const day = new Date(record.timestamp).toISOString().slice(0, 10)
  const key = `${namespace()}:crawler:${day}`
  const fields = [
    `request|${record.agent}|${record.classification}`,
    `path|${record.path}|${record.agent}|${record.classification}`,
    `status|${record.status}|${record.agent}`,
  ]
  if (record.successfulDocumentFetch) fields.push(`document|${record.path}|${record.agent}|${record.classification}`)
  const retentionDays = Math.min(Math.max(Number(process.env.SITE_INTELLIGENCE_AGGREGATE_DAYS ?? 365), 7), 366)
  return command([...fields.map((field) => ["HINCRBY", key, field, 1]), ["EXPIRE", key, retentionDays * 86400]])
}
