var assert = require('assert');

// custom commands
browser.addCommand("getUrlAndTitle", function () {
    return {
        url: this.getUrl(),
        title: this.getTitle(),
    };
});

describe('About kenst.com', function() {
  it('should use my custom command', function () {
      browser.url('http://www.kenst.com/about');
      var result = browser.getUrlAndTitle();

      assert.strictEqual(result.url, 'https://www.kenst.com/about/');
      assert.strictEqual(result.title, 'About – Chris Kenst');
  });
});
