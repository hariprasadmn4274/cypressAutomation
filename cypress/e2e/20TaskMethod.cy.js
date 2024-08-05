// import { describe } from "mocha";

//2) way
// function simpleInterest(interest,priciple){
//             let si=(interest/100)*priciple
//             return si;
//         }


describe('interview quetions',()=>{
    it('simple interest',()=>{

        cy.visit('www.google.com/')

        // 1) way
        // function simpleInterest(interest,priciple){
        //     let si=(interest/100)*priciple
        //     return si;
        // }

        // let result=simpleInterest(7,1000)
        //     cy.get('#APjFqb').type(result)


        //3)way
        cy.task('simpleInterest', { interest: 7, principal: 1000 }).then((result) => {

            cy.get('#APjFqb').type(result)
        })


            //2)way
            // let result=simpleInterest(7,1000)
            // cy.get('#APjFqb').type(result)

       
    })
})