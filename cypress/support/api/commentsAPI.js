class CommentsAPI {

    validateEmailInCommentByName(nameForSearch, emailToValidate){
        cy.request({
            method: 'GET',
            url: '/comments', 
            qs:{
                name: nameForSearch
            }
        }).then((response)=>{
            expect(response.status).to.eql(200);
            expect(response.body[0].email).to.eql(emailToValidate);
        })
    }

    sendUserData(userData, expectedId){
        cy.request({
            method: 'POST',
            url: '/users', 
            body:  JSON.stringify(userData)
        }).then((response)=>{
            expect(response.status).to.eql(201);
            expect(response.body.id).to.eql(expectedId);
        })

    }

    putUserDataById(idUser, userData){
        cy.request({
            method: 'PUT',
            url: `/users/${idUser}`, 
            body:  JSON.stringify(userData)
        }).then((response)=>{
            expect(response.status).to.eql(200);
        })

    }
}

export default CommentsAPI;