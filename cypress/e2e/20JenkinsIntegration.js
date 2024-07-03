/*
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

*/