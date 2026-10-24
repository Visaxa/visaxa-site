import { NextResponse } from "next/server"

import { validateEvent } from "@/lib/site-intelligence/core.mjs"
import { incrementEvent } from "@/lib/site-intelligence/storage.mjs"

export const runtime = "nodejs"

const windows = new Map<string, { count: number; reset: number }>()

export async function POST(request: Request) {
  if (process.env.SITE_INTELLIGENCE_ENABLED !== "true") return new NextResponse(null, { status: 204 })
  const origin = request.headers.get("origin")
  if (origin !== "https://www.visaxa.app" && origin !== "http://localhost:3000") return NextResponse.json({ error: "origin" }, { status: 403 })
  const length = Number(request.headers.get("content-length") ?? 0)
  if (length > 4096) return NextResponse.json({ error: "payload" }, { status: 413 })
  const now = Date.now()
  const bucket = origin ?? "unknown"
  const current = windows.get(bucket)
  if (!current || current.reset < now) windows.set(bucket, { count: 1, reset: now + 60_000 })
  else if (++current.count > 120) return NextResponse.json({ error: "rate" }, { status: 429 })
  let input: unknown
  try { input = await request.json() } catch { return NextResponse.json({ error: "json" }, { status: 400 }) }
  const event = validateEvent(input)
  if (!event) return NextResponse.json({ error: "event" }, { status: 400 })
  try { await incrementEvent(event); return new NextResponse(null, { status: 204 }) } catch { return new NextResponse(null, { status: 204 }) }
}
