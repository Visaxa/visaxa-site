"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { referrerCategory, safeCampaign } from "@/lib/site-intelligence/core.mjs"
import { classifyLink, shouldEmitPageView, stableLinkId } from "@/lib/site-intelligence/client.mjs"
import { ANALYTICS_CONSENT, ANALYTICS_CONSENT_EVENT, ANALYTICS_CONSENT_KEY, analyticsTransmissionAllowed, readAnalyticsConsent } from "@/lib/site-intelligence/consent.mjs"

type EventType = "page_view" | "internal_link_click" | "external_link_click" | "article_next_click" | "product_cta_click"

function articleSlug(path: string) { return path.startsWith("/blog/") ? path.slice(6).split("/")[0] : null }
function deviceCategory() { const width = window.innerWidth; return width < 640 ? "mobile" : width < 1024 ? "tablet" : "desktop" }

export function emitSiteEvent(type: string, details: Record<string, unknown> = {}) {
  const enabled = process.env.NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED === "true"
  if (!analyticsTransmissionAllowed(enabled, readAnalyticsConsent(window.localStorage))) return
  const body = JSON.stringify({ type, sourcePath: window.location.pathname, articleSlug: articleSlug(window.location.pathname), referrerCategory: referrerCategory(document.referrer), deviceCategory: deviceCategory(), campaign: safeCampaign(window.location.search), ...details })
  try {
    if (navigator.sendBeacon) navigator.sendBeacon("/api/site-intelligence/events", new Blob([body], { type: "application/json" }))
    else void fetch("/api/site-intelligence/events", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {})
  } catch { /* Analytics must never affect navigation. */ }
}

export function SiteIntelligenceClient() {
  const pathname = usePathname()
  const lastPath = useRef<string | null>(null)
  const [consent, setConsent] = useState<"granted" | "denied" | "unset">(ANALYTICS_CONSENT.UNSET)
  useEffect(() => {
    const refresh = () => setConsent(readAnalyticsConsent(window.localStorage))
    const onStorage = (event: StorageEvent) => { if (event.key === ANALYTICS_CONSENT_KEY) refresh() }
    refresh()
    window.addEventListener(ANALYTICS_CONSENT_EVENT, refresh)
    window.addEventListener("storage", onStorage)
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, refresh)
      window.removeEventListener("storage", onStorage)
    }
  }, [])
  useEffect(() => {
    if (consent !== ANALYTICS_CONSENT.GRANTED) {
      lastPath.current = null
      return
    }
    if (shouldEmitPageView(lastPath.current, pathname)) {
      lastPath.current = pathname
      emitSiteEvent("page_view")
    }
  }, [consent, pathname])
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 && event.button !== 1) return
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link || link.hasAttribute("download")) return
      const explicit = link.dataset.analyticsEvent as EventType | undefined
      const classified = classifyLink(link.href, window.location.origin, explicit)
      if (!classified) return
      const matches = [...document.querySelectorAll<HTMLAnchorElement>("a[href]")].filter((candidate) => candidate.href === link.href)
      const occurrence = Math.max(1, matches.indexOf(link) + 1)
      const linkId = stableLinkId({ sourcePath: window.location.pathname, destination: classified.destinationPath ?? classified.destinationHost ?? "unknown", occurrence, explicitId: link.dataset.analyticsId })
      emitSiteEvent(classified.type, { destinationPath: classified.destinationPath, destinationHost: classified.destinationHost, linkId, linkCategory: link.dataset.analyticsCategory ?? classified.linkCategory })
    }
    document.addEventListener("click", onClick, true)
    document.addEventListener("auxclick", onClick, true)
    return () => { document.removeEventListener("click", onClick, true); document.removeEventListener("auxclick", onClick, true) }
  }, [])
  return null
}
