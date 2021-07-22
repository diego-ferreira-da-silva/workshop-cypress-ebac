/// <reference types="cypress" />

import dados from '../fixtures/dados.json'

context('Efetuar compra', () => {
    it('Entrar no site e efetuar uma compra até a página final de pagamento ', () => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3073 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.page-title').should('contain', 'Carrinho')
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type(dados.nome)
        cy.get('#billing_last_name').type(dados.sobrenome)
        cy.get('#billing_company').type(dados.empresa)
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Brasil{enter}')
        cy.get('#billing_address_1').type(dados.endereco.rua)
        cy.get('#billing_address_2').type(dados.endereco.complemento)
        cy.get('#billing_city').type(dados.endereco.cidade)
        cy.get('#select2-billing_state-container').type('São Paulo{enter}')
        cy.get('#billing_postcode').type(dados.endereco.cep)
        cy.get('#billing_phone').type(dados.telefone)
        cy.get('#billing_email').type(dados.email)
        cy.get('#order_comments').type(dados.adicional)
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'Pedido recebido')
    });
});