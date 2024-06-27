//npm install --save-dev cypress-file-upload : first install file upload plugin using side commond and then import it 
import 'cypress-file-upload'

describe('file upload',()=>{

    it('single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.xpath('//input[@name="file"]').attachFile('test1.pdf')
        cy.xpath('//input[@class="button"]').click()
        cy.wait(2000)
        cy.xpath('//h3').should('contain','File Uploaded!')
    })
    it('file upload- Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.xpath('//input[@name="file"]').attachFile({filePath:'test1.pdf', fileName:'myFile1.pdf'})//always if you want give key and value inputs then it should be given in {}
        cy.xpath('//input[@class="button"]').click()
        cy.wait(2000)
        cy.xpath('//h3').should('contain','File Uploaded!')

    })
    it('multiple file uplaoad',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.xpath('//input[@id="filesToUpload"]').attachFile(["test1.pdf", "test2.pdf"])//if you want give two or more values ,should give in array.
        cy.wait(2000)
        cy.get('#fileList > :nth-child(1)').should('have.text','test1.pdf')
        cy.get('#fileList > :nth-child(2)').should('have.text','test2.pdf')

    })
    it('file upload - drag and drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.xpath('//div[@id="drag-drop-upload"]').attachFile('test1.pdf',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.pdf')

    })
    it.only('file upload shadow dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test1.pdf')
        //this smart-browse-input tyoe class found inside shadowdom
        cy.wait(2000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test1.pdf')

    })
})