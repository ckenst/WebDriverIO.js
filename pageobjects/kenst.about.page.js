var Page            = require('./base');
var assert          = require('assert');

var kenstAboutPage = Object.create(Page, {
  // define elements

  // define or overwrite page methods
  open: { value: function() {
    Page.open.call(this, '/about/');
  } },

  assertUsingGetTitle: {
    value: function() {
      var title = browser.getTitle();
      assert.equal(title, 'About – Chris Kenst');
    }
  },

  assertUsingGetTagName: {
    value: function() {
      var title = browser.getTagName('.entry-title');
      assert.equal(title, 'h1');
    }
  },

  assertUsingGetAttribute: {
    value: function() {
      var attr = browser.getAttribute('=About', 'href');
      assert.equal(attr, 'https://www.kenst.com/about/');
    }
  }

});

module.exports = kenstAboutPage;
