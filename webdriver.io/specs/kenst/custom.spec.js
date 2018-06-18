var assert = require('assert');

// custom commands
browser.addCommand("getUrlAndTitle", function () {
    return {
        url: this.getUrl(),
        title: this.getTitle(),
    };
});

describe('Kenst.com', function() {
  it('should use my custom command', function () {
      browser.url('http://www.kenst.com/');
      var result = browser.getUrlAndTitle();
      console.log(result)

      assert.equal(result.url, 'https://www.kenst.com/');
      assert.strictEqual(result.title, 'Chris Kenst');
  });
});
