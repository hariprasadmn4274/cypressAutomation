import Login from "../PageObjects/LoginPageApproach2.js";// importing from login page from pageobject folde


describe('Login with Pom',()=>{

    it('General way of test',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text','Dashboard')
    })

    it('using page object model',()=>{
        /*
        how ?
        -----
        instead of repeating 'page elements' and 'actions' in every testcases ie in it blocks,
        write them in separate file and access it from there.

        steps:
        -------
        - create folder for 'PageObjects' under 'cypress'
        - create javaScript files for each scenario and write js class there
        - export from there
            syntac: export default {classname} 
        - import in test cases
            syntax: import {className} from "../{foldername}/{filename}";
            (../ in above syntax says current project)
        advantages?
        -----------
        1) it removes the duplication of writing page elents and actions for every testcase
        2) easy for updation: if in case change of url or page elements location
        */

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const ln=new Login();//create object of login 
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickLogin()
        ln.verifyLogin()

    })
    it.only('using POM  with fixture',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture("orangeHrm").then((data)=>{

            const ln=new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickLogin()
            ln.verifyLogin()
        })
    })
})