var HomePage = require('../../pageobjects/kenst.com.page');

describe('Kenst.com', function() {
    it('sets a cookie', function() {
      HomePage.open();
      browser.setCookie({name: 'auth', value: 'somerandomhash'});

      var cookies = browser.getCookie();
      console.log(cookies);
    });
});
