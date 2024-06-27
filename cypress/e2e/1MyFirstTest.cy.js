// we can write any number of "descrbes" in one cy.js file
// we can write any number of "it" blocks in one describe
// every it block is one "specs" means one "testcase" called specification
// below sytax formate from mocha frame work



// using arrow function
// describe('Suit name', () => 
// {
//     it('test1', () => 
//     {
//       expect(true).to.equal(true)
//     })
// })

// without using arrow function
//   describe('Suit name', function() 
//   {
//     it('test2', function(){
//       expect(true).to.equal(true)
//     })
//   })

describe('suit name', ()=>{
    it("verify title-positive", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq","OrangeHRM");
    })

    it("verify title-negative", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should("eq","OrangeHRM123");
      
    })

    
})