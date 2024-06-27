require('cypress-xpath');

describe('UI Elements', () => {

//for radio button = use .click()
    it.only('Radio Buttons', () => {

        cy.visit('https://demoqa.com/');

        cy.xpath("//h5[.='Elements']").click();
        cy.url().should('contain', 'elements'); // Corrected 'be.contain' to 'contain'

        cy.xpath('//span[.="Radio Button"]').click();
        cy.url().should('contain', 'radio-button');

        // Click the "Yes" radio button and then check if it's selected
        cy.xpath('//input[@id="yesRadio" and @name="like"]').should('exist').click({force: true});
        cy.xpath('//input[@id="yesRadio"]').should('be.checked'); // Moved to separate line for clarity

        // Check that the "Impressive" radio button is not selected
        cy.xpath('//input[@id="impressiveRadio"]').should('not.be.checked');
    });

//for check box = use .check()
    it('check box', ()=>{
        cy.visit('https://demoqa.com/',{timeout: 60000});
        cy.xpath("//h5[.='Elements']").click();

        cy.xpath('//span[.="Check Box"]').click()
        cy.url().should('eq','https://demoqa.com/checkbox')
         // Click on the checkbox element and verify if it becomes checked
         cy.xpath('//span[@class="rct-checkbox"]').check().should('be.checked')
        
    })
});
