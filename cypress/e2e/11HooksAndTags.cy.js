//hooks
//-------
//before : execute only once before starting all 'it' blocks.(beforeAll)
//ofter  : execute only once ofter completion of all 'it' blocks.(ofterAll)
//beforeEach :executes multiple times that is before satarting every 'it' block.
//ofterEach  :executes multiple times that is ofter completion of every 'it' block.

//tags
//----
//it.only
//it.skip

describe('Hooks and tags',()=>{

    before(()=>{
        cy.log('********* launch application ********')
    })

    after(()=>{
        cy.log('********* close application ********')
    })

    beforeEach(()=>{
        cy.log('********* login application ********')

    })

    afterEach(()=>{
        cy.log('********* logout application ********')

    })
    it('searching',()=>{
        cy.log('********* searching ********')
    })

    it.skip('advance searching',()=>{
        cy.log('********* advance searching ********')

    })

    it.only('listing the products',()=>{
        cy.log('********* listing the products ********')

    })

})