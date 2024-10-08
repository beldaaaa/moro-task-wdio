import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.conf'

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: [
        {
            browserName: 'firefox',
            maxInstances: 1,
            'moz:firefoxOptions': {
                args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
                prefs: {
                    'network.cookie.cookieBehavior': 2, // Block all cookies
                },
            },
        },
    ],
};