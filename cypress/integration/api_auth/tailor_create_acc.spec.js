/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crturl_01:   ("/api/v1/auth/tailor/signup-password"),
    
  
};
  
// AUTH: Create Account with Valid Credentails
describe('AUTH: Tailor Create Account (POST)', () => {

    it('Create Account with Valid Credentails', () => {
        cy.request({
              method: 'POST',
            url: user.crturl_01,
  
            body: {

                    "firstName": "Thelma",
                    "lastName": "Promise",
                    "email": varText.testEmail,
                    "phoneNumber": varText.phoneNumb,
                    "password": "go@12345",
                    "location": "Lagos",
                    "storeName": varText.test,
                    "referalCode": ""
                  }
                
        }).then((res)=>{
            // cy.log(varText.testEmail)
              expect(res.status).to.eq(201)
        })
  });


    it('Tailor Create Account with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crturl_01,
  
            body: {

                "firstName": "Thelma",
                "lastName": "Promise",
                "email": "jane#gmail.com",
                "phoneNumber": varText.phoneNumb,
                "password": "go@12345",
                "location": "Lagos",
                "storeName": varText.RandText,
                "referalCode": ""
        
            }
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  })

})

