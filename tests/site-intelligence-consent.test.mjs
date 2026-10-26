import assert from "node:assert/strict"
import test from "node:test"

import {
  ANALYTICS_CONSENT,
  ANALYTICS_CONSENT_KEY,
  analyticsTransmissionAllowed,
  readAnalyticsConsent,
  resolveAnalyticsPreference,
  shouldShowConsentPrompt,
  writeAnalyticsConsent,
} from "../src/lib/site-intelligence/consent.mjs"
import { shouldEmitPageView } from "../src/lib/site-intelligence/client.mjs"

function storage(seed = {}) {
  const values = new Map(Object.entries(seed))
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key),
    snapshot: () => Object.fromEntries(values),
  }
}

test("analytics is opt-in: unset and rejected choices block transmission", () => {
  assert.equal(analyticsTransmissionAllowed(true, ANALYTICS_CONSENT.UNSET), false)
  assert.equal(analyticsTransmissionAllowed(true, ANALYTICS_CONSENT.DENIED), false)
  assert.equal(analyticsTransmissionAllowed(true, ANALYTICS_CONSENT.GRANTED), true)
  assert.equal(analyticsTransmissionAllowed(false, ANALYTICS_CONSENT.GRANTED), false)
})

test("preference persists using one bounded localStorage value", () => {
  const local = storage()
  assert.equal(readAnalyticsConsent(local), ANALYTICS_CONSENT.UNSET)
  writeAnalyticsConsent(local, ANALYTICS_CONSENT.GRANTED)
  assert.deepEqual(local.snapshot(), { [ANALYTICS_CONSENT_KEY]: "granted" })
  assert.equal(readAnalyticsConsent(local), ANALYTICS_CONSENT.GRANTED)
})

test("rejection and withdrawal stop subsequent transmission across refreshes", () => {
  const local = storage()
  writeAnalyticsConsent(local, ANALYTICS_CONSENT.DENIED)
  assert.equal(analyticsTransmissionAllowed(true, readAnalyticsConsent(local)), false)
  writeAnalyticsConsent(local, ANALYTICS_CONSENT.GRANTED)
  assert.equal(analyticsTransmissionAllowed(true, readAnalyticsConsent(local)), true)
  writeAnalyticsConsent(local, ANALYTICS_CONSENT.DENIED)
  assert.equal(analyticsTransmissionAllowed(true, readAnalyticsConsent(local)), false)
})

test("navigation is eligible once per path only while consent remains granted", () => {
  let previous = null
  const eligible = (path, consent) => {
    if (!analyticsTransmissionAllowed(true, consent)) {
      previous = null
      return false
    }
    if (!shouldEmitPageView(previous, path)) return false
    previous = path
    return true
  }
  assert.equal(eligible("/blog/a", ANALYTICS_CONSENT.UNSET), false)
  assert.equal(eligible("/blog/a", ANALYTICS_CONSENT.GRANTED), true)
  assert.equal(eligible("/blog/a", ANALYTICS_CONSENT.GRANTED), false)
  assert.equal(eligible("/blog/b", ANALYTICS_CONSENT.GRANTED), true)
  assert.equal(eligible("/blog/c", ANALYTICS_CONSENT.DENIED), false)
})

test("invalid or inaccessible storage fails closed", () => {
  const broken = { getItem() { throw new Error("blocked") } }
  assert.equal(readAnalyticsConsent(broken), ANALYTICS_CONSENT.UNSET)
  assert.equal(readAnalyticsConsent(storage({ [ANALYTICS_CONSENT_KEY]: "yes" })), ANALYTICS_CONSENT.UNSET)
})

test("first visit resolves as available and unset without writing a preference", () => {
  const local = storage()
  assert.deepEqual(resolveAnalyticsPreference(local), { available: true, consent: ANALYTICS_CONSENT.UNSET })
  assert.deepEqual(local.snapshot(), {})
})

test("unavailable storage suppresses the prompt and analytics", () => {
  const blocked = { getItem() { throw new Error("blocked") }, setItem() { throw new Error("blocked") }, removeItem() {} }
  assert.deepEqual(resolveAnalyticsPreference(blocked), { available: false, consent: ANALYTICS_CONSENT.UNSET })
  assert.equal(analyticsTransmissionAllowed(true, resolveAnalyticsPreference(blocked).consent), false)
})

test("prompt appears only for a resolved first visit with the client feature enabled", () => {
  const baseline = { featureEnabled: true, resolved: true, storageAvailable: true, consent: ANALYTICS_CONSENT.UNSET }
  assert.equal(shouldShowConsentPrompt(baseline), true)
  assert.equal(shouldShowConsentPrompt({ ...baseline, featureEnabled: false }), false)
  assert.equal(shouldShowConsentPrompt({ ...baseline, resolved: false }), false)
  assert.equal(shouldShowConsentPrompt({ ...baseline, storageAvailable: false }), false)
  assert.equal(shouldShowConsentPrompt({ ...baseline, consent: ANALYTICS_CONSENT.GRANTED }), false)
  assert.equal(shouldShowConsentPrompt({ ...baseline, consent: ANALYTICS_CONSENT.DENIED }), false)
})
