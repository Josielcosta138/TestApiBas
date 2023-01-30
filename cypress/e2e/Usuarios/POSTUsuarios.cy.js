
// <reference type="cypress" />

describe(' --> API USUARIOS. ', () => {
    context('Envio POST / usuários.', () => {
      it('Criar novo Usuário.', () => {
        cy.request({
          method: 'POST',
          url: '/usuarios',
          body: {
            nome: "Dumb Joe",
            email: "dumb.joe@qa.com.br",
            password: "test",
            administrador: "true"
          }
        })
          .should((response) => {
            expect(response.status).eq(201)
            expect(response.body.message).eq("Cadastro realizado com sucesso")
          });
      });
    });
  });








/*
let fakerUser;

describe(' --> API USUARIOS. ', () => {
        beforeEach(() => {
            cy.task("freshUser").then((user) => {
            fakerUser = user;
            cy.console.log(JSON.stringify(fakerUser));
        });
    });




context('Envio POST / usuários. ', () => {
        it('Criar novo Usuário.', () => {
            cy.request({
                method: 'POST',
                url: '/usuarios',
                body: fakerUser 
               }).should((response) => {
                expect(response.status).to.be.equal(201)
                expect(response.body.message).to.be.equal("Cadastro realizado com sucesso");

            });
          
         });
    });
});*/