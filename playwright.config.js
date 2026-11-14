
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Stop execution after the first failed test
  maxFailures: 1,

  // Fail the build if test.only is used in CI
  forbidOnly: !!process.env.CI,

  // Retry only on CI
  retries: process.env.CI ? 2 : 0,

  // Workers configuration
  workers: process.env.CI ? 1 : undefined,

  // Show test results in terminal
  reporter: [
    ['line'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://practicesoftwaretesting.com/',
    testIdAttribute: 'data-test' ,

    // Run browser in background (no visible window)
    headless: true,

    // Collect trace on first retry
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
