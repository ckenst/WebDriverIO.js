var Page            = require('./base');
var assert          = require('assert');

var kenstAboutPage = Object.create(Page, {

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
  },

  waitUntilBlockQuote: {
    value: function() {
      browser.waitUntil(function() {
        return browser.getText('blockquote') === 'Only Testers and Hackers enter data into a program just to see if it works.'
      });
    }
  },

});

module.exports = kenstAboutPage;
