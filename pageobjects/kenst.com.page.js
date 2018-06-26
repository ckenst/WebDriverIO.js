var Page          = require('./base');
var assert        = require('assert');

var kenstHomePage = Object.create(Page, {

  navResources: { get: function() { return $('#menu-item-2138'); } },
  navAbout:     { get: function() { return $('#menu-item-1234'); } },
  navNow:       { get: function() { return $('#menu-item-2219'); } },

  // define or overwrite page methods
  open: { value: function() {
    Page.open.call(this, '/');
  } },

  getUrlAndTitle: { value: function() {
    browser.addCommand("getUrlAndTitle", function () {
        return {
            url: this.getUrl(),
            title: this.getTitle(),
        };
    });
  } },

  assertOnUrlAndTitle: { value: function() {
    let result = browser.getUrlAndTitle();
    assert.equal(result.url, 'https://www.kenst.com/');
    assert.strictEqual(result.title, 'Chris Kenst');
  } },

  setAndGetCookie: { value: function() {
    browser.setCookie({name: 'auth', value: 'somerandomhash'});

    let cookies = browser.getCookie();
    console.log('Cookies set are:');
    console.log(cookies);
  } },

});

module.exports = kenstHomePage;
