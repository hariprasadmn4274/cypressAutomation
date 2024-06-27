class Login{
     
    userNameLctr='//input[@name="username"]';
    passwordLctr='//input[@name="password"]';
    loginButtonLctr='//button[@type="submit"]';
    vrifyLoginLctr="//h6[normalize-space()='Dashboard']";

    setUserName(username){
        cy.xpath(this.userNameLctr).type(username)
    }
    setPassword(password){
        cy.xpath(this.passwordLctr).type(password)
    }
    clickLogin(){
        cy.xpath(this.loginButtonLctr).click()
    }
    verifyLogin(){
        cy.xpath(this.vrifyLoginLctr).should('have.text','Dashboard')
    }
}

export default Login; //this is syntax at the end use class name