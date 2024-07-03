// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import cypress = require("cypress");


//clickLink is the name we giving to the custom command and
//  we are passing some input called label(where we pass test field of the link)
// finally it takes all the link fron xpath and search for which link has that 'label' which is passed throuh parameter 
//then do click operation
Cypress.Commands.add('clickLink',(label)=>{
    cy.xpath('//a').contains(label).click();//contains() will be case senstive 
})

// //over write the contains() command as to ingnore case senstive
// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
//     // Handle the case where filter is not provided
//     if (typeof text === 'object') {
//         options = text;
//         text = filter;
//         filter = undefined;
//     }

//     // Ensure options is an object and set matchCase to false
//     options.matchCase = false;

//    // Call the original contains function with modified options
//    return originalFn(subject, filter, text, options);
// });

Cypress.Commands.add('loginApp',(email,password)=>{
    cy.xpath('//input[@id="Email"]').type('email')
    cy.xpath('//input[@id="Password"]').type('password')
    cy.get('form > .buttons > .button-1').click()
})


Cypress.Commands.add('getIframe',(iframeLocator)=>{
    return cy.xpath('//iframe[@id="mce_0_ifr"]')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
})

Cypress.Commands.add('customApiRequest', (url, method = 'GET', options = {}) => {
    return cy.request({
      url,
      method,
      failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
      ...options
    }).then((response) => {
      if (response.status === 200) {
        return response;
      } else {
        let errorMessage = `Unexpected status code: ${response.status}`;
        switch (response.status) {
          case 400:
            errorMessage = 'Bad Request';
            break;
          case 401:
            errorMessage = 'Unauthorized';
            break;
          case 500:
            errorMessage = 'Internal Server Error';
            break;
        }
        throw new Error(errorMessage);
      }
    });
  });