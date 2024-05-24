import { BasePage } from "./base-page";

export class AboutPage extends BasePage {
  visit(url: string) {
    cy.visit(url);
  }
    navigateToAbout() {
      cy.get('.header__hamburger').should('be.visible').click();
      cy.get('#about').should('be.visible').click();
    }
  
    navigateToLearnMore() {
      cy.get('a[href="https://testlio.com/about-us/"]').should('contain', 'Learn more').click();
    }
  
    verifyHeaderText(headerId: string, expectedText: string) {
      cy.get(headerId).should('be.visible').invoke('text').then((text) => {
        expect(text.trim()).to.eq(expectedText);
        cy.log(text);
      });
    }
  }