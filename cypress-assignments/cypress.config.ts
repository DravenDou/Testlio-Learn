import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/test-cases/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});