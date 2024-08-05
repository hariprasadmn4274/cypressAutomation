describe('Handling web tables',()=>{

    beforeEach('login',()=>{

        cy.visit('https://demo.opencart.com/admin/index.php/')
        cy.xpath('//input[@id="input-username"]').clear().type('demo')
        cy.xpath('//input[@id="input-password"]').clear().type('demo')
        cy.xpath('//button[@type="submit"]').click()//login button
        cy.xpath('//li[@id="menu-customer"]').click()//cutomer main heading
        cy.wait(1000);
        cy.get('#collapse-5 > :nth-child(1) > a').should('be.visible').click()
        // cy.xpath('//li[@class="active"]/a[@href="https://demo.opencart.com/admin/index.php?route=customer/customer&user_token=19c63dd6c0ad4d2f6a8cbea887c87bbb"]')//customer sub heading
        // cy.url().should('eq','https://demo.opencart.com/admin/index.php?route=customer/customer&user_token=19c63dd6c0ad4d2f6a8cbea887c87bbb')
    })

    it('finding number of rows and columns',()=>{

        cy.xpath('//tbody//tr').should('have.length',10)
        cy.xpath('//thead/tr//td').should('have.length', 7)
    })

    it('checking perticular cell data',()=>{
        cy.get(':nth-child(5) > :nth-child(3)').should('be.visible').contains('11212122@qq.com')// use conatains method : to check what is there within an element.
        // cy.xpath('//td[normalize-space()="jub.lo@gmail.com"]').should('be.visible').should('have.value','jub.lo@gmail.com')// this is wrong ie should method.

    })
    it.only('read all the data from one complete page',()=>{
        cy.xpath('//tbody/tr').should('have.length',10)
            .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{

                cy.xpath('//thead/tr/td')
                    .each(($colm, index,$colms)=>{
                    cy.log($colm.text())
                })
            })
        })

    })
})