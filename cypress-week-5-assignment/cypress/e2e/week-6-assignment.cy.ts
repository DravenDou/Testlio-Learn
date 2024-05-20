import { should, use } from "chai";

describe('Magento Store - E2E Test Scenario', () => {
    it('testing', () => {
      // Step-1: Navigate to the URL and assert on the URL redirection
      cy.visit('https://magento.softwaretestingboard.com');
     cy.url().should('include', 'magento.softwaretestingboard.com');
 

  
    // Step-2: Validate the home page
     cy.get('.block-promo.home-main').should('be.visible');
     cy.get('.product-items.widget-product-grid').should('be.visible');
     cy.get('#search').should('be.visible');
     cy.get('.navigation').should('be.visible');
  
   // Step-3: Navigate to Gear and select Fitness Equipment on top navigation
    cy.wait(3000);
    cy.get('.navigation').contains('Gear').trigger('mouseover');
    cy.get('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all').contains('Fitness Equipment').click();
    cy.get('.column.main').should('be.visible');
    cy.get('.products.wrapper.grid.products-grid').should('be.visible');

  
   // Step-4: Select a random item and add to cart

        cy.get('.item.product.product-item').then(($products: JQuery<HTMLElement>) => {
          const itemCount = $products.length;
          const randomIndex = Math.floor(Math.random() * itemCount);
          const randomItem = $products.eq(randomIndex);
          const productHref = randomItem.find('.product-item-link').prop('href');
        
          cy.wrap(randomItem).find('.product-item-link').invoke('text').as('productName');
          cy.wrap(randomItem).find('.price').invoke('text').as('productPrice');
        
          
          if ( productHref.includes('sprite-yoga-companion-kit')) {
          
            cy.visit(productHref);
        
            cy.get('#bundle-slide').click();
            cy.wait(2000);
             cy.get('#product-addtocart-button').click();
            
          } else if (productHref.includes('set-of-sprite-yoga-straps')) {
              cy.visit(productHref);
              cy.wait(2000);
              cy.get('.input-text.qty').first().clear().type('1');
              cy.get('#product-addtocart-button').click();
          }
          else {
            cy.wrap(randomItem).trigger('mouseover');
            cy.wrap(randomItem).find('.action.tocart.primary').click({ force: true });
          }
         cy.wait(2000);
          cy.get('.counter-number').should('contain', '1');
          cy.get('.action.showcart').click();

         cy.get('@productName').then((productName) => {
         cy.get('#minicart-content-wrapper').should('be.visible');
         cy.get('.product-item-name').should('contain', productName);
});

         cy.get('@productPrice').then((productPrice) => {
         cy.get('.price').should('contain', productPrice);
         
});
         cy.get('.action.edit').should('be.visible');
         cy.get('.action.delete').should('be.visible');
         cy.get('#top-cart-btn-checkout').click();
         cy.url().should('include', '/checkout');
         cy.wait(5000)
         cy.get('.checkout-index-index').should('be.visible');
         cy.get('.opc-block-summary').should('be.visible');

cy.get('div.title').should('be.visible').click();
cy.wait(2000)
cy.get('.minicart-items-wrapper.overflowed').should('be.visible'); 

// Step-7: Fill in all the mandatory details and navigate to the payment page

type UserData = {
  [key: string]: string | string[];
};


const userData: UserData = {
  username: 'example@mail.com',
  firstname: 'Douglas',
  lastname: 'douglas',
  street: ['street0', 'street1', 'street2'],
  city: 'bolivia',
  postcode: '0000',
  telephone: '11111',
};


Object.keys(userData).forEach(key => {
  const value = userData[key];
  if (Array.isArray(value)) {
   
    value.forEach((streetValue, index) => {
      const streetSelector = `input[name="${key}[${index}]"]`;
      cy.get(streetSelector).type(streetValue);
    });
  } else {
    
    const selector = `input[name="${key}"]`;
    cy.get(selector).filter(':visible').type(value as string, { force: true });
  }
});


cy.get('.select').first().should('be.visible').and('be.enabled').select('Alabama');
cy.get('.select').last().should('be.visible').and('be.enabled').select('Bolivia');
cy.wait(3000);


cy.get('.button.action.continue.primary').click();

cy.get('.billing-address-details').should('be.visible');
cy.get('#opc-sidebar').should('be.visible');
cy.get('.action.primary.checkout').click();

cy.get('.checkout-success').should('be.visible');
cy.get('.action.primary.continue').should('be.visible');


        });
    })
   });
  
  