/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
   
      lgurl_01:   ("/api/v1/auth/login-email")
       
     };
     // Login with email
     describe('ACCOUNT: login with a valid email (POST)', () => {
         it('Login', () => {
               cy.request({
                     method: 'POST',
                   url: user.lgurl_01,
     
                   headers: {
                     "authorization": (Cypress.env('token')),
                     "content-type": "application/json"
               },
         
                   body: {
                     "email": "ezenwathecla90+9@gmail.com",
                     "password": "go@12345"
                   }
               }).then((res)=>{
                     cy.log(res.body.token)
                     expect(res.status).to.eq(201)
               })
         })
         });
         
         it('Login with with invalid Credentails', () => {
           cy.request({
                   method: 'POST',
                   failOnStatusCode: false,
                   url: user.lgurl_01,
                   body: {
                       "email": "ezenwathecla90+9#gmail.com",
                       "password": "go@12345"
                     }
           }).then((res)=>{
                 expect(res.status).to.eq(400)
                 expect(res.body.error).to.eq('Bad Request')
                
           })
     })
     it('Login with incorrect password', () => {
      cy.request({
              method: 'POST',
              failOnStatusCode: false,
              url: user.lgurl_01,
              body: {
                  "email": "ezenwathecla90+9#gmail.com",
                  "password": "go@977"
                }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
           })
})

it('Login without password', () => {
      cy.request({
              method: 'POST',
              failOnStatusCode: false,
              url: user.lgurl_01,
              body: {
                  "email": "ezenwathecla90+9#gmail.com",
                  "password": ""
                }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
           
})
})

it('Login without email', () => {
      cy.request({
              method: 'POST',
              failOnStatusCode: false,
              url: user.lgurl_01,
              body: {
                  "email": "",
                  "password": "go@12345"
                }
      }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
           
})
})
     