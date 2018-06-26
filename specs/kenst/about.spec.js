var AboutPage = require('../../pageobjects/kenst.about.page');
var HomePage  = require('../../pageobjects/kenst.com.page');

describe('About Kenst.com', function() {
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

    it('should have title be an h1', function()  {
        AboutPage.open();
        AboutPage.assertUsingGetTagName();
    });

    it('should have a pending test');
});
