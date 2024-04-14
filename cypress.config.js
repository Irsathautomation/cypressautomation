const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  video:true,
  videoCompression: true,
  retries:{
    runMode:1,
    openMode:0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())

    },specPattern: 'cypress/e2e/*.cy.{js.ts}',execTimeout: 80000,
    
  },
});
