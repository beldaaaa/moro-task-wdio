import type { Options } from '@wdio/types';
export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./tests/google-search.spec.ts'],
  capabilities: [
    {
      browserName: 'chrome',
      maxInstances: 1,
      'goog:chromeOptions': {
        prefs: {
          'profile.default_content_setting_values.cookies': 2, //block all cookies
        },
      },
    },
  ],
  logLevel: 'info',
  baseUrl: 'https://www.google.com',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  },
  reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
  }]],
  autoCompileOpts: {
    tsNodeOpts: {
      project: './tsconfig.json',
    },
  },
};