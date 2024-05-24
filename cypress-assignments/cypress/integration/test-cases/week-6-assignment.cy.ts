

describe('Magento Store - E2E Test Scenario', () => {
    it('testing', () => {
      // Step-1: Navigate to the Magento store URL and verify the URL is correct
      cy.visit('https://magento.softwaretestingboard.com');
      cy.url().should('include', 'magento.softwaretestingboard.com');
  
      // Step-2: Validate the visibility of various elements on the home page
      cy.get('.block-promo.home-main').should('be.visible'); // Check if the main promo banner is visible
      cy.get('.product-items.widget-product-grid').should('be.visible'); // Check if the product grid is visible
      cy.get('#search').should('be.visible'); // Ensure the search button is visible
      cy.get('.navigation').should('be.visible'); // Ensure the top navigation is visible
  
      // Step-3: Navigate to the 'Gear' section and select 'Fitness Equipment' from the top navigation
      cy.wait(3000); // Wait for 3 seconds to ensure the page has loaded
      cy.get('.navigation').contains('Gear').trigger('mouseover'); // Hover over the 'Gear' menu
      cy.get('.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all').contains('Fitness Equipment').click(); // Click on 'Fitness Equipment'
      cy.get('.column.main').should('be.visible'); // Check if the main column is visible
      cy.get('.products.wrapper.grid.products-grid').should('be.visible'); // Check if the product grid for 'Fitness Equipment' is visible
  
      // Step-4: Select a random item from the list and add it to the cart
      cy.get('.item.product.product-item').then(($products: JQuery<HTMLElement>) => {
        const itemCount = $products.length; // Get the total number of products
        const randomIndex = Math.floor(Math.random() * itemCount); // Generate a random index
        const randomItem = $products.eq(randomIndex); // Select a random product
        const productHref = randomItem.find('.product-item-link').prop('href'); // Get the href of the product link
      
        // Capture the product name and price
        cy.wrap(randomItem).find('.product-item-link').invoke('text').as('productName');
        cy.wrap(randomItem).find('.price').invoke('text').as('productPrice');
      
        // Add the selected item to the cart based on its href
        // Special cases for certain products that require different actions
        if (productHref.includes('sprite-yoga-companion-kit')) {
          cy.visit(productHref); // Visit the product page
          cy.get('#bundle-slide').click(); // Click on the bundle option
          cy.wait(2000); // Wait for 2 seconds
          cy.get('#product-addtocart-button').click(); // Click on 'Add to Cart' button
        } else if (productHref.includes('set-of-sprite-yoga-straps')) {
          cy.visit(productHref); // Visit the product page
          cy.wait(2000); // Wait for 2 seconds
          cy.get('.input-text.qty').first().clear().type('1'); // Set the quantity
          cy.get('#product-addtocart-button').click(); // Click on 'Add to Cart' button
        } else {
          cy.wrap(randomItem).trigger('mouseover'); // Hover over the random item
          cy.wrap(randomItem).find('.action.tocart.primary').click({ force: true }); // Force click on 'Add to Cart' button
        }
        cy.wait(2000); // Wait for 2 seconds
        cy.get('.counter-number').should('contain', '1'); // Verify the cart counter has increased by 1
        cy.get('.action.showcart').click(); // Click on the mini cart icon

        // Assert on the visibility of the product name and price in the mini cart
        cy.get('@productName').then((productName) => {
          cy.get('#minicart-content-wrapper').should('be.visible');
          cy.get('.product-item-name').should('contain', productName);
        });

        cy.get('@productPrice').then((productPrice) => {
          cy.get('.price').should('contain', productPrice);
        });

        // Assert on the visibility of edit and delete buttons in the mini cart
        cy.get('.action.edit').should('be.visible');
        cy.get('.action.delete').should('be.visible');
        cy.get('#top-cart-btn-checkout').click(); // Click on 'Proceed to checkout' button
        cy.url().should('include', '/checkout'); // Verify the URL includes '/checkout'
        cy.wait(5000); // Wait for 5 seconds
        cy.get('.checkout-index-index').should('be.visible'); // Verify the checkout page is visible
        cy.get('.opc-block-summary').should('be.visible'); // Verify the order summary is visible

        // Step-7: Fill in all the mandatory details and navigate to the payment page
        // Define user data for the checkout process
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

        // Fill in the user data in the form fields
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

        // Select options from dropdowns for state and country
        cy.get('.select').first().should('be.visible').and('be.enabled').select('Alabama');
        cy.get('.select').last().should('be.visible').and('be.enabled').select('Bolivia');
        cy.wait(3000); // Wait for 3 seconds

        // Navigate to the payment page
        cy.get('.button.action.continue.primary').click();
        cy.wait(3000);
        cy.get('.billing-address-details').should('be.visible'); // Verify the billing address details are visible
        cy.get('#opc-sidebar').should('be.visible'); // Verify the order summary is visible
        cy.get('.action.primary.checkout').click(); // Click on 'Place order' button

        // Assert on the success of the order placement
        cy.get('.checkout-success').should('be.visible'); // Verify the success message is visible
        cy.get('.action.primary.continue').should('be.visible'); // Verify the 'Continue Shopping' button is visible
      });
    })
});
