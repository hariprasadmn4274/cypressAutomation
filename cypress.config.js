const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for Mochawesome reports

  e2e: {
    setupNodeEvents(on, config) {
      // Set up Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Set up Allure plugin
      allureWriter(on, config);

      return config;
    },
  },
  
});
