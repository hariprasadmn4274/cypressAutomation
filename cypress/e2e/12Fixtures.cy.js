describe('fixtures',()=>{
    /*
    //direct access from the fixtures folder
    it('fixtures data: direcy access',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangeHrm').then((data)=>{//here its not a compulsion to mention extension like orangeHrm.json

            cy.xpath('(//input[@placeholder="Username"])').type(data.username);
            cy.xpath('//input[@placeholder="Password"]').type(data.password);

            cy.xpath("//button[normalize-space()='Login']").click();
            
            cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text',data.expected)
        })
    })
    */
    
    let userData;
    before('using hook: access it for all it blocks',()=>{
        cy.fixture('orangeHrm').then((data)=>{
            userData=data;
        })
    })
    

    it('fixture data: though hook',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath("//input[@placeholder='Username']").type(userData.username);
        cy.xpath('//input[@placeholder="Password"]').type(userData.password);

        cy.xpath("//button[normalize-space()='Login']").click();
        
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text',userData.expected)
    })
})