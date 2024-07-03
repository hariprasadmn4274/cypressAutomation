# cypressAutomation

# jenkins set up for local
step 1) download jenkins either app or jenkins war file(i downloaded).

        keep it in c drive

step 2) open cmd(as administrator)

        open jenkins path in cmd(C:\Windows>C:\jenkins)
        run with commond(java -jar jenkins.war)
        by default it will up and run in http://localhost:8080

step 3) keep all run commands in pakage.json file-->within script

         "test": "npx cypress run --config pageLoadTimeout=100000pw",
         "runtests": "npm run test --"

step 4)jenkins set up

        * new item -> cypressLocal->select freestyle project-->ok
        * advance_> use custom workspace->dictionary(keep project path)(D:\MY LEARNING\Testing\cypessAutomation)
        * build set up->add build setup->execute windows batch commands-> put run command ie runtests": "npm run test --
        * apply-> save
        
# jenkins setup for git
# HTML report
step 1) install cypress-mochawesome-reporter using below command

        "npm i --save-dev cypress-mochawesome-reporter"

step 2) Change cypress reporter & setup hooks    
        Edit config file (cypress.config.js by default)

        const { defineConfig } = require('cypress');

        module.exports = defineConfig({
        reporter: 'cypress-mochawesome-reporter',                    //for reports
        e2e: {
            setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);      // for reports 
            },
        },
        });

step 3) Add to cypress/support/e2e.js

        import 'cypress-mochawesome-reporter/register';

step 4) run all spec or any one spec in terminal using below command

        "npx cypress run"

step 5) to access report

        go to reports folder--> index.html copy its path(not relative path)--> serach in browser
# allure report
Step 1: Install Allure Dependencies

        npm install --save-dev @shelex/cypress-allure-plugin

Step 2: Update cypress.config.js

const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for reports

  e2e: {
    setupNodeEvents(on, config) {
      // Mochawesome reporter setup
      require('cypress-mochawesome-reporter/plugin')(on);

      // Allure plugin setup
      allureWriter(on, config);

      return config;
    },
    env: {
      allure: true,
      allureResultsPath: 'allure-results'
    },
  },
});

Step 3: Update Support File

import '@shelex/cypress-allure-plugin';

Step 4: Run Tests and Generate Report

        *Run Cypress Tests: Run your Cypress tests as usual. The test results will be saved in the allure-results directory.

        npx cypress run

        *Generate Allure Report: After running the tests, generate the Allure report using the Allure Commandline tool.

        allure generate allure-results --clean

        *Serve Allure Report: Serve the Allure report locally to view it in your browser.

        allure open




