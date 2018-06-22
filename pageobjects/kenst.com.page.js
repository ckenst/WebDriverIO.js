var Page = require('./base')

var kenstHomePage = Object.create(Page, {

  // define elements

  navResources: { get: function() { return $('#menu-item-2138'); } },
  navAbout:     { get: function() { return $('#menu-item-1234'); } },
  navNow:       { get: function() { return $('#menu-item-2219'); } },

  // define or overwrite page methods
  open: { value: function() {
    Page.open.call(this, '/');
  } },

});

module.exports = kenstHomePage;
