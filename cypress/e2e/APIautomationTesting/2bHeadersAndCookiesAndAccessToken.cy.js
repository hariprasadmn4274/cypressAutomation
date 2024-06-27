describe('Headers and cookies and access token',()=>{

//before ypu get all the orders , first generate token and using it create order and then get that order
let authToken='null'
    before('generate access token',()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{//hreaders
                'Content-Type':'application/json'
            },
            body:{
                clientName:"ABC",
                clientEmail:Math.random().toString(5).substring(2)+"@gmail.com"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201);
            authToken=response.body.accessToken;
        })
    })
    before('create order using access token',()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authToken//access token sending for authorizatin
            },
            body:{
                "bookId":1,
                "customerName":"ABC"
            }
        }).then((Response)=>{
            expect(Response.status).to.eq(201)
        })
    })
    it('get all the order created using above access token',()=>{
        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+authToken,
            },
            cookies:'mycookies' // sending cookies , you can send anything

        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
        })
    })
    
})