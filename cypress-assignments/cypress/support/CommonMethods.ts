
export class CommonMethods {
    static visitHomePage(url: string ): void {
      cy.visit(url);
      cy.url().should('include', url);
    }

    static validateElementVisibility(locators: string[]): void {
        locators.forEach(locator => {
          cy.get(locator).should('be.visible');
        });
      }

}