
describe('data driven test',()=>{
    it('using multiple use details',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.fixture("orangeHrm2").then((data)=>{
            
            data.forEach((userData)=>{

            cy.xpath("//input[@placeholder='Username']").type(userData.username);
            cy.xpath('//input[@placeholder="Password"]').type(userData.password);

            cy.xpath("//button[normalize-space()='Login']").click();
            
            if(userData.username=="Admin"&&userData.password=='admin123'){
                cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text',userData.expected)
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click()//logout
                cy.xpath("//a[normalize-space()='Logout']").click()//logout 

            }else{
                cy.xpath('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]').should('contain',userData.expected)
            }
    
            })
        })
    })
})