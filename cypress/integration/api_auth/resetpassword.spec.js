

/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    reseturl_01:   ("/api/v1/auth/recover-password?email=ezenwathecla90@gmail.com"),
    reseturl_02:   ("/api/v1/auth/recover-password?email=ezenwathecla90+218@gmail.com"),
    reseturl_03:   ("/api/v1/auth/recover-password?email=Ezenwathecla90+218@gmail.com"),
   reseturl_04:   ("/api/v1/auth/recover-password?email=ezenwathecla90#gmail.com"),
    
  
};
  
// AUTH:Forgot password
describe('AUTH: FORGOT PASSWORD :Reset password (POST)', () => {




    it('Outfitbuyer reset password with an invalid email account', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_04,
  
           
            }).then((res)=>{
                expect(res.status).to.eq(400)
                expect(res.body.error).to.eq('Bad Request')
    
              
        })
  })


   it('Outfitbuyer reset password with an email first letter in uppercase', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_03,
  
           
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  })



    it('tailor reset password with an invalid email account', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_04,
  
           
        }).then((res)=>{
            expect(res.status).to.eq(400)
            expect(res.body.error).to.eq('Bad Request')
    
              
        })
  })


   it('tailor reset password with an email first letter in uppercase', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_03,
  
           
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  })

    it('Outfitbuyer reset password with an existing email account', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_01,
  
           
        }).then((res)=>{
              expect(res.status).to.eq(201)
    
              
        })
  })


   it('Outfitbuyer reset password with an non-existing email account', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_02,
  
           
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
  })

    it('tailor reset password with an existing email account', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_01,
  
           
        }).then((res)=>{
              expect(res.status).to.eq(201)
    
              
        })
  })


   it('tailor reset password with an non-existing email account', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.reseturl_02,
  
           
        }).then((res)=>{
              expect(res.status).to.eq(400)
              expect(res.body.error).to.eq('Bad Request')
              
        })
    })
})
