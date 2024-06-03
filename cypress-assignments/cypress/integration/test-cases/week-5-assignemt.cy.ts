import { AboutPage } from '../../support/page-objects/about-page';
import { URLS, TEXTS, IDS } from '../../fixtures/constants';
import { BasePage } from '../../support/page-objects/base-page';

describe('Test Case Automation', () => {
  const basePage = new BasePage();
  const aboutPage = new AboutPage();

  it('Find h1 text on testlio.com', () => {
    basePage.findTextAndPrint('h1', TEXTS.ELEVATE, URLS.TESTLIO);
    aboutPage.navigateToAbout();
    aboutPage.navigateToLearnMore();
    aboutPage.verifyHeaderText(IDS.HEADER_ID, TEXTS.HEADER_TEXT);

  });
 
});