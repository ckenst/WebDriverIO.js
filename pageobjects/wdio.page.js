var Page   = require('./base');
var assert = require('assert');

var wdioPage = Object.create(Page, {

  open: { value: function() {
    Page.open.call(this, 'http://webdriver.io');
  } },

  wdioGetTitle: { value: function() {
    var title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
  } },

});

module.exports =  wdioPage;
