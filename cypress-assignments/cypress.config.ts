import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: 'cypress/integration/test-cases/**/*.cy.{js,jsx,ts,tsx}',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
  
    },
  },
});