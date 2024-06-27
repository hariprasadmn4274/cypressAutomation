require('cypress-xpath')
// import 'cypress-iframe'  
describe('Mouse operations',()=>{

    it.only('mouse over operation',()=>{
        cy.visit('https://demo.opencart.com/')

        cy.xpath('//a[normalize-space()="Windows (0)"]').should("not.be.visible")

        cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover').click()

        cy.xpath('//a[normalize-space()="Windows (0)"]').should("be.visible")
    })

    it('right click ',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');


        //approach1
        // cy.xpath('//span[.="right click me"]').trigger('contextmenu')
        // cy.xpath('//span[.="Copy"]').should('be.visible')

        //approach2
        cy.xpath('//span[.="right click me"]').rightclick()
        cy.xpath('//span[.="Copy"]').should('be.visible')
    })

    it('double click',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        /* learn iframe video
        // load the frame :   means go to that seperate frame , for the we need to install plugin and above import statement
        cy.frameloaded('//div[@id="iframe"]')

        //approch1
        cy.iframe('//div[@id="iframe"]').find('//button[@ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe('//div[@id="iframe"]').find('//input[@id="field2"]').should('have.value','Hello World!')
        //approch2
        cy.iframe('//div[@id="iframe"]').find('//button[@ondblclick="myFunction()"]').dblclick()
        cy.iframe('//div[@id="iframe"]').find('//input[@id="field2"]').should('have.value','Hello World!')
        */

    })
})