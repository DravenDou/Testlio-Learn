import { BasePage } from "./base-page";
import { MAGENTO_PRODUCT_PAGE_LOCATORS } from "../../fixtures/locators/locators";

export class ProductPage extends BasePage { 
    
    static addRandomProductToCart(): void {
        cy.get(MAGENTO_PRODUCT_PAGE_LOCATORS.PRODUCT_ITEMS, { timeout: 10000 }).then(($products) => {
          const randomItem = this.selectRandomElement($products);
          const productHref = randomItem.find(MAGENTO_PRODUCT_PAGE_LOCATORS.PRODUCT_LINK).prop('href');
    
      
          cy.wrap(randomItem).find(MAGENTO_PRODUCT_PAGE_LOCATORS.PRODUCT_LINK).invoke('text').as('productName');
          cy.wrap(randomItem).find(MAGENTO_PRODUCT_PAGE_LOCATORS.PRODUCT_PRICE).invoke('text').as('productPrice');
    
       
          if (productHref.includes('sprite-yoga-companion-kit')) {
            cy.visit(productHref);
            cy.get('#bundle-slide', { timeout: 10000 }).click();
            cy.wait(2000)
            cy.get('#product-addtocart-button', { timeout: 10000 }).click();
          } else if (productHref.includes('set-of-sprite-yoga-straps')) {
            cy.visit(productHref);
            cy.get('.input-text.qty', { timeout: 10000 }).first().clear().type('1');
            cy.get('#product-addtocart-button', { timeout: 10000 }).click();
          } else {
            cy.wrap(randomItem).trigger('mouseover', {timeout: 10000});
            cy.wait(2000)
            cy.wrap(randomItem).find(MAGENTO_PRODUCT_PAGE_LOCATORS.ADD_TO_CART_BUTTON, { timeout: 10000 }).click({ force: true });
          }
    
          cy.get(MAGENTO_PRODUCT_PAGE_LOCATORS.CART_COUNTER, { timeout: 10000 }).should('contain', '1');
         
        });
      }
      static verifyCartContents(): void {
        
        cy.get('.action.showcart', { timeout: 10000 }).click();
    
     
        cy.get('@productName').then((productName) => {
          cy.get('#minicart-content-wrapper').should('be.visible');
          cy.get('.product-item-name').should('contain', productName);
        });
    
        cy.get('@productPrice').then((productPrice) => {
          cy.get('.price').should('contain', productPrice);
        });
    
     
        cy.get('.action.edit', { timeout: 10000 }).should('be.visible');
        cy.get('.action.delete', { timeout: 10000 }).should('be.visible');
    
      
        cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible');
      }

      static proceedToCheckoutAndVerify(): void {
        
        cy.get('#top-cart-btn-checkout', { timeout: 10000 }).click();
        cy.url({ timeout: 10000 }).should('include', '/checkout');
    
       
        cy.get('.checkout-index-index', { timeout: 10000 }).should('be.visible');
    
     
        cy.get('.opc-block-summary', { timeout: 10000 }).should('be.visible');
      
      }
    }
    
    




    
      



