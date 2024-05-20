describe('Test Case Automation', () => {

  it('Find h1 text on testlio.com', () => {
     // The text we are searching for in the h1 header.
    const searchText = 'Your trusted partner in critical testing moments';
    // Function to search for the text and print it.
    const findTextAndPrint = () => {
      // Clears cookies and local storage before each attempt.
        cy.clearCookies();
        cy.clearLocalStorage();
        // Visits the Testlio page.
      cy.visit('https://testlio.com'); 
       // Gets the first h1 element and then executes a callback function.
      cy.get('h1').then(($h1) => {
        // Checks if the text of the h1 element includes the searched text.
        if ($h1.text().includes(searchText)) {
          // If it does, gets the element with the specific ID and checks that it contains the searched text.
          cy.get('#your-trusted-partner-in-critical-testing-moments').should('contain', searchText).then(($header) => {
            // Gets the text of the header and prints it in the Cypress log.
            const headerText = $header.text();
            cy.log(headerText); 
            // Waits 5 seconds before continuing.
            cy.wait(5000);
          });
        } else {
          // If the text is not found, waits 1 second and retries the function.
          cy.wait(1000); 
          findTextAndPrint(); 
        }
      });
    };
     // Calls the function for the first time.
    findTextAndPrint(); 
  });
  it('Find h1 text in about and learn more', () => {
    // Visits the Testlio page.
    cy.visit('https://testlio.com'); 
     // Gets the hamburger menu button, checks that it is visible, and clicks on it.
    cy.get('.header__hamburger').should('be.visible').click(); 
     // Gets the 'About' link, checks that it is visible, and clicks on it.
    cy.get('#about').should('be.visible').click().then  ;
    // Gets the 'Learn more' link, checks that it contains the text, and clicks on it.
    cy.get('a[href="https://testlio.com/about-us/"]').should('contain', 'Learn more').click();
    // Gets the element with the specific ID, checks that it is visible, gets its text, and prints it in the log.
    cy.get('#we-power-fused-software-testing-to-enable-human-possibilities').should('be.visible').invoke('text').then((text) => {
    cy.log(text); 
  });

   
  });
});

