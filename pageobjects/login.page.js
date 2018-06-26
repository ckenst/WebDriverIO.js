var Page = require('./base');

var LoginPage = Object.create(Page, {

  username: { get: function() { return browser.element('#username'); } },
  password: { get: function() { return browser.element('#password'); } },
  form:     { get: function() { return browser.element('#login'); } },
  flash:    { get: function() { return browser.element('#flash'); } },

  open: { value: function() {
    Page.open.call(this, 'http://the-internet.herokuapp.com/login');
  } },

  submit: { value: function() {
    this.form.submitForm();
  } }
});

module.exports = LoginPage;
