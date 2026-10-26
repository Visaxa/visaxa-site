export const ANALYTICS_CONSENT_KEY = "visaxa:analytics-consent:v1"
export const ANALYTICS_CONSENT_EVENT = "visaxa:analytics-consent-change"

export const ANALYTICS_CONSENT = Object.freeze({
  GRANTED: "granted",
  DENIED: "denied",
  UNSET: "unset",
})

export function normalizeAnalyticsConsent(value) {
  return value === ANALYTICS_CONSENT.GRANTED || value === ANALYTICS_CONSENT.DENIED
    ? value
    : ANALYTICS_CONSENT.UNSET
}

export function readAnalyticsConsent(storage) {
  try {
    return normalizeAnalyticsConsent(storage?.getItem(ANALYTICS_CONSENT_KEY))
  } catch {
    return ANALYTICS_CONSENT.UNSET
  }
}

export function writeAnalyticsConsent(storage, value) {
  const normalized = normalizeAnalyticsConsent(value)
  if (normalized === ANALYTICS_CONSENT.UNSET) {
    throw new TypeError("Analytics consent must be granted or denied")
  }
  storage?.setItem(ANALYTICS_CONSENT_KEY, normalized)
  return normalized
}

export function analyticsTransmissionAllowed(featureEnabled, consent) {
  return featureEnabled === true && consent === ANALYTICS_CONSENT.GRANTED
}
