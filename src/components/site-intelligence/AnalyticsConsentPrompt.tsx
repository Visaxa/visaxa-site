"use client"

import Link from "next/link"

import { useAnalyticsConsent } from "@/components/site-intelligence/AnalyticsSettings"
import { shouldShowConsentPrompt } from "@/lib/site-intelligence/consent.mjs"

export function AnalyticsConsentPrompt() {
  const { consent, choose, resolved, storageAvailable } = useAnalyticsConsent()
  const analyticsAvailable = process.env.NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED === "true"

  if (!shouldShowConsentPrompt({ featureEnabled: analyticsAvailable, resolved, storageAvailable, consent })) {
    return null
  }

  return (
    <aside
      aria-labelledby="analytics-consent-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-xl border bg-background/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-auto sm:right-5 sm:bottom-5 sm:mx-0 sm:p-5"
    >
      <h2 id="analytics-consent-title" className="text-base font-semibold">Help us improve Visaxa</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        We use limited anonymous statistics to understand which articles and links are useful. No advertising tracking or visitor profiles.
      </p>
      <div className="mt-4 flex flex-col gap-2 min-[420px]:flex-row">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="min-h-10 flex-1 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="min-h-10 flex-1 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Decline
        </button>
      </div>
      <Link
        href="/privacy#analytics-settings-heading"
        className="mt-3 inline-block text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Privacy &amp; Analytics Settings
      </Link>
    </aside>
  )
}
