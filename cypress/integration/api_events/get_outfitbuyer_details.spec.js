/// <reference types="Cypress" />
//import RandText from '../POM/RandText';


//const varText = new RandText();
const user = { 
    geoudeturl_01:   ("/api/v1/groups"),
    geoudeturl_02:   ("/api/v1/groups"),
    
};
 
// GET OUTFITBUYER DETAILS: Get outfitbuyer details with Valid Credentails
describe('GET OUTFITBUYER DETAILS: Get outfitbuyer details with Valid Credentails (GET)', () => {

    it('Get Outfitbuyer details using valid credentails', () => {
      
        cy.request({
            method: 'GET',
          url: user.geoudeturl_01,
          headers: {
            "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk",
            "content-type": "application/json"
      },
          
        
        }).then((res)=>{
              expect(res.status).to.eq(200)
        })
  });

  it('Get Outfitbuyer details using invalid credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.geoudeturl_02,
                headers: {
                    headers: {
                        "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk" + "EDAF",
                        "content-type": "application/json"
                  },
            },
         
        }).then((res)=>{
              expect(res.status).to.eq(404)
              
        })
  })

})
