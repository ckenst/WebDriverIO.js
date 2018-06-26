var HomePage = require('../../pageobjects/kenst.com.page');

describe('Kenst.com', function() {
    it('lets set a cookie set', function() {
      HomePage.open();
      HomePage.setAndGetCookie();
    });
});
