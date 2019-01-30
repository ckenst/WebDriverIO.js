const Page   = require('./base');
const assert = require('assert');

const wdioPage = Object.create(Page, {

  open: { value: function() {
    Page.open.call(this, 'http://webdriver.io');
  } },

  wdioGetTitle: { value: function() {
    const title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
  } },

});

module.exports =  wdioPage;
