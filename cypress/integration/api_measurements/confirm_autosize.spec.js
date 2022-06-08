/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
   
    confautourl_01:   ("/api/v1/measurements/confirm-auto-measurement")
     
   };
   // Confirm autosize measurement when measurement name already exist
   describe('AUTOSIZE MEASUREMENT: Confirm autosize  when measurement name already exist (POST)', () => {
       it('Confirm autosize when measurement name exist', () => {
             cy.request({
                   method: 'POST',
                 url: user.confautourl_01,
               failsOnStatusCode:false,
                 headers: {
                   "authorization": (Cypress.env('token')),
                   "content-type": "application/json"
             },
       
                 body: {

"group": "efnjenfo4t6y575y4",
"name": "Thecla's Agabada",
"neck": "10",
"wrist": "10",
"sleeveLength": "10",
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
"shoeSize":"10",
"userEmail": "ezenwathecla90+9@gmail.com",
"portal": "tailor"
}

             }).then((res)=>{
                   // cy.log(res.body.token)
                   expect(res.status).to.eq(400)
                  
             })
       })
    })
    

