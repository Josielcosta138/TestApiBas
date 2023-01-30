

describe(' --> API USUARIOS. ', () => {
    context('Envio GET / usuários. ', () => {
      it('Retorna lista com todos usuários listados.', () => {
        
        cy.request({
            method: 'GET',
            url: '/usuarios'
        })
        .then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body.quantidade).to.eq(response.body.usuarios.length)

            Cypress._.each(response.body.usuarios, (usuarios) => {
                expect(usuarios.email).to.not.be.null  
                expect(usuarios).to.have.all.keys(
                    'nome', 'email', 'password', 'administrador', '_id'
                )
            })
        });
      });
    });
  
    
    context('GET /usuários passando id param de consulta', () => {
      it('Retorno de usuário filtrado pelo ID.', () => {
        cy.request({
            method: 'GET',
            url: '/usuarios/',
            qs: {
                _id: '0uxuPY0cbmQhpEz1'  //query string parameter
            }
        })

        .then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body.usuarios[0].nome).to.eq('Fulano da Silva')
            expect(response.body.usuarios[0].email).to.eq('fulano@qa.com')

        });

        
      });
    });
  });