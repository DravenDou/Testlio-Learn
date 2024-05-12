describe('using_get', () => {
    
    it('validating_google_button', () => {
        
        cy.visit('https://www.google.es/')
        cy.get('.gNO89b').should('be.enabled')
    });



});