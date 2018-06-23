var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function() {
        browser.url('http://webdriver.io');

        // this seems like a common method
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});
