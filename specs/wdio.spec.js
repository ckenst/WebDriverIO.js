var WdioPage = require('../pages/wdio.page')

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function() {
      this.timeout(20000); // overrides the timeout for this test
      WdioPage.open();
      WdioPage.wdioGetTitle();
    });
});
