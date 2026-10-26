"use client"

import { useEffect, useState } from "react"

import {
  ANALYTICS_CONSENT,
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_KEY,
  resolveAnalyticsPreference,
  writeAnalyticsConsent,
} from "@/lib/site-intelligence/consent.mjs"

type Consent = (typeof ANALYTICS_CONSENT)[keyof typeof ANALYTICS_CONSENT]

export function useAnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(ANALYTICS_CONSENT.UNSET)
  const [resolved, setResolved] = useState(false)
  const [storageAvailable, setStorageAvailable] = useState(false)

  useEffect(() => {
    const refresh = () => {
      let preference = { available: false, consent: ANALYTICS_CONSENT.UNSET as Consent }
      try {
        preference = resolveAnalyticsPreference(window.localStorage)
      } catch {
        // Accessing window.localStorage itself may throw in restricted contexts.
      }
      setConsent(preference.consent)
      setStorageAvailable(preference.available)
      setResolved(true)
    }
    const onStorage = (event: StorageEvent) => {
      if (event.key === ANALYTICS_CONSENT_KEY) refresh()
    }
    refresh()
    window.addEventListener(ANALYTICS_CONSENT_EVENT, refresh)
    window.addEventListener("storage", onStorage)
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, refresh)
      window.removeEventListener("storage", onStorage)
    }
  }, [])

  const choose = (value: "granted" | "denied") => {
    try {
      writeAnalyticsConsent(window.localStorage, value)
      setConsent(value)
      window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT))
      return true
    } catch {
      setConsent(ANALYTICS_CONSENT.UNSET)
      setStorageAvailable(false)
      return false
    }
  }

  return { consent, choose, resolved, storageAvailable }
}

function Controls({ compact = false }: { compact?: boolean }) {
  const { consent, choose } = useAnalyticsConsent()
  const status = consent === ANALYTICS_CONSENT.GRANTED
    ? "Optional analytics are on."
    : consent === ANALYTICS_CONSENT.DENIED
      ? "Optional analytics are off."
      : "Optional analytics are off until you choose to allow them."

  return (
    <div className={compact ? "space-y-3" : "mt-4 space-y-4"}>
      <p className={compact ? "text-xs leading-5 text-muted-foreground" : "leading-7 text-muted-foreground"} aria-live="polite">
        {status}
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Optional analytics preference">
        <button
          type="button"
          onClick={() => choose("granted")}
          aria-pressed={consent === ANALYTICS_CONSENT.GRANTED}
          className="rounded-md border bg-foreground px-3 py-2 text-xs font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          aria-pressed={consent === ANALYTICS_CONSENT.DENIED}
          className="rounded-md border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Keep analytics off
        </button>
      </div>
    </div>
  )
}

export function AnalyticsSettings({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <details className="max-w-sm text-sm">
        <summary className="cursor-pointer font-medium text-foreground underline-offset-4 hover:underline">
          Analytics settings
        </summary>
        <Controls compact />
      </details>
    )
  }

  return (
    <section className="py-7" aria-labelledby="analytics-settings-heading">
      <h2 id="analytics-settings-heading" className="text-xl font-semibold">Analytics settings</h2>
      <p className="mt-3 leading-7 text-muted-foreground">
        Optional editorial analytics remain off unless you allow them. You can change or withdraw your choice here at any time.
      </p>
      <Controls />
    </section>
  )
}
