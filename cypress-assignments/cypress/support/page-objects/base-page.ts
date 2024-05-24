export class BasePage {
  
    findTextAndPrint(selector: string, textToFind: string) {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('https://testlio.com'); 
      cy.get(selector ).then(($element) => {
        if ($element.text().includes(textToFind)) {
          cy.log($element.text());
        } 
        else {
            this.findTextAndPrint(selector, textToFind);
        }
      });
    }
  }
  
  