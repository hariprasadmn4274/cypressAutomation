// click on link using label
// over writing existing contains() command
// re-usable custom command


require('cypress-xpath')

describe('custtom commands',()=>{

    it('clicking on link using label',()=>{

        cy.visit('https://demo.nopcommerce.com/')

        //diect click using regualr way
        // cy.xpath('//a[.="Apple MacBook Pro 13-inch"]').click();

        //using custpm command 'clickLink' which is built in support folder and in commands file
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.xpath('//h1[.="Apple MacBook Pro 13-inch"]').should('have.text','Apple MacBook Pro 13-inch')
    })

    it(' over writing existing contains() command',()=>{
        cy.visit('https://demo.nopcommerce.com/')

        // cy.clickLink('APPLE MACBOOK PRO 13-inch')
        // cy.xpath('//h1[.="Apple MacBook Pro 13-inch"]').should('have.text','Apple MacBook Pro 13-inch')
  
    })

    it.only('login custom command',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in')
        cy.loginApp('testing@gmail.com','test123')
        cy.xpath('//a[.="My account"]').should('have.text','My account')

    })
})