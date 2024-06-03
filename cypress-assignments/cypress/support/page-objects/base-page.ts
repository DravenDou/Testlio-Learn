export class BasePage {
  
   visitAndClear(url: string) {
    cy.clearCookies();
    cy.visit(url);
   }
    findTextAndPrint(selector: string, textToFind: string, url: string) {
    
      this.visitAndClear(url);
      cy.get(selector ).then(($element) => {
        if ($element.text().includes(textToFind)) {
          cy.log($element.text());
        } 
        else  {
          this.findTextAndPrint(selector, textToFind, url);
        }
      
      });
    }

    static selectRandomElement(elements: JQuery<HTMLElement>): JQuery<HTMLElement> {
      const itemCount = elements.length;
      const randomIndex = Math.floor(Math.random() * itemCount);
      return elements.eq(randomIndex);
    }
  }
  
  
  
  