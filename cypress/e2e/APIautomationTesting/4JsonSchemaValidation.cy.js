//step 1) install ajv plugin
            // npm install ajv
//step 2) import and create object of it then use 
 const AJV=require('ajv')
 const ajv=new AJV;

 describe('Json schema validation',()=>{
    it('schema validation',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/'
        })
        .then((response)=>{

            //use json to schema converter in google to get this schema
            const schema={
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
            }

            const validation=ajv.compile(schema)//use compile() and schema into it process validation then pass ur reponse to check
            const isvalid=validation(response.body)
            expect(isvalid).to.eq(true)
        })
    })
 })