// <reference types="Cypress" />
////import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
  recmeaurl_01:   ("/api/v1/tailor/recent-measurement"),
  
};
  
// Recent measurements: Recend measurements
describe('RECENT MEASUREMENTS: Get Recent measurements (GET)', () => {




    it('Resent measurements with valid credentials', () => {
        cy.request({
                method: 'GET',
                url: user.recmeaurl_01,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
 
        }).then((res)=>{
              expect(res.status).to.eq(200)
    
              
        })
  })



    it('recent measurements with invalid credentials', () => {
        cy.request({
                method: 'GET',
                url: user.recmeaurl_01,
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