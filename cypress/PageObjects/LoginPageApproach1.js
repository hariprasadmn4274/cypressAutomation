class Login{

    setUserName(username){
        cy.xpath('//input[@name="username"]').type(username)
    }
    setPassword(password){
        cy.xpath('//input[@name="password"]').type(password)
    }
    clickLogin(){
        cy.xpath('//button[@type="submit"]').click()
    }
    verifyLogin(){
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text','Dashboard')
    }
}

export default Login; //this is syntax at the end use class name