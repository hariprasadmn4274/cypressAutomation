describe('Xpathlocator',() =>{

    it('count images', ()=> {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@class="_3sdu8W emupdz"]/a').should('have.length',10)
    })

     it.only('chained xpath', ()=> {
        cy.visit('https://www.flipkart.com/')
         cy.xpath('//div[@class="_3116_u"]').xpath('./div').should('have.length',8)
    })
})