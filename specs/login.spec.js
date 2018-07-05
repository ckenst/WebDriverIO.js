var expect = require('chai').expect;
var LoginPage = require('../pages/login.page');
var LoginData = require('../fixtures/login');

describe('login form', function() {
  it('should deny acces with the wrong creds', function(){
    LoginPage.open();
    LoginPage.username.setValue(LoginData.invalid.username);
    LoginPage.password.setValue(LoginData.invalid.password);
    LoginPage.submit(); // this should be a click event

    expect(LoginPage.flash.getText()).to.contain('Your username is invalid!\n×'); // clearly a typo
  });

  it('should allow access with correct creds', function() {
    LoginPage.open();
    LoginPage.username.setValue(LoginData.valid.username);
    LoginPage.password.setValue(LoginData.valid.password);
    LoginPage.submit(); // this should be a click event

    expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
  });
});
