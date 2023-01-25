
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
        it('Verifica o retorno da lista de produtos.', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
                    .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(2)
                    expect(response.body.produtos.length).to.eq(2)
                    expect(response.body.produtos[0]).to.have.all.keys(
                        'nome','preco','descricao','quantidade','_id'
                    )
                    
                });
        });
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
                    expect(response.body.carrinhos[0].produtos[0]).to.have.all.keys(
                        'idProduto','quantidade','precoUnitario'
                    )
                    expect(response.body.carrinhos[0]).to.have.all.keys(
                        'produtos','precoTotal','quantidadeTotal','idUsuario','_id'
                    )
                   
                    
                });
        });
    });

});

