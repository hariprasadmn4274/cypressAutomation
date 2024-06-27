/*
step 1) get client_id and client_secret from client application(here my github created as client application)
        clientid Ov23lig0acwBcas0yFce
        client secrete 97a8b4e2148bab37f54aac23810e770f14b7c8db

step 2) get auth code , use below git hub url to get auth code in browser:
        https://github.com/login/oauth/authorize?client_id=Ov23lig0acwBcas0yFce

        ex:we get code like below(copied from browser url)
        https://www.google.com/?code=10b94d119658c7d56edc(google.com bcs I gave it in client application for 'redirect url' )

step 3) get access token 
        https://github.com/login/oauth/access_token

        params:
        -------
                client_id
                client_secret
                code
        (code will expire so you have to generate regularly and manually)

step 4) using access token as Bearer token get resources from resourse server here it is github only
        https://api.github.com/user/repos
        auth:
        ----
            access token
*/
describe('Oauth 2.0',()=>{
    let access_token=''
   

    it('generate Oauth2 access token ',()=>{
        cy.request({
            method:'GET',
            url:'https://github.com/login/oauth/access_token',
            qs:{
                client_id:'Ov23lig0acwBcas0yFce',
                client_secret:'97a8b4e2148bab37f54aac23810e770f14b7c8db',
                code:'83fee95c0920dbf3cf55'
            }
        })
        .then((response)=>{// here response we are getting in text formate not json format
            expect(response.status).to.eq(200)
                // const params=response.body.split('&')
                // access_token=params[0].split('=')[1]
                access_token=response.body.split('&')[0].split('=')[1]
        })
    })
    it('get resources using Oath2 acesstoken',()=>{
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+access_token
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(820783489)
        })
    })
})