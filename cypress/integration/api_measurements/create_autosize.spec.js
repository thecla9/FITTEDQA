/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
   
    crtautourl_01:   ("/api/v1/measurements/add-auto-measurement")
     
   };
   // Create autosize measurement
   describe('AUTOSIZE MEASUREMENT: Create autosize with insufficient balance (POST)', () => {
       it ('create autosize with insufficient balance', () => {
             cy.request({
                   method: 'POST',
                 url: user.crtautourl_01,
   
                 headers: {
                   "authorization": (Cypress.env('token')),
                   "content-type": "application/json"
             },
       
                 body: {

"neck_circum_base": varText.measureNumb,
"head": varText.measureNumb,
"waist_circum_preferred": varText.measureNumb,
"trouser_length_preferred":varText.measureNumb,
"height": varText.measureNumb,
"weight": varText.measureNumb,
"age": varText.measureNumb,
"fit_preference": "fitted",
"measurementUnit": "1",
"show_size_us": varText.measureNumb,
"body_type": varText.test,
"wallet_type": "individual",
"name": varText.test,
"terms": "true",
"canEdit": "true",
"gender": "Male",
"portal": "outfitbuyer",
"top": "20",
"userEmail": varText.testEmail,
"measurement_sent_id": "",
"group_id": ""
}

      
         }).then((res)=>{
                   // cy.log(res.body.token)
                   expect(res.status).to.eq(409)
                   expect(res.body.error).to.eq('Conflict')
                   expect(res.body.error.message).to.eq('Insufficient Balance')
             })
       })

   })