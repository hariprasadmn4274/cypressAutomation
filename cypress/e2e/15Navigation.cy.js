// using go() and reload() methods

describe('navigation using commands',()=>{

    it('navigation from page to page',()=>{
        cy.visit('https://demo.opencart.com/')//home page
        cy.title().should('eq','Your Store')

        cy.xpath('//a[.="Cameras"]').click();// camera page
        cy.get('h2').should('have.text',"Cameras")

        cy.go('back')//home page
        cy.title().should('eq','Your Store')

        cy.go('forward')//camera page
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text',"Cameras")

        cy.go(-1)//home page
        cy.title().should('eq','Your Store')

        cy.go(1)// camera page
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text',"Cameras")

        cy.reload()
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text',"Cameras")


    })
})