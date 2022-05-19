/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
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

"neck_circum_base": measureNumb,
"head": measureNumb,
"waist_circum_preferred": measureNumb,
"trouser_length_preferred": measureNumb,
"height": measureNumb,
"weight": measureNumb,
"age": measureNumb,
"fit_preference": "fitted",
"measurementUnit": "1",
"show_size_us": measureNumb,
"body_type": varText.test,
"wallet_type": "individual",
"name": varTest.test,
"terms": "true",
"canEdit": "true",
"gender": "Male",
"portal": "outfitbuyer",
"top": "20",
"userEmail": varText.testEmail,
"measurement_sent_id": "",
"group_d": ""
}
})
       })
         }).then((res)=>{
                   // cy.log(res.body.token)
                   expect(res.status).to.eq(409)
                   expect(res.body.error).to.eq('Conflict')
                   expect(res.body.error.message).to.eq('Insufficient Balance')
             })
       

    