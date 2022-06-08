/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
  restokurl_01:   ("/api/v1/tailor/resendTailorToken"),
  
};
  
// Resend Token: Resend verification token
describe('RESEND TAILOR TOKEN: Resend tailor token (POST)', () => {




    it('Resend verify token with valid credentials', () => {
        cy.request({
                method: 'POST',
                url: user.restokurl_01,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
 
        }).then((res)=>{
              expect(res.status).to.eq(201)
    
              
        })
  })



    it('resend token with invalid credentials', () => {
        cy.request({
                method: 'POST',
                url: user.restokurl_01,
                failOnStatusCode: false,
                headers: {
                    "authorization": (Cypress.env('token')) + "OKFHJ",
                    "content-type": "application/json"
              },

        }).then((res)=>{
              expect(res.status).to.eq(401)
    
              
        })

    })
})