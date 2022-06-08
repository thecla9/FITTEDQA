/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    addcusurl_01:   ("/api/v1/tailor/tailor-list"),
  
};
  
// Tailor Customer's List: Add a customer

describe('CUSTOMER LIST: Add a customer (POST)', () => {

    it('Add a customer with existing credentials', () => {
        cy.request({
                method: 'POST',
                url: user.addcusurl_01,
                failOnStatusCode: false,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
  body:{
  "firstname": "varText.test",
  "lastname": "varText.test",
  "email": varText.testEmail,
  "address": "Lagos Island ",
  "gender": "Male",
  "userId": "6273d1a688bfd3003fdd7afc"
}         
        }).then((res)=>{
              expect(res.status).to.eq(409)
          })
          })  
  

    it('Add a customer with invalid credentials', () => {
        cy.request({
                method: 'POST',
                url: user.addcusurl_01,
                failOnStatusCode: false,
                headers: {
                    "authorization": (Cypress.env('token')) + "OKFHJ",
                    "content-type": "application/json"
              },
  body:{
  "firstname": "varText.test",
  "lastname": "varText.test",
  "email": varText.testEmail,
  "address": "Lagos Island ",
  "gender": "Male",
  "userId": "6273d1a688bfd3003fdd7afc"
}         
        }).then((res)=>{
              expect(res.status).to.eq(401)
    
              
        })
    })
  
 it('Add a customer with email as empty field', () => {
        cy.request({
                method: 'POST',
                url: user.addcusurl_01,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
  body:{
  "firstname": "varText.test",
  "lastname": "varText.test",
  "email": "",
  "address": "Lagos Island ",
  "gender": "Male",
  "userId": "6273d1a688bfd3003fdd7afc"
}         
        }).then((res)=>{
              expect(res.status).to.eq(401)
    
              
        })
  })
it('Add a customer with gender as empty field', () => {
        cy.request({
                method: 'POST',
                url: user.addcusurl_01,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
  body:{
  "firstname": "varText.test",
  "lastname": "varText.test",
  "email":varText.testEmail,
  "address": "Lagos Island ",
  "gender": "",
  "userId": "6273d1a688bfd3003fdd7afc"
}         
        }).then((res)=>{
              expect(res.status).to.eq(400)
        })
    })
})

