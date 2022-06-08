/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
    statsurl_01:   ("/api/v1/tailor/tailor-stats"),
  
};
  
// Tailor dashboard stats: Get stats
describe('TAILOR DASHBOARD STATS: Get stats (GET)', () => {




    it('Get stats with valid credentials', () => {
        cy.request({
                method: 'GET',
                url: user.statsurl_01,
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
                url: user.statsurl_01,
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