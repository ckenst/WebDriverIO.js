const Page = require('./base');

const LoginPage = Object.create(Page, {

  username: { get: function() { return browser.element('#username'); } },
  password: { get: function() { return browser.element('#password'); } },
  form:     { get: function() { return browser.element('button'); } },
  flash:    { get: function() { return browser.element('#flash'); } },

  open: { value: function() {
    Page.open.call(this, 'http://the-internet.herokuapp.com/login');
  } },

  submit: { value: function() {
    this.form.click();
  } }
});

module.exports = LoginPage;
