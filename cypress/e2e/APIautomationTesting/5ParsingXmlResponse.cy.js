// step 1) install xml2js pugin which coverts from xml to json object
    //  npm install xml2js
// step 2) import and create object get parser from it

const xml2js=require('xml2js') //this line acts like importing it
const parser=new xml2js.Parser({explicitArray:false})//

describe('Parsing xml resonse into json and then validate',()=>{

    let petid=null;
    before('creating pet with xml body',()=>{

        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            headers:{
                'Content-Type':'application/xml',
                'accept':'application/xml'
            },
            // body if it is xml then always pass it in one line, us google converter to convert from mult line to one line("  ")
            body:"<Pet><id>0</id><Category><id>0</id><name>string</name></Category><name>doggie</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status></Pet> "
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            parser.parseString(response.body,(err,result)=>{
                petid=result.Pet.id;
            })
        })
    })

    it('getting pet with petid',()=>{

        cy.request({
            method:'GET',
            url:'https://petstore.swagger.io/v2/pet/'+petid,
            headers:{
                'accept':'application/xml'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            parser.parseString(response.body,(err,result)=>{
                expect(result.Pet.id).to.eq(petid)
            })
        })
    })
})