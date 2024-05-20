

describe('assertions practoce', () => {

    it('all assertions', () => {

        cy.visit('https://demo.nopcommerce.com/');
        cy.get('#customerCurrency').should('exist');
        cy.get('.button-1.search-box-button').should('have.text','Search')
        cy.get('.button-1.search-box-button').should('contain.text', 'Search')
        

        
    });
    
});