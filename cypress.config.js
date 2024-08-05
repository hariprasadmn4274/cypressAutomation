const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for Mochawesome reports

        e2e: {
                  setupNodeEvents(on, config) {//keep any config code within 'setupNodeEvents' and 'return config'
                            //1) Set up Mochawesome reporter
                            require('cypress-mochawesome-reporter/plugin')(on);

                            //2) Set up Allure plugin
                            allureWriter(on, config);

                            //3)defining cy.task()
                            on('task', {
                              simpleInterest({ interest, principal }) {
                                let si = (interest / 100) * principal;
                                return si;
                              }
                            });

                    return config;
                  },
        },
  
});
