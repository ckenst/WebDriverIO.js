var AboutPage = require('../../pages/kenst.about.page');
var HomePage  = require('../../pages/kenst.com.page');

describe('About Kenst.com', function() {
    it('should wait for this blockquote', function() {
        HomePage.open();
        HomePage.navResources.waitForExist();
        HomePage.navAbout.click();
        AboutPage.waitUntilBlockQuote();
    });

    it('should have the right title', function() {
        HomePage.open();
        HomePage.navResources.waitForExist();
        HomePage.navAbout.click();
        AboutPage.assertUsingGetTitle();
    });

    it('should have the right href', function() {
        browser.url('/about');
        AboutPage.assertUsingGetAttribute();
    });

    it('should have title be an h1', function()  {
        AboutPage.open();
        AboutPage.assertUsingGetTagName();
    });

    it('should have a pending test');
});
