import { BasePage } from "./base-page";

export class CheckoutPage extends BasePage {
  
    static fillMandatoryDetailsAndNavigateToPayment(userData: {[key: string]: string | string[]}): void {
     
      Object.keys(userData).forEach(key => {
        const value = userData[key];
        if (Array.isArray(value)) {
          value.forEach((streetValue, index) => {
            const streetSelector = `input[name="${key}[${index}]"]`;
            cy.get(streetSelector, { timeout: 10000 }).type(streetValue);
          });
        } else {
          const selector = `input[name="${key}"]`;
          cy.get(selector, { timeout: 10000 }).filter(':visible').type(value as string, { force: true });
        }
      });
  
      
      cy.get('.select').first().should('be.visible').and('be.enabled').select('Alabama');
      cy.get('.select').last().should('be.visible').and('be.enabled').select('Bolivia');
  
      cy.wait(2000);
      
      cy.get('.button.action.continue.primary', { timeout: 10000 }).click();
      
  
     
      cy.get('.billing-address-details', { timeout: 10000 }).should('be.visible');
  
    
      cy.get('#opc-sidebar', { timeout: 10000 }).should('be.visible');
    }

    static placeOrderAndVerifySuccess(): void {
        // Haz clic en el botón 'Realizar pedido'
        cy.get('.action.primary.checkout', { timeout: 10000 }).click();
           
        cy.get('.checkout-success', { timeout: 10000 }).should('be.visible');
    
        cy.get('.checkout-success p').invoke('text').then((text) => {
            const orderNumberMatch = text.match(/Your order # is: (\d+)/);
            if (orderNumberMatch && orderNumberMatch[1]) {
              const orderNumber: string = orderNumberMatch[1];
              expect(orderNumber).to.be.a('string').and.satisfy((num: string) => num.trim().length > 0);
            }
          });
    
        cy.get('.action.primary.continue', { timeout: 10000 }).should('be.visible');
      }
    }
  
  