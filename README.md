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
