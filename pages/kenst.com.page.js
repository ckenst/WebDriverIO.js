const Page          = require('./base');
const assert        = require('assert');

const kenstHomePage = Object.create(Page, {

  authorBio:    { get: () => $('.author-biography') },
  heroImage:    { get: () => $('div.avatar') },
  navResources: { get: () => $('#menu-item-2650') },
  navAbout:     { get: () => $('#menu-item-1234') },
  navNow:       { get: () => $('#menu-item-2219') },

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
    assert.strictEqual(result.title, 'Chris Kenst -');
  } },

  setAndGetCookie: { value: function() {
    browser.setCookie({name: 'chris', value: 'washerenow'});

    let cookies = browser.getCookie();
    console.log('Cookies set are:');
    console.log(cookies);
  } },

});

module.exports = kenstHomePage;
