require('cypress-xpath');

import 'cypress-iframe'

describe('Handling iframes',()=>{
    it('approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        
        const iframe=cy.xpath('//iframe[@id="mce_0_ifr"]')// visit that complete ifram path

        .its('0.contentDocument.body')// use this static method to idicate this is document type

        .should('be.visible')
        
        .then(cy.wrap)// make that to type

        iframe.clear().type('Welcome')

        // it is not working bcs its web site is not working properly so
        

    })
    it('approch2: using custom command',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('//iframe[@id="mce_0_ifr"]').clear().type('welcome {ctrl+a}')
    })

    it('approch3: using cypress-iframe plugin',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/iframe')
        /*
        step 1) install cypress-iframe plugin
                 npm install -D cypress-iframe
        step 2) import cypress-iframe package
                    import 'cypress-iframe'
        step 3) use cy.frameLoaded('iframeLocator) and cy.iframe(iframeLocator) methods to handle it

        */
        // cy.frameLoaded('//iframe[@id="mce_0_ifr"]')//load the frame,,,, most importantly you have give css selector loactor only for these two, xpath does not work
        // cy.iframe('//iframe[@id="mce_0_ifr"]')//handle the frame
        //     .clear().type('welcome')
        cy.frameLoaded('#mce_0_ifr')//load the frame
        cy.iframe('#mce_0_ifr')//handle the frame
            .clear().type('welcome')
    })
})