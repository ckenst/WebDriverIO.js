var AboutPage = require('../../pageobjects/kenst.about.page');
var HomePage  = require('../../pageobjects/kenst.com.page');
var assert    = require('assert');

describe('About kenst.com', function() {
    it('should have the right title', function() {
        HomePage.open();
        HomePage.navResources.waitForExist();
        HomePage.navAbout.click();
        AboutPage.assertOnTitleName();
    });

    it('should have the right href', function() {
        browser.url('https://www.kenst.com/about');
        var attr = browser.getAttribute('=About', 'href')
        assert.equal(attr, 'https://www.kenst.com/about/')
    });

    it('title should be an h1', function()  {
        AboutPage.open();
        AboutPage.assertOnTitleTag();
    });

    it('should be a pending test');
});
