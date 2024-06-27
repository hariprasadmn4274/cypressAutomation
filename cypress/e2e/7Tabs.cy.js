
describe('HandlingTabs',()=>{

    it('approch1 is removing target bank',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.xpath('//a[@href="/windows/new"]').invoke('removeAttr','target').click();// removing that target atrribute so that it will open in same tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.go('back')//goin back to parent tab
    })

    it.only('approch2 is visit that link ',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')


        cy.xpath('//a[@href="/windows/new"]').then((e)=>{//just capture whole line of that path into variable e

            const url=e.prop('href');// get that perticular href attribute from variable e and save it in variable url
           
            cy.visit(url)// visit that url so it will open in th same page 
        })


        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.go('back')//goin back to parent tab
    })
})