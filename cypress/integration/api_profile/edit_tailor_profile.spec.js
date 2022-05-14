/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    edprourl_01:   ("/api/v1/users/edit-profile"),
  
};
  
// PROFILE:Edit tailor profile
describe('PROFILE: Edit tailor profile (POST)', () => {




    it('Edit tailor profile with valid credentials', () => {
        cy.request({
                method: 'POST',
                url: user.edprourl_01,
                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
  body: {
  "firstname": "Judith",
  "lastname": "Lolo",
  "location": "Lagos",
  "gender": "Male",
  "customerCategory": "outfitbuyer",
  "storeName": "Rosy store"
}
           
        }).then((res)=>{
              expect(res.status).to.eq(201)
    
              
        })
  })



    //Edit tailor profile with invalid details
    it('Edit tailor profile with invalid credentials', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.edprourl_01,

                headers: {
                    "authorization": (Cypress.env('token')) + "UGGT",
                    "content-type": "application/json"
              },
  body: {
  "firstname": "Judith",
  "lastname": "Lolo",
  "location": "Lagos",
  "gender": "Male",
  "customerCategory": "outfitbuyer",
  "storeName": "Rosystore"
}
           
             }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('Bad Request')
              
    
              
        })
    })
})
