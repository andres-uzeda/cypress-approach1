/// <reference types="cypress" />

describe('Login test', () => {
    it('Verify that an user could login to the site', () => {
        cy.visit('/')
        cy.get('#user-name').type(Cypress.env('userName'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#login-button').click()
        cy.get('[class="title"]').invoke('text').should('equal', 'Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').should('be.visible');
        cy.get('#logout_sidebar_link').click()
    })
})