export class BasePage {
  
   visitAndClear(url: string) {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(url);
   }
    findTextAndPrint(selector: string, textToFind: string, url: string, retryCount = 0) {
      const maxRetries = 3;
      this.visitAndClear(url);
      cy.get(selector ).then(($element) => {
        if ($element.text().includes(textToFind)) {
          cy.log($element.text());
        } 
        else if (retryCount < maxRetries) {
          cy.wait(1000);
          this.findTextAndPrint(selector, textToFind, url, retryCount + 1);
        }
      
      });
    }

    static selectRandomElement(elements: JQuery<HTMLElement>): JQuery<HTMLElement> {
      const itemCount = elements.length;
      const randomIndex = Math.floor(Math.random() * itemCount);
      return elements.eq(randomIndex);
    }
  }
  
  
  
  