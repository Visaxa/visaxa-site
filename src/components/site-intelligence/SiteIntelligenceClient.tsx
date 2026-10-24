"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

import { referrerCategory, safeCampaign } from "@/lib/site-intelligence/core.mjs"
import { classifyLink, shouldEmitPageView } from "@/lib/site-intelligence/client.mjs"

type EventType = "page_view" | "internal_link_click" | "external_link_click" | "article_next_click" | "product_cta_click"

function articleSlug(path: string) { return path.startsWith("/blog/") ? path.slice(6).split("/")[0] : null }
function deviceCategory() { const width = window.innerWidth; return width < 640 ? "mobile" : width < 1024 ? "tablet" : "desktop" }

export function emitSiteEvent(type: string, details: Record<string, unknown> = {}) {
  if (process.env.NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED !== "true") return
  const body = JSON.stringify({ type, sourcePath: window.location.pathname, articleSlug: articleSlug(window.location.pathname), referrerCategory: referrerCategory(document.referrer), deviceCategory: deviceCategory(), campaign: safeCampaign(window.location.search), ...details })
  try {
    if (navigator.sendBeacon) navigator.sendBeacon("/api/site-intelligence/events", new Blob([body], { type: "application/json" }))
    else void fetch("/api/site-intelligence/events", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {})
  } catch { /* Analytics must never affect navigation. */ }
}

export function SiteIntelligenceClient() {
  const pathname = usePathname()
  const lastPath = useRef<string | null>(null)
  useEffect(() => { if (shouldEmitPageView(lastPath.current, pathname)) { lastPath.current = pathname; emitSiteEvent("page_view") } }, [pathname])
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link || link.hasAttribute("download")) return
      const explicit = link.dataset.analyticsEvent as EventType | undefined
      const classified = classifyLink(link.href, window.location.origin, explicit)
      if (!classified) return
      const linkId = link.dataset.analyticsId || `destination:${classified.destinationPath ?? classified.destinationHost}`
      emitSiteEvent(classified.type, { destinationPath: classified.destinationPath, destinationHost: classified.destinationHost, linkId })
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])
  return null
}
