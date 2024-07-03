describe('api interceptor',()=>{
    it('api  interceptor/ api spy',()=>{
    cy.visit('https://dummyapi.io/explorer')

    cy.intercept('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10').as('comments')
    // cy.intercept({
    //     path:'/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'// base url removed here
    //     }).as('comments')// we intercept this api in network window in inspect


    cy.get('.flex > :nth-child(5)').click()// and here we click according in normal way

    cy.wait('@comments').then(intercept =>{// here we do assertion using our intercepted data with data we got in normal way
        expect(intercept.response.body.limit).eql(10)
    })
    })
//mock and stub both are same creating our own response, stub is new name
    it('mock api/stub api response',()=>{
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit:20,name:'Testing Funda'})// iam creating dummy data {limit:20,name:'Testing Funda'}
        .as('comments')
        
        cy.get('.flex > :nth-child(5)').click()

        cy.wait('@comments').then(intercept=>{
            expect(intercept.response.body.limit).eq(10)// this should faile bcs actual limit is  10 but i created dummy limit to 20 , so it takes my data as real
        })

    })
    it('mock api response',()=>{
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{fixture:'intercept'})// iam creating dummy data {limit:20,name:'Testing Funda'}
        .as('comments')
        
        cy.get('.flex > :nth-child(5)').click()

        cy.wait('@comments').then(intercept=>{
            expect(intercept.response.body.username).eq('hari')// this should faile bcs actual limit is  10 but i created dummy limit to 20 , so it takes my data as real
        })

    })


})