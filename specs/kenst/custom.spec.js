var HomePage  = require('../../pageobjects/kenst.com.page');

describe('Kenst.com', function() {
  it('should use my custom command', function () {
      HomePage.open();
      HomePage.getUrlAndTitle();
      HomePage.assertOnUrlAndTitle();
  });
});
