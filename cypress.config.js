const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1/',
    video: false,
  },
})
