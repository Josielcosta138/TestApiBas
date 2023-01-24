
describe(' --> API USUARIO.', () => {
    context('GET /usuario', () => {
        it('Verificar usuario.', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios'
            })
                    .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.usuarios[0]).to.have.all.keys(
                        'nome','email','password','administrador','_id'
                    )
                    expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
                    expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
                    expect(response.body.usuarios[0].password).to.equal('teste')
                    expect(response.body.usuarios[0].administrador).to.equal('true')
                    expect(response.body.usuarios[0]._id).to.equal('0uxuPY0cbmQhpEz1')
                    
                    
                });
        });
    });
});




describe(' --> API PRODUTOS.', () => {
    context('GET /produtos', () => {
        it('Verifica o retorno da lista de protudos.', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
                    .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(5)
                    expect(response.body.produtos.length).to.eq(5)
                    expect(response.body.produtos[0]).to.have.all.keys(
                        'nome','preco','descricao','quantidade','_id'
                    )
                   //expect(response.body.produtos[0].nome).to.equal('Logitech MX Vertical')            
                });
        });
    });
});



describe('GET - Produtos', () =>{
        it('Busca de produto através da CONST.', () =>{
            const resultadoExperado = [
                {
                    "nome": "Logitech MX Vertical",
                    "preco": "470",
                    "descricao": "Mouse",
                    "quantidade": "382",
                    "_id": "BeeJh5lz3k6kSIzA"
                },
                {
                    "nome": "Incrível Aço Bacon",
                    "preco": "36",
                    "descricao": "inventore laudantium eos ea est et",
                    "quantidade": "999",
                    "_id": "HXeP1O9GbaoMCCbZ"
                },
                {
                    "nome": "Samsung 60 polegadas",
                    "preco": "5240",
                    "descricao": "TV",
                    "quantidade": "49977",
                    "_id": "K6leHdftCeOJj8BJ"
                },
                {
                    "nome": "Incrível Concreto Carro",
                    "preco": "766",
                    "descricao": "saepe dolorem veritatis dolores ducimus doloribus",
                    "quantidade": "999",
                    "_id": "n9JNbT0zePNu2oWp"
                },
                {
                    "nome": "Lindo Madeira Sabonete",
                    "preco": "765",
                    "descricao": "fugit culpa animi eius voluptates ut",
                    "quantidade": "999",
                    "_id": "rt7UqjDco61z5cm8"
                }


            ]      


            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/produtos'
              }).then((response) => {
                expect(response.status).to.equal(200);
                response.body.produtos.forEach((produto, indice) => {
                  expect(produto.nome).to.equal(expectedResult[indice].nome)
                  //expect(produto.descricao).to.equal(expectedResult[indice].descricao)
                  //expect(produto.preco).to.equal(expectedResult[indice].preco)
                  //expect(produto.quantidade).to.equal(expectedResult[indice].quantidade)
                })
              })
            


        });
});





describe(' --> API CARRINHOS.', () => {
    context('GET /carrinhos', () => {
        it('Verifica o retorno da lista de carrinhos.', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/carrinhos'
            })
                    .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(1)
                    expect(response.body.carrinhos.length).to.eq(1)
                    /*expect(response.body.carrinhos[0]).to.have.all.keys(
                        'nome','preco','descricao','quantidade','_id'
                    )*/
                    
                });
        });
    });
});

