var Page = require('./base')

var kenstAboutPage = Object.create(Page, {

  // define elements

  // define or overwrite page methods
  open: { value: function() {
    Page.open.call(this, '/about/');
  } },

});

module.exports = kenstAboutPage;
