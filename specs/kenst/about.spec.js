var AboutPage = require('../../pageobjects/kenst.about.page');
var HomePage  = require('../../pageobjects/kenst.com.page');

describe('About kenst.com', function() {
    it('should have the right title', function() {
        HomePage.open();
        HomePage.navResources.waitForExist();
        HomePage.navAbout.click();
        AboutPage.assertUsingGetTitle();
    });

    it('should have the right href', function() {
        browser.url('https://www.kenst.com/about');
        AboutPage.assertUsingGetAttribute();
    });

    it('title should be an h1', function()  {
        AboutPage.open();
        AboutPage.assertUsingGetTagName();
    });

    it('should be a pending test');
});
