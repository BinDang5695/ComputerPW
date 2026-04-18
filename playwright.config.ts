import { defineConfig, devices, FullProject } from '@playwright/test';

export default defineConfig({

    fullyParallel: true,
    testDir: './tests/',
    workers: 2,
    timeout: 90 * 1000, //timeout for each test
    expect: {
        timeout: 15 * 1000, //timeout for each expect condition
    },
    projects:[
      {
        name: "chrome",
        retries: 1,
        use: {
            browserName: 'chromium',
            channel: 'chrome',
        },
      },

      {
        name: "edge",
        retries: 1,
        use: {
            browserName: 'chromium',
            channel: 'msedge',
        },
      },
    ],
    use: {
        baseURL: "https://demowebshop.tricentis.com",
        headless: false,
        actionTimeout: 20 * 1000, //timeout for each action like click, fill
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        viewport: null,
        launchOptions: {
            args: ['--start-maximized'],
        },
    },
    
    reporter: [
        ['list'],
        ['html', {open: 'never'}],
        ['allure-playwright', {
            outputFolder: ({ project }: { project: FullProject }) => `allure-results/${project.name}`
        }]
    ]

});