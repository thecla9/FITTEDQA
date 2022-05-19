/// <reference types="Cypress" />
import RandText from '../POM/RandText';


const varText = new RandText();
const user = { 
    sendinurl_01:   ("/api/v1/groups/send-batch-invites/:groupId?emails=ezenwathecla90@gmail.com, ezenwathecla90+56@gmail.com"),
    sendinurl_02:   ("/api/v1/groups/send-batch-invites/:groupId?emails=ezenwathecla90@gmail.com, ezenwathecla90+56@gmail.com"),
    sendinurl_03:   ("/api/v1/groups/send-batch-invites/:groupId?emails=ezenwathecla90@gmail.com, ezenwathecla90+56@gmail.com"),
    
};
 
// SEND BATCH INVITE: Send batch invite with Valid Credentails
describe('SEND BATCH INVITE: Group initiator send batch invite (POST)', () => {

    it('Group initiator send batch invite with Valid Credentails', () => {
      
        
        cy.request({
            method: 'POST',
          url: user.sendinurl_01,
          headers: {
            "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk",
            "content-type": "application/json"
      },
          
                
        }).then((res)=>{
              expect(res.status).to.eq(201)
        })
  });


//invite with invalid details
  it('Group initiator send batch invite with invalid Credentails', () => {
        cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: user.sendinurl_02,
                headers: {
                    headers: {
                        "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk" + "EDAF",
                        "content-type": "application/json"
                  },
                },
        }).then((res)=>{
              expect(res.status).to.eq(401)
              
        })
  })

})
// it('Group initiator send batch invite twice to user with Valid Credentails', () => {
      
        
//     cy.request({
//         method: 'POST',
//       url: user.sendinurl_03,
//       headers: {
//         "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV6ZW53YXRoZWNsYTkwKzhAZ21haWwuY29tIiwic3ViIjoiNjI3ZGI4MWJhY2U0Y2QwMDNmZjU0MDRmIiwicGhvbmVOdW1iZXIiOiIrMjM0NzAzNDU2MDc4NiIsImlhdCI6MTY1MjcwNzI2MiwiZXhwIjoxNjUyNzkzNjYyfQ.N1Yw7ZJ1wOIjmzHzVTT4dwwFlfNt9q_zNaZ88Q6LUmk",
//         "content-type": "application/json"
//   },
      
            
//     }).then((res)=>{
//           expect(res.status).to.eq(401)
   // })
//});
