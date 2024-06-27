describe('Authentication',()=>{

//1)Bearer token  
    let authToken='null'
    before('generate Bearer token ie access token',()=>{
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
    before('create order using beraer token ie access token',()=>{
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
    it(' Type 1) Bearer token',()=>{
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

//2) Basic auth
    it('Type 2) Basic auth',()=>{
        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user:'postman',
                pass:'password'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })

//3) digest auth
    it('Type 3) digest auth',()=>{
        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth/',
            auth:{
                username:'postman',
                password:'password',
                method:"digest"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })
    
//3) API key auth
    it('Type 3) API key auth',()=>{
        cy.request({
            method:'GET',
            url:'https://api.openweathermap.org/data/2.5/forcast/daily?q=Delhi',
            //just lern how to give api key authentication
            ps:{// it is given in query type in cypress but in postman there is option of 'api key' in authentication tab only 
                appid:'2901a987459f15e526b627385be201e8'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(401)
        })
    })
})