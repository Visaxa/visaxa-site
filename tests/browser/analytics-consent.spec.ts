import { expect, test, type Page, type Request } from "@playwright/test"

type AnalyticsEvent = { type?: string; sourcePath?: string; destinationPath?: string; linkId?: string; questionId?: string }

async function captureAnalytics(page: Page) {
  const events: AnalyticsEvent[] = []
  await page.route("**/api/site-intelligence/events", async (route) => {
    const request: Request = route.request()
    try { events.push(request.postDataJSON() as AnalyticsEvent) } catch { events.push({}) }
    await route.fulfill({ status: 204, body: "" })
  })
  return events
}

test("first visit is off, prompt is accessible, and decline persists", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"])
  const events = await captureAnalytics(page)
  await page.goto("/blog/how-to-pressure-test-salon-software-vendor-claims")

  const prompt = page.getByRole("complementary", { name: "Help us improve Visaxa" })
  await expect(prompt).toBeVisible()
  await expect(prompt.getByRole("button", { name: "Allow analytics" })).toBeVisible()
  await expect(prompt.getByRole("button", { name: "Decline" })).toBeVisible()
  await expect(prompt.getByRole("link", { name: "Privacy & Analytics Settings" })).toBeVisible()
  expect(events).toHaveLength(0)

  await prompt.getByRole("button", { name: "Decline" }).focus()
  await expect(prompt.getByRole("button", { name: "Decline" })).toBeFocused()
  await prompt.getByRole("button", { name: "Decline" }).click()
  await expect(prompt).toBeHidden()
  await page.reload()
  await expect(prompt).toBeHidden()

  await page.getByRole("button", { name: "Copy research question" }).click()
  await page.getByRole("link", { name: "Research", exact: true }).first().click()
  await expect(page).toHaveURL(/\/blog$/)
  expect(events).toHaveLength(0)
})

test("allow records only post-consent activity, withdrawal stops it, and re-enable resumes", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"])
  const events = await captureAnalytics(page)
  await page.goto("/blog/how-to-pressure-test-salon-software-vendor-claims")
  expect(events).toHaveLength(0)

  await page.getByRole("complementary", { name: "Help us improve Visaxa" }).getByRole("button", { name: "Allow analytics" }).click()
  await expect.poll(() => events.length).toBe(1)
  expect(events[0]).toMatchObject({ type: "page_view", sourcePath: "/blog/how-to-pressure-test-salon-software-vendor-claims" })

  await page.getByRole("button", { name: "Copy research question" }).click()
  await expect.poll(() => events.some((event) => event.type === "research_question_copy")).toBe(true)
  const copyEvent = events.find((event) => event.type === "research_question_copy")
  expect(copyEvent?.questionId).toBe("a18-evidence-threshold")

  await page.goto("/privacy")
  await expect.poll(() => events.filter((event) => event.type === "page_view").length).toBe(2)
  await page.getByRole("group", { name: "Optional analytics preference" }).getByRole("button", { name: "Keep analytics off" }).click()
  const afterWithdrawal = events.length
  await page.goto("/blog")
  await page.getByRole("link", { name: /Your Salon Software Problem Is Real/i }).click()
  await expect(page).toHaveURL(/salon-software-problem-how-much-change-does-it-justify/)
  expect(events).toHaveLength(afterWithdrawal)

  await page.goto("/privacy")
  await page.getByRole("group", { name: "Optional analytics preference" }).getByRole("button", { name: "Allow analytics" }).click()
  await expect.poll(() => events.length).toBe(afterWithdrawal + 1)
  expect(events.at(-1)?.type).toBe("page_view")
  expect(events.filter((event) => event.questionId === "a18-evidence-threshold")).toHaveLength(1)
})

test("unavailable storage fails closed without an endlessly repeating prompt", async ({ page }) => {
  await page.addInitScript(() => {
    const consentKey = "visaxa:analytics-consent:v1"
    const getItem = Storage.prototype.getItem
    const setItem = Storage.prototype.setItem
    Storage.prototype.getItem = function (key) {
      if (key === consentKey) throw new Error("consent storage blocked")
      return getItem.call(this, key)
    }
    Storage.prototype.setItem = function (key, value) {
      if (key === consentKey) throw new Error("consent storage blocked")
      return setItem.call(this, key, value)
    }
  })
  const events = await captureAnalytics(page)
  await page.goto("/blog/how-to-pressure-test-salon-software-vendor-claims")
  await expect(page.getByRole("complementary", { name: "Help us improve Visaxa" })).toBeHidden()
  await page.getByRole("link", { name: "Research", exact: true }).first().click()
  expect(events).toHaveLength(0)
})

test("prompt fits a 375px viewport without horizontal overflow", async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } })
  const page = await context.newPage()
  await captureAnalytics(page)
  await page.goto("/blog/how-to-pressure-test-salon-software-vendor-claims")
  const prompt = page.getByRole("complementary", { name: "Help us improve Visaxa" })
  await expect(prompt).toBeVisible()
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
  expect(overflow).toBe(false)
  await expect(prompt.getByRole("button", { name: "Allow analytics" })).toBeVisible()
  await expect(prompt.getByRole("button", { name: "Decline" })).toBeVisible()
  await context.close()
})
