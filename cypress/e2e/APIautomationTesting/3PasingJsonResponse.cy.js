describe('Parsing json response',()=>{
    it('parsing simple json response',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/'
        })
        .then((Response)=>{
            expect(Response.status).to.eq(200);
            expect(Response.body[0].id).to.eq(1)
            expect(Response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(Response.body[0].price).to.eq(109.95)
        })
    })

    it('parsing complex json response',()=>{
        let totalPrice=0;
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/',
            qs:{limit:5}
        })
        .then((Response)=>{
            expect(Response.status).to.eq(200);

            // finting total value of price in those json response of 5 data
           Response.body.forEach(element => {
            totalPrice=totalPrice+element.price;
           });
           expect(totalPrice).to.eq(899.23)
        })
    })
})