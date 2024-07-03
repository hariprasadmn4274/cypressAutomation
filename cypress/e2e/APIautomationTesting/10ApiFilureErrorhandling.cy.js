describe('error handling for failure api', () => {

    // Approach 1: Error handling
    it('error handling', () => {
      cy.request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        // failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
      }).then((response) => {
        try {
          if (response.status === 200) {
            // Success case
            expect(response.body).to.have.length(100);
          } else {
            // Handle different status codes
            switch (response.status) {
              case 400:
                cy.log('Bad Request');
                break;
              case 401:
                cy.log('Unauthorized');
                break;
              case 500:
                cy.log('Internal Server Error');
                break;
              default:
                cy.log(`Unexpected status code: ${response.status}`);
            }
          }
        } catch (error) {
          cy.log('Error occurred:', error);
        }
      });
    });

// approach 2) using cutom cummonds


    it.only('handles API errors correctly', () => {
        cy.customApiRequest('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
                try{
                    // Success case
                expect(response.body).to.have.length(100);
                }
                catch(error){
                    // Handle the error case
                    cy.log('Request failed:', error.message);
                }
          })
         
      });
  
  });
