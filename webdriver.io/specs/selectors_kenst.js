var assert = require('assert');

describe('About kenst.com', function() {
    // Example using getTitle
    it('should have the right title', function() {
        browser.url('https://www.kenst.com/');
        browser.click('#menu-item-1234')
        var title = browser.getTitle();
        assert.equal(title, 'About – Chris Kenst');
    });
    // Example using getAttribute
    it('should have the right href', function() {
        browser.url('https://www.kenst.com/about');
        var attr = browser.getAttribute('=About', 'href')
        assert.equal(attr, 'https://www.kenst.com/about/')
    });
    // Example using getTagName
    it('title should be an h1', function()  {
        browser.url('https://www.kenst.com/about')
        var title = browser.getTagName('.entry-title')
        assert.equal(title, 'h1')
    });

    it('should be a pending test');
});
