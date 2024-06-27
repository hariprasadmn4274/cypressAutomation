describe('API chaining',()=>{
    it('simple example for api chaining',()=>{
        cy.request({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/posts'
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            const postid=response.body[0].id;
            return postid;
        })
        .then((postid)=>{
            cy.request({
                method:'GET',
                url:`https://jsonplaceholder.typicode.com/comments?postId=${postid}`
                
            })
            .then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(5)
            })
        })
    })
    /*
    POST https://gorest.co.in/public/v2/users
      PUT https://gorest.co.in/public/v2/users/${userid}
       DELETE https://gorest.co.in/public/v2/users/${userid}
    */

    const accessToken='Bearer 7aa2845196f1823554bae58da008fabf84165761666a5d5541781c06e9e28ff1'
    it('complex api chaining example',()=>{
        cy.request({
            method:'POST',
            url:`https://gorest.co.in/public/v2/users`,
            body:{
                name:'hari',
                email:Math.random().toString(5).substring(2)+'@gmail.com',
                gender:'male',
                status:'active'
            },
            headers:{
                Authorization:accessToken
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            const userid=response.body.id
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userid}`,
                body:{
                    name:'chethu',
                    
                },
                headers:{
                    Authorization:accessToken
                }
            })
            .then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('chethu')
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v2/users/${userid}`,
                    body:{
                        name:'chethu',
                        
                    },
                    headers:{
                        Authorization:accessToken
                    }
                })
                .then((response)=>{
                    expect(response.status).to.eq(20)
                })
            })
            
        })

    })
})