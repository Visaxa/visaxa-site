import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  workers: 1,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:3032",
    browserName: "chromium",
    channel: "chrome",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npx next start -p 3032",
    url: "http://127.0.0.1:3032/privacy",
    reuseExistingServer: true,
    timeout: 120_000,
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_INTELLIGENCE_ENABLED: "true",
      SITE_INTELLIGENCE_ENABLED: "false",
    },
  },
})
