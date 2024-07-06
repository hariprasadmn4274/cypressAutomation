describe('using deferent evironments url',()=>{

    it('prod and stage envi',()=>{
        cy.visit('')
        // cy.visit('/ap/signin/')

        cy.log('pring username is  '+ Cypress.env('username'))
        /* syntax for using env in config file
        --------------------------------------

        Cypress.env('{variable name}') */
    })
})