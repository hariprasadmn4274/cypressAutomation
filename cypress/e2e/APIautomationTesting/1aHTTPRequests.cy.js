describe('HTTPRequests',()=>{
    it('GET call',()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200)
    })
    it('POST call',()=>{
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{ 
            userId: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur "
          })
        .its('status')
        .should('equal',201)
    })
    it('PUT call',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{ 
            userId: 1,
            title: "hari aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur "
          }})
        .its('status')
        .should('equal',200)
    })
    it('DELETE call',()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            })
        .its('status')
        .should('equal',200)
    })
})