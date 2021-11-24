/// <reference types="cypress" />

describe('Login test', () => {
    it('Verify that an user could login to the site', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[class="title"]').invoke('text').should('equal', 'Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})