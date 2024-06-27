
describe('HandlingAlert',()=>{


// 1)javascript simple alert=it will have some text and an 'ok' button.
    it('simple windeow:alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // it is just click for 'js alert' 
        cy.xpath('//button[@onclick="jsAlert()"]').click()

        // if we want do some validation on that pop up then need write event
        cy.on('window:alert',(x)=>{//window:alert function will return something and we storing it through 'x'
            expect(x).to.contains('I am a JS Alert')
        })

        // here one step: cypress autometically handles the alert by 'ok'

        cy.xpath('//p[@id="result"]').should('have.text','You successfully clicked an alert')

    })




// 2)javascript confirm alert= it will have some text with 'ok' and 'cancel' button.
    it('js window:confirm -ok', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[@onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(x)=>{
            expect(x).to.contains('I am a JS Confirm')
        })

        //here one step: cypress autometically clicks 'ok'

        cy.xpath('//p[@id="result"]').should('have.text','You clicked: Ok')
    })

    it('js window:confirm -cancel', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[@onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(x)=>{
            expect(x).to.contains('I am a JS Confirm')
        })

        //now i controle by clicking 'cancel'
        cy.on('window:confirm',()=>false);

        cy.xpath('//p[@id="result"]').should('have.text','You clicked: Cancel')
    })

// 3)javascript prompt(input) alert:it will have some text with text box for user input along with 'ok' and 'cancel' button
    it('js prompt alert-ok', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //giving user input should perform before that alert window opens, so even is like below
        cy.window().then((win)=>{//we use 'window()' method to capture that window and save it in 'win' variable
            cy.stub(win,'prompt').returns('welcome')//we use 'stub()' method and pass 'win' variable and its type 'prompt' to it and we also give user input to returns method
        })

        cy.xpath('//button[@onclick="jsPrompt()"]').click()

        //now it it autometically handle with ok button


        /* for cancel we need to handle event with folse like below
        cy.on('window:prompt',()=> false);
        cy.xpath('//p[@id="result"]').should('have.text','You entered: null')
        */

        cy.xpath('//p[@id="result"]').should('have.text','You entered: welcome')

    })

// 4) authenticated alert
    it('aunthenticated alert', ()=>{

        //aproach1 : pass username and password along with URL
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{ username:"admin", password:"admin" } });

        cy.xpath('//p').should('have.contain','Congratulations!')
    })
        //approach2 :pass username and password within the URL
        it.only('authenticated alert',()=>{
            cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
            cy.xpath('//p').should('have.contain','Congratulations!')
        })


})