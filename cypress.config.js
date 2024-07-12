const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'rbsf7w',
  defaultCommandTimeout: 90000,
  requestTimeout: 20000,
  chromeWebSecurity: false,
  userAgent: 'testing_agent_visual',
  redirectionLimit: 100,
  env: {
    AUTH_USER: '',
    AUTH_PASS: '',
    ignore_JS_Error: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: '...',
    // baseUrl: '://stage.livoneo.de',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
