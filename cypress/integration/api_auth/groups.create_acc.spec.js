/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crtouturl_01:   ("/api/v1/auth/outfit-buyer/signup"),
    
  
};
  
// AUTH: Create Account with Valid Credentails
describe('AUTH: Outfitbuyer Create Account (POST)', () => {

    it('Create Account with Valid Credentails', () => {
        cy.request({
              method: 'POST',
            url: user. crtouturl_01,
  
            body: {

                    "firstName": "TVnessa",
                    "lastName": "Promise",
                    "email": varText.testEmail,
                    "phoneNumber": varText.phoneNumb,
                    "password": "go@12345",
                    "confirmPassword": "go@12345",
                    "gender": "male",
                    "location": "Lagos"
                   
                  }
                
        }).then((res)=>{
            // cy.log(varText.testEmail)
              expect(res.status).to.eq(201)
        })
  });


    it('Outfitbuyer Create Account with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crtouturl_01,
  
            body: {

                "firstName": "Thelma",
                "lastName": "Promise",
                "email": "jane#gmail.com",
                "phoneNumber": varText.phoneNumb,
                "password": "go@12345",
                "confirmPassword": "go@12345",
                 "gender": "male",
                "location": "Lagos"
                
            }
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  })

})
it('Outfitbuyer Create Account with Empty email field', () => {
    cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: user.crtouturl_01,

        body:{
            "firstName": "Thecla",
            "lastName": "obi",
            "email": "",
            "phoneNumber":varText.phoNenumb,
            "password": "go@12345",
            "confirmPassword": "go@12345",
            "gender": "male",
            "location": "Lagos"
          }
    }).then((res)=>{
          expect(res.status).to.eq(400)
          expect(res.body.error).to.eq('Bad Request')
          
          
    })
})


it('Outfitbuyer Create Account with empty phone number field', () => {
    cy.request({
            method: 'POST',
            failOnStatusCode: false,
          url: user.crtouturl_01,

        body: {

            "firstName": "Thelma",
            "lastName": "Promise",
            "email": "jane#gmail.com",
            "phoneNumber": "",
            "password": "go@12345",
            "confirmPassword": "go@12345",
             "gender": "male",
            "location": "Lagos"
            
        }
    }).then((res)=>{
          expect(res.status).to.eq(400)
          expect(res.body.error).to.eq('Bad Request')
          
    })
})


it('Outfitbuyer Create Account with Empty firstname field', () => {
cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: user.crtouturl_01,

    body:{
        "firstName": "",
        "lastName": "obi",
        "email": "",
        "phoneNumber":varText.phoNenumb,
        "password": "go@12345",
        "confirmPassword": "go@12345",
        "gender": "male",
        "location": "Lagos"
      }
}).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq('Bad Request')
      
      
})
})   
it('Outfitbuyer Create Account with Empty last name field', () => {
cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: user.crtouturl_01,

    body:{
        "firstName": "Tee",
        "lastName": "",
        "email": "",
        "phoneNumber":varText.phoNenumb,
        "password": "go@12345",
        "confirmPassword": "go@12345",
        "gender": "male",
        "location": "Lagos"
      }
}).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq('Bad Request')
      
      
})
})   

it('Outfitbuyer Create Account with Empty location field', () => {
cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: user.crtouturl_01,

    body:{
        "firstName": "",
        "lastName": "obi",
        "email": "",
        "phoneNumber":varText.phoNenumb,
        "password": "go@12345",
        "confirmPassword": "go@12345",
        "gender": "male",
        "location": ""
      }
}).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq('Bad Request')
      
      
})
})   

it('Outfitbuyer Create Account with Empty gender field', () => {
cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: user.crtouturl_01,

    body:{
        "firstName": "",
        "lastName": "obi",
        "email": "",
        "phoneNumber":varText.phoNenumb,
        "password": "go@12345",
        "confirmPassword": "go@12345",
        "gender": "",
        "location": "Lagos"
      }
}).then((res)=>{
      expect(res.status).to.eq(400)
      expect(res.body.error).to.eq('Bad Request')
      
      
})
})   


