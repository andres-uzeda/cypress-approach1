/// <reference types="cypress" />

//#add-to-cart-sauce-labs-backpack
describe('Login test', () => {
    it('Verify that an user could buy an item', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Bob')
        cy.get('#last-name').type('Marley')
        cy.get('#postal-code').type('0000')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('.complete-header').invoke('text').should('equal', 'THANK YOU FOR YOUR ORDER')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
    it('Verify that price of a item does not change in a shipping', () => {

    })
})