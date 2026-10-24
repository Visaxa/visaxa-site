"use client"

import { useState, type ReactNode } from "react"
import { Copy } from "lucide-react"

import { emitSiteEvent } from "@/components/site-intelligence/SiteIntelligenceClient"

export function ResearchQuestion({ id, children }: { id: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false)
  const text = typeof children === "string" ? children : ""
  async function copy() {
    if (!text || !navigator.clipboard?.writeText) return
    try { await navigator.clipboard.writeText(text); setCopied(true); emitSiteEvent("research_question_copy", { questionId: id }); window.setTimeout(() => setCopied(false), 1600) } catch { /* Failed copy is not an event. */ }
  }
  return <div className="my-8 rounded-xl border bg-muted/20 p-5"><p className="m-0 text-lg font-medium leading-8 text-foreground">{children}</p><button type="button" onClick={copy} className="mt-4 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted" aria-label="Copy research question"><Copy className="size-4" aria-hidden="true" />{copied ? "Copied" : "Copy question"}</button></div>
}
