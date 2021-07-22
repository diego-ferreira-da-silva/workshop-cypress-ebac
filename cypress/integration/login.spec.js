/// <reference types="cypress" />

import LoginPage from '../support/pageObjects/login'
import MinhaContaPage from '../support/pageObjects/minhaConta'

context('Login', () => {
    let data
    before(() => {
        cy.fixture('user').then(dadosUsuario => {
            data = dadosUsuario
        })
    });

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('com usuário cadastrado irá redirecionar para a página Minha Conta', () => {
        cy.get('.icon-user-unfollow').click()

        //Const/Fixture
        //cy.get('#username').type(data.usuario)
        //cy.get('#password').type(data.senha)

        //PageObjects
        LoginPage.login(data.usuario, data.senha)
        MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')
        
        //Comands, não consegui utilizar, infelizmente está dando conflito.

        //cy.get('.woocommerce-form > .button').click()
        //cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')
    });
});