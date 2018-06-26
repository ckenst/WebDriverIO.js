var WdioPage = require('../pageobjects/wdio.page')

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function() {
        WdioPage.open();
        WdioPage.wdioGetTitle();
    });
});
