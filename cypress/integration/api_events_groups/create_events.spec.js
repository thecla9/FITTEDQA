/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    crtevenurl_01:   ("/api/v1/groups/create-event"),
    
};
 
// CREATE EVENT: Create event with Valid Credentails
describe('CREATE EVENT: Outfitbuyer Create Event (POST)', () => {

    it('Outfitbuyer create event with Valid Credentails', () => {
      
        
        cy.request({
            method: 'POST',
          url: user.crtevenurl_01,
          headers: {
            "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk" + "EDAF",
            "content-type": "application/json"
      },
          
            body: {
              "name": varText.test,
              "type": "wedding",
              "date": "2022-07-31T13:00:43.539Z",
              "role": "bride",
              "gender": "male",
              "groupName": varText.test
            }
                
        }).then((res)=>{
              expect(res.status).to.eq(201)
        })
  });


    it('Create event with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.crtevenurl_01,
                headers: {
                  headers: {
                    "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk" + "EDAF",
                    "content-type": "application/json"
                  },
            },
            body: {
              "name": "Thelma event",
              "type": "wedding",
              "date": "2022-07-31T13:00:43.539Z",
              "role": "bride",
              "gender": "male",
              "groupName": "Annual"
            }
        }).then((res)=>{
              expect(res.status).to.eq(401)
              
        })
  })

})

it('Create event with a date less then two weeks from today', () => {
  cy.request({
          method: 'POST',
          failOnStatusCode: false,
          url: user.crtevenurl_01,
          headers: {
            "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk" + "EDAF",
            "content-type": "application/json"
      },
      body: {
        "name": varText.test,
        "type": "wedding",
        "date": "2022-01-31T13:00:43.539Z",
        "role": "bride",
        "gender": "male",
        "groupName": varText.test
      }
  }).then((res)=>{
        expect(res.status).to.eq(400)
    
        
  })
})