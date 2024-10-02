import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // defaultCommandTimeout: 150000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
    // baseUrl: 'http://localstorage:3000'
  }
})
