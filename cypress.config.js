const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ticketazo.com.ar',
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
})