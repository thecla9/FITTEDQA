/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    chanpurl_01:   ("/api/v1/users/change-password"),
  
};
  
// Change password: change password
describe('CHANGE PASSWORD: Change a password (POST)', () => {




    it('Change a password with valid credentials', () => {
        cy.request({
                method: 'POST',
                url: user.chanpurl_01,
                headers: {
                    "authorization": (Cypress.env('token')) + "ASFBFD",
                    "content-type": "application/json"
              },
  body:

{
  "password": "go@12345",
  "newPassword": "user@1234"
}
        }).then((res)=>{
              expect(res.status).to.eq(201)
    
              
        })
  })



    it('change a password with invalid credentials', () => {
        cy.request({
                method: 'POST',
                url: user.chanpurl_01,
                failOnStatusCode: false,

                headers: {
                    "authorization": (Cypress.env('token')) + "OKFHJ",
                    "content-type": "application/json"
              },
  body:
{
  "password": "go@12345",
  "newPassword":"user@1234"
}
        }).then((res)=>{
              expect(res.status).to.eq(401)
    
              
        })
  })
})