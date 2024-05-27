
import { HomePage } from '../../support/page-objects/home-page'; 
import { ProductPage } from '../../support/page-objects/product.page'; 
import { CommonMethods } from '../../support/CommonMethods'; 
import { URLS } from '../../fixtures/constants'; 
import { MAGENTO_HOME_PAGE_LOCATORS, MAGENTO_PRODUCT_PAGE_LOCATORS } from '../locators/locators'; 
import { CheckoutPage } from '../../support/page-objects/checkout-page';

describe('Magento Store - E2E Test Scenario', () => {
  it('testing', () => {
    CommonMethods.visitHomePage(URLS.MAGENTO_BASE_URL);
    HomePage.validateHomePageElements([
      MAGENTO_HOME_PAGE_LOCATORS.PROMO_BANNER,
      MAGENTO_HOME_PAGE_LOCATORS.PRODUCT_GRID,
      MAGENTO_HOME_PAGE_LOCATORS.SEARCH_BUTTON,
      MAGENTO_HOME_PAGE_LOCATORS.TOP_NAVIGATION,
    ]);
    HomePage.navigateToSection(
      MAGENTO_HOME_PAGE_LOCATORS.TOP_NAVIGATION, MAGENTO_HOME_PAGE_LOCATORS.GEAR_MENU,
      MAGENTO_HOME_PAGE_LOCATORS.FITNESS_MENU, MAGENTO_HOME_PAGE_LOCATORS.FITNESS_EQUIPMENT,
      [MAGENTO_HOME_PAGE_LOCATORS.MAIN_COLUMN, MAGENTO_HOME_PAGE_LOCATORS.PRODUCTS_GRID]
    );
    ProductPage.addRandomProductToCart();
    ProductPage.verifyCartContents();
    ProductPage.proceedToCheckoutAndVerify();
    const userData = {
      username: 'example@mail.com',
      firstname: 'Douglas',
      lastname: 'douglas',
      street: ['street0', 'street1', 'street2'],
      city: 'bolivia',
      postcode: '0000',
      telephone: '11111',
    };
    CheckoutPage.fillMandatoryDetailsAndNavigateToPayment(userData);
    CheckoutPage.placeOrderAndVerifySuccess();

  });
  
});


    