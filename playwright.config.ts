import { defineConfig, devices } from '@playwright/test'

const isCIMode = process.env.CI

const browsers = [
  ['chromium', 'Desktop Chrome'],
  ...(isCIMode
    ? [
        ['firefox', 'Desktop Firefox'],
        ['webkit', 'Desktop Safari'],
        ['edge', 'Desktop Edge'],
      ]
    : []),
]

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './ui_tests',
  testMatch: '*spec.ts',
  snapshotPathTemplate:
    '{testDir}/{testFileDir}/__screenshots__/{testFileName}/{arg}-{platform}{ext}',
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'playwright-results',
  /* Run tests in files in parallel */
  /* The maximum number of concurrent worker processes to use for parallelizing tests. */
  workers: '150%',
  // fullyParallel: true,
  /* The maximum number of retry attempts given to failed tests. */
  retries: isCIMode ? 1 : 0,
  timeout: 70000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: isCIMode ? 'dot' : 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    testIdAttribute: 'data-test-id',

    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /src\/setup\/global\.setup\.ts/ },
    ...browsers.map(([name, device]) => ({
      name,
      use: {
        ...devices[device],
      },
      dependencies: ['setup'],
    })),
  ],
})
