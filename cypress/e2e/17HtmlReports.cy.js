/*
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
*/