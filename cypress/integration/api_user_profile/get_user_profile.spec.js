/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
   profurl_01:   ("/api/v1/tailor/profile"),
  
};
  
// Tailor Profile: Get user profile
describe('TAILOR PROFILE: Get user profile (GET)', () => {




    it('Get profile with valid credentials', () => {
        cy.request({
                method: 'GET',
                url: user.profurl_01,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
 
        }).then((res)=>{
              expect(res.status).to.eq(200)
    
              
        })
  })



    it('Get stats with invalid credentials', () => {
        cy.request({
                method: 'GET',
                url: user.profurl_01,
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