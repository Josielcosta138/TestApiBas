
// <reference type="cypress" />

describe(' --> API USUARIOS. ', () => {
    context('Envio POST / usuários. ', () => {
        it('Criar novo Usuário.', () => {
            
            cy.request({
                method: 'POST',
                url: '/usuarios',
                    body: {
                    nome: "Dumb Joe",
                    email: "dumb.joe@qa.com.br",
                    password: "teste",
                    administrador: "true"
                    }
               })

               .then((response) => {
                expect(response.status).to.be.equal(201)
                expect(response.body.message).to.be.equal("Cadastro realizado com sucesso")
    
                
                
            });
          
         });
    });
});