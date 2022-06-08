/// <reference types="Cypress" />
import RandText from '../POM/RandText';
const varText = new RandText();
const user = { 
   
    upmanurl_01:   ("/api/v1/measurements/update-measurement")
     
   };
   // update manual measurement 
   describe('UPDATE MANUAL MEASUREMENT: update  (POST)', () => {
       it('Update manual measurementt', () => {
             cy.request({
                   method: 'POST',
                 url: user.upmanurl_01,
   
                 headers: {
                   "authorization": (Cypress.env('token')),
                   "content-type": "application/json"
             },
       
                 body: {
  "id": "c8c035ed6476f9b433b6ac84b61b18c150cd2d89",
  "name": varText.test
    }
                 

             }).then((res)=>{
                   // cy.log(res.body.token)
                   expect(res.status).to.eq(201)
                   
             })
            })
        })