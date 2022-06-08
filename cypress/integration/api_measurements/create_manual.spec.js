""/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crtmanurl_01:   ("/api/v1/measurements/create-manual-measurement"),
    
};
 
// CREATE EVENT: Create Manual measurements with Valid Credentails
describe('CREATE MANUAL : manual measurement creation (POST)', () => {

    it('Create manual measurement with Valid Credentails', () => {
      
        
        cy.request({
            method: 'POST',
          url: user.crtmanurl_01,
          headers: {
            "authorization": (Cypress.env('token')),
            "content-type": "application/json"
      },
          
            body: {
                "gender": "male",
                "group": "",
                "portal": "tailor",
                "name": varText.test,
                "userEmail": "ezenwathecla90+9@gmail.com",
                "neck": "10",
                "wrist": "10",
                "sleeveLength":"10",
                "underArm": "10",
                "chest": "10",
                "shortSleeve": "10",
                "threeQuarterSleeve": "10",
                "shoulder": "10",
                "roundElbow": "10",
                "foreArm": "10",
                "tommyCircumferenceTop": "10",
                "ankle": "10",
                "thighs": "10",
                "crotchLength": "10",
                "roundKnee": "10",
                "trouserWaist": "10",
                "trouserInseam": "10",
                "trouserHip": "10",
                "trouserLength": "10",
                "shoeSize": "10",
                "calfCircumference": "10",
                "top": "10"
               
              }
                
        }).then((res)=>{
              expect(res.status).to.eq(201)
        })
  });


    it('Create manual measurement with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crtmanurl_01,
                headers: {
                  "authorization": (Cypress.env('token'))+ "QFGH",
                  "content-type": "application/json"
            },
                body:{
                    "gender": "male",
                    "group": "",
                    "portal": "outfitbuyer",
                    "name": varText.test,
                    "userEmail": varText.email,
                    "neck": "10",
                    "wrist": "10",
                    "sleeveLength":"10",
                    "underArm": "10",
                    "chest": "10",
                    "shortSleeve": "10",
                    "threeQuarterSleeve": "10",
                    "shoulder": "10",
                    "roundElbow": "10",
                    "foreArm": "10",
                    "tommyCircumferenceTop": "10",
                    "ankle": "10",
                    "thighs": "10",
                    "crotchLength": "10",
                    "roundKnee": "10",
                    "trouserWaist": "10",
                    "trouserInseam": "10",
                    "trouserHip": "10",
                    "trouserLength": "10",
                    "shoeSize": "10",
                    "calfCircumference": "10",
                    "top": "10"
                   
                  }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              
        })
  })


})