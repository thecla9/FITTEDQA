


/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    shipurl_01:   ("/api/v1/users/create-shipping-address"),
  
};
  
// PROFILE:Create Shipping address for OUTFITBUYER
describe('PROFILE: Create shipping address (POST)', () => {



    it('Create shipping address with valid user id', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.shipurl_01,

                headers: {
                    "authorization": (Cypress.env('token')),
                    "content-type": "application/json"
              },
  body: {


  "name": "rose",
  "address": "Abia",
  "zipCode": "090",
  "country": "GHANA",
  "userId": "6273d1a688bfd3003fdd7afc"
}
       
           
        }).then((res)=>{
              expect(res.status).to.eq(200)
    
              
        })
  })


it('Create shipping address with invalid user id', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.shipurl_01,

    headers: {
                     "authorization": (Cypress.env('token')),
                     "content-type": "application/json"
               },
          body: {
  "name": "rose",
  "address": "Imo",
  "zipCode": "090",
  "country": "GHANA",
  "userId": "6273d1a688bfd3003fdd1234"
}
        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.error).to.eq('undefined')
              
        })
  })
})

