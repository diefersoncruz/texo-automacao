import CommentsAPI from "../../support/api/commentsAPI"

const commentsAPI = new CommentsAPI;

describe('Given I access the EndPoint "/comments"', () => {
    context('When I to send GET method', ()=>{
        it('Then should to return statuscode 200', () => {
            commentsAPI.validateEmailInCommentByName('alias odio sit', 'Lew@alysha.tv');
          });
    });
});

describe('Given I access the EndPoint "/users"', () => {
    context('When I to send POST method And Users Data in Body request', ()=>{
        it('Then should to return statuscode 201', () => {
            let userData = {name: 'Jhon Teste', email: 'teste@teste.com'}
            commentsAPI.sendUserData(userData, 11);
          });
    });
});

describe('Given I access the EndPoint "/users"', () => {
    context('When I to send PUT method And Users Data in Body request', ()=>{
        it('Then should to return statuscode 200 And user data should was change', () => {
            let userDataToChange = {
                    name: 'Jhon Teste', 
                    email: 'teste@teste.com', 
                    address: {
                        geo: {
                            lat: "-11.1111",
                            lng: "22.2222"
                        }
                    },
            }
            commentsAPI.putUserDataById(5,userDataToChange);
          });
    });
})