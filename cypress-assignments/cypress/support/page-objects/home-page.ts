import { BasePage } from './base-page';
import { CommonMethods } from '../CommonMethods';
import { MAGENTO_HOME_PAGE_LOCATORS } from '../../fixtures/locators/locators';

export class HomePage extends CommonMethods {
    static validateHomePageElements(locators: string[]): void {
        super.validateElementVisibility(locators);
      }
    
      static navigateToSection(menuItem: string,menuItemText: string, subItem: string, subItemText: string, visibleElements: string[]): void {
        cy.get(menuItem, { timeout: 100000 }).contains(menuItemText).trigger('mouseover');
        cy.get(subItem, { timeout: 100000 }).contains(subItemText).click({force: true});
        super.validateElementVisibility(visibleElements);
      }
  
}