describe('find method', function() {
    it('test case', function() {
      cy.clearAllCookies
    cy.visit("https://www.saucedemo.com");
  cy.get('.login_wrapper-inner').find('#user-name').should('exist')


  })
  })