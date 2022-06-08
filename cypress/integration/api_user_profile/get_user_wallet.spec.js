

/// <reference types="Cypress" />
import RandText from '../POM/RandText';
const varText = new RandText();
const user = { 
   
    getwalurl_01:   ("/api/v1/users/userWallet/:i6273d1a688bfd3003fdd7afc"),
    getwalurl_02:   ("/api/v1/users/userWallet/:")
     
   };
   // Get user wallet
   describe('GET OUTFITBUYER USER WALLET: (GET)', () => {
       it('Get User Wallet', () => {
             cy.request({
                   method: 'GET',
                 url: user.getwalurl_01,
   
                 headers: {
                   "authorization": (Cypress.env('token')),
                   "content-type": "application/json"
             },
       

             }).then((res)=>{
          expect(res.status).to.eq(200)
                   
             })
       })
    })
    // Get user wallet with invaid user id
    it('Get user wallet with invalid user id', () => {
        cy.request({
              method: 'GET',
            url: user.getwalurl_02,
            failOnStatusCode: false,
            headers: {
              "authorization": (Cypress.env('token')) +"FGUH" ,
              "content-type": "application/json"
        },
  

        }).then((res)=>{
     expect(res.status).to.eq(401)
              
        })
  })

    

