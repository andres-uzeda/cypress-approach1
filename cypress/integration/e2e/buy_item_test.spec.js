/// <reference types="cypress" />

//#add-to-cart-sauce-labs-backpack
describe('Login test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#user-name').type(Cypress.env('userName'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#login-button').click()
    })

    it('Verify that an user could buy an item', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type(Cypress.env('firstName'))
        cy.get('#last-name').type(Cypress.env('lastName'))
        cy.get('#postal-code').type(Cypress.env('postalCode'))
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('.complete-header').invoke('text').should('equal', 'THANK YOU FOR YOUR ORDER')
    })

    it('Verify that price of a item does not change in a shipping', () => {
        const price = Cypress.env('sauceLabsBackpackPrice')
        cy.get('div .inventory_item_price').first().invoke('text').should('equal', price)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click()
        cy.get('div .inventory_item_price').invoke('text').should('equal', price)
        cy.get('#checkout').click()
        cy.get('#first-name').type(Cypress.env('firstName'))
        cy.get('#last-name').type(Cypress.env('lastName'))
        cy.get('#postal-code').type(Cypress.env('postalCode'))
        cy.get('#continue').click()
        cy.get('div .inventory_item_price').invoke('text').should('equal', price)
        cy.get('div .summary_subtotal_label').invoke('text').should('contains', price)
        cy.get('#finish').click()
        cy.get('.complete-header').invoke('text').should('equal', 'THANK YOU FOR YOUR ORDER')
        
    })

    afterEach(() => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})