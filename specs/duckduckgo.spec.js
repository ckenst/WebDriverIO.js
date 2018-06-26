var DuckPage = require('../pageobjects/duckduckgo.page')

describe('DuckDuckGo search', function() {
    it('searches for WebdriverIO', function() {
        DuckPage.open();
        DuckPage.searchForm.setValue('WebdriverIO');
        DuckPage.searchBtn.click();
        DuckPage.duckGetTitle();
    });
});
