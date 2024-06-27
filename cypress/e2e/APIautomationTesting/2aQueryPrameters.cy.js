describe("QUERY parameter",()=>{
    it('use directly in url',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then((Response)=>{
            expect(Response.status).to.eq(200);// you can use both 'eq' or equal
            expect(Response.status).to.eql(200);
            expect(Response.status).to.eqls(200);
            expect(Response.status).to.equal(200);
            expect(Response.status).to.equals(200);
            expect(Response.status).eq(200);
            expect(Response.status).eql(200);
            expect(Response.status).eqls(200);
            expect(Response.status).equal(200);
            expect(Response.status).equals(200);

            expect(Response.body.page).to.eq(2)
            //checking length of the data
            expect(Response.body.data).has.length(6)//length bcs data property is an array of information 
            expect(Response.body.data[0]).have.property('id',7)//can use both 'has' or 'have'
            expect(Response.body.data[1]).have.property('email','lindsay.ferguson@reqres.in')
        })
    })
        it.only('use in variable',()=>{
                const queryParameter={page:2}
            cy.request({
                method:'GET',
                url:'https://reqres.in/api/users?page=2',
                ps:queryParameter   
                    })
            .then((Response)=>{

                expect(Response.status).to.eq(200);// you can use both 'eq' or equal
                expect(Response.status).to.eql(200);

                //checking length of the data
                expect(Response.body.data).has.length(6)//length bcs data property is an array of information 
                expect(Response.body.data[0]).have.property('id',7)//can use both 'has' or 'have'
                expect(Response.body.data[1]).have.property('email','lindsay.ferguson@reqres.in')
            })
    })
})