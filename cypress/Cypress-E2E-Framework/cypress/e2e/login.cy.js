describe('Login', () => {
    it('Login with credentials standart users', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.contains('div', 'Swag Labs').then(title => {
            cy.log(title.attr('class'))
        });
        cy.get('#user-name').as('username')
        cy.get('@username').type('standard_user');
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').should('exist')
    })
});