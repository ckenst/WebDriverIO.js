const Page   = require('./base');
const assert = require('assert');

const duckPage = Object.create(Page, {

  searchForm: { get: () => $('#search_form_input_homepage') },
  searchBtn:  { get: () => $('#search_button_homepage') },

  open: { value: function() {
    Page.open.call(this, 'https://duckduckgo.com/');
  } },

  duckGetTitle: { value: function() {
    let title = browser.getTitle();
    console.log('Title is: ' + title);
    // outputs: "Title is: WebdriverIO at DuckDuckGo"
  } },

});

module.exports =  duckPage;
