var Page   = require('./base');
var assert = require('assert');

var duckPage = Object.create(Page, {

  searchForm: { get: function() { return browser.element('#search_form_input_homepage'); } },
  searchBtn:  { get: function() { return browser.element('#search_button_homepage'); } },

  open: { value: function() {
    Page.open.call(this, 'https://duckduckgo.com/');
  } },

  duckGetTitle: { value: function() {
    var title = browser.getTitle();
    console.log('Title is: ' + title);
    // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
  } },

});

module.exports =  duckPage;
