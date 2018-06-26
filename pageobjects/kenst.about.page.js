var Page            = require('./base');
var assert          = require('assert');

var kenstAboutPage = Object.create(Page, {
  // define elements

  // define or overwrite page methods
  open: { value: function() {
    Page.open.call(this, '/about/');
  } },

  assertOnTitleName: {
    value: function() {
      var title = browser.getTitle();
      assert.equal(title, 'About – Chris Kenst');
    }
  },

  assertOnTitleTag: {
    value: function() {
      var title = browser.getTagName('.entry-title');
      assert.equal(title, 'h1');
    }
  }

});

module.exports = kenstAboutPage;
