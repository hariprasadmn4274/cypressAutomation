describe('DorpDown', ()=>{
    // type 1
    it('Drop down with select tag in html code',()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.xpath('//select[@id="zcf_address_country"]').select('India').should('have.value','India')
    })

    //type 2
    it.only('Drop down without select tag in html code',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.xpath('//div[@class=" css-yk16xz-control"]').type('Uttar Pradesh').type('{enter}').should('contain','Uttar Pradesh')//for element validation use 'contain' or 'have.value'


    })

    //type 3
    it('Auto static suggest dropdown', ()=>{// those suggetions are static : means they wont change but in dynamic suggestion like google serach suggetions changes so they are dyamic

        cy.visit('https://www.wikipedia.org/')
        cy.xpath('//input[@name="search"]').type('delhi')
        cy.xpath('//h3[@class="suggestion-title"]').contains('Delhi').click()//this xpath gives suggestion which has delhi, we use contains method to check suggestion we want and click on it
    
    })

    //type 4
    it('Auto Dynamic suggest dropdown', ()=>{
        cy.visit('https://www.google.com/');

        // Select the search input box and type in it
        cy.xpath('//textarea[@id="APjFqb"]').type('cypress automation', { delay: 100 });

        // Wait for suggestions to appear
        cy.wait(3000);

        // Iterate through the suggestions and click the one matching the desired text
        cy.xpath('//ul[@role="listbox"]//li//span')//xpath gives all the suggestions list
            .should('be.visible') // Ensure suggestions are visible
            .each(($el, index, $list) => {
                if ($el.text() === 'cypress automation tutorial') {
                    cy.wrap($el).click();
                }
            });

        // Wait for the input value to update and verify it
        cy.xpath('//input[@name="q"]').should('have.value', 'cypress automation tutorial');
    });
});