/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    adgrpurl_01:   ("/api/v1/groups/add-group"),
    
};
 
   //CREATE GROUP: create a group with Valid Credentails
describe('create a group: with Valid Credentails (POST)', () => {

    it('Create a group using valid credentails', () => {
      
        cy.request({
            method: 'POST',
          url: user.adgrpurl_01,
          headers: {
            "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1Mjk5ODU4MCwiZXhwIjoxNjUzMDg0OTgwfQ.xoLVTa926FNSzC69H3AOmhTfY3NRwlLuyx0QfttUOS8",
            "content-type": "application/json"
      },


      body: 

      {
          "eventId":  "62827f62c88b53003f0c44c3",
          "gender": "male",
          "name": varText.test
        }
  
          
        
      }).then((res)=>{
            ////const userId = res.body.addgroup.id
                //cy.wrap(userId).as('id')
                expect(res.status).to.eq(201)
          })
  });

  it('Create a group  using invalid credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.adgrpurl_01,
                    headers: {
                        "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk" + "EDAF",
                        "content-type": "application/json"
                  },
        
        

         body: 

            {
                "eventId": "62827f62c88b53003f0c44c3",
                "gender": "male",
                "name": varText.test
              }
        

        }).then((res)=>{
              expect(res.status).to.eq(401)
              expect(res.body.message).to.eq("Unauthorized")
              
        })
  })

})
