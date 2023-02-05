/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto na lista', () => {
        cy.get('[class="product-block grid"]')
            .eq(2)
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        let quantidade = 3


        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()

        cy.get('.input-text')
            .clear()
            .type(quantidade)

        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });

});