describe('Assertions',()=>{
// implicit assertions

    it.only('Implicit assertions',()=>{
        /*
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.url().should('include','orangehrm')
         cy.url().should('contain','demo')
         cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         */
        
         /*
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.url().should('include','orangehrm')
         .should('contain','orange')
         .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         */
        
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.url().should('include','orangehrm')
         .and('contain','orange')
         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         .and('not.include','123')
         .and('not.contain','orange123')
         .and('not.eq','https://opensource-demo.orangehrmlive123.com/web/index.php/auth/login')
        
        cy.title().should('contain','Orange')

        cy.xpath('//img[@alt="company-branding"]').should('be.visible')//logo visible
        .and('exist')//logo exist

        cy.xpath('//a').should('have.length', 5)
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="username"]').should('have.value','Admin')
        
    })




    
// explicit assertions
    it.only('Explicit assertions', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()

        let expName='xyz'
        let realName='PP Amnuaydechkorn'
        cy.xpath('//p[@class="oxd-userdropdown-name"]').then((x)=>{
            let actName=x.text()

            //expect assertion
            expect(actName).not.equal(expName)
            expect(actName).equal(realName);

            //assert 
            assert.equal(actName,realName)
            assert.notEqual(actName,expName)
            

        })
    })

    
})