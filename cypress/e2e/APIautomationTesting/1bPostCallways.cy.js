describe('post call ways',()=>{
    it('approach 1: hard code json data',()=>{
        const requestBody={
            userId: 1,
            title: "sunt aut facere repellat",
            body: "quia et suscipit"
        }
        cy.request({method:'POST',
                    url:'https://jsonplaceholder.typicode.com/posts',
                    body:requestBody
                    })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.userId).to.eq(1)
            expect(response.body.title).to.eq("sunt aut facere repellat")
            expect(response.body.body).to.eq("quia et suscipit")
        })
               
    })
    it('approach 2: dynamically generate json data',()=>{
        const requestBody={
            userId: Math.random(1),
            title: Math.random().toString(5).substring(2),
            body: Math.random().toString(5).substring(2)+"@gmail.com"
        }
        cy.request({method:'POST',
                    url:'https://jsonplaceholder.typicode.com/posts',
                    body:requestBody
                    })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.userId).to.eq(requestBody.userId)
            expect(response.body.title).to.eq(requestBody.title)
            expect(response.body.body).to.eq(requestBody.body)
        })
               
    })
    it('approach 3: through fixtures use json data',()=>{

        cy.fixture("requestBodyForPostCall").then((data)=>{
            const requestBody=data;

            cy.request({method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                body:requestBody
                })
                .then((response)=>{
                    expect(response.status).to.eq(201)

                    //assertions for values in the json body
                    expect(response.body.userId).to.eq(requestBody.userId)
                    expect(response.body.title).to.eq(requestBody.title)
                    expect(response.body.body).to.eq(requestBody.body)

                    //assertions for properties(keys) in json body
                    expect(response.body).has.property('userId',requestBody.userId)
                    expect(response.body).has.property('title',requestBody.title)
                    expect(response.body).has.property('body',requestBody.body)

                })
        })
               
    })
})