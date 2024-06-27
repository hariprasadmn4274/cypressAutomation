describe('capturing screenshot and videos',()=>{

    it('intentionally and autometically',()=>{

        cy.visit('https://demo.opencart.com/',{delay:10000})

        //intentionally: using screenshot method and can give name inside method(intentionaly we can only capture screenshot but not videos)
        cy.screenshot('home page screenshot',{delay:5000});
        cy.wait(5000)
        cy.get('#logo > a > .img-fluid').screenshot('logo screenshot')


        //autometically: capture screenshot and video when testcase fails and when you run on terminal
        cy.xpath('//a[.="Cameras"]',{delay:10000}).click();// camera page
        cy.wait(50000)
        cy.xpath("//h2[normalize-space()='Cameras']").should('have.text',"Tablets")

        //video is not captureing ,so we need to enable it in config file itseems ask chethu or chatgpt
    })
})