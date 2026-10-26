export const ANALYTICS_CONSENT_KEY = "visaxa:analytics-consent:v1"
export const ANALYTICS_CONSENT_EVENT = "visaxa:analytics-consent-change"

export const ANALYTICS_CONSENT = Object.freeze({
  GRANTED: "granted",
  DENIED: "denied",
  UNSET: "unset",
})

export const ANALYTICS_POLICY = Object.freeze({
  OPT_IN: "opt-in",
  OPT_OUT: "opt-out",
})

export function normalizeAnalyticsPolicy(value) {
  return value === ANALYTICS_POLICY.OPT_OUT
    ? ANALYTICS_POLICY.OPT_OUT
    : ANALYTICS_POLICY.OPT_IN
}

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

export function resolveAnalyticsConsent(storage) {
  try {
    return { available: true, consent: normalizeAnalyticsConsent(storage?.getItem(ANALYTICS_CONSENT_KEY)) }
  } catch {
    return { available: false, consent: ANALYTICS_CONSENT.UNSET }
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

/**
 * @param {boolean} featureEnabled
 * @param {"granted" | "denied" | "unset"} consent
 * @param {"opt-in" | "opt-out"} [policy]
 * @param {boolean} [storageAvailable]
 */
export function analyticsTransmissionAllowed(featureEnabled, consent, policy = ANALYTICS_POLICY.OPT_IN, storageAvailable = true) {
  if (featureEnabled !== true || storageAvailable !== true || consent === ANALYTICS_CONSENT.DENIED) return false
  return normalizeAnalyticsPolicy(policy) === ANALYTICS_POLICY.OPT_OUT || consent === ANALYTICS_CONSENT.GRANTED
}
