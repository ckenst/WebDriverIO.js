const expect    = require('chai').expect;
const LoginPage = require('../pages/login.page');
const LoginData = require('../fixtures/login');

describe('login form', function() {
  it('should deny acces with the wrong creds', function(){
    LoginPage.open();
    LoginPage.username.setValue(LoginData.invalid.username);
    LoginPage.password.setValue(LoginData.invalid.password);
    LoginPage.submit();

    expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
  });

  it('should allow access with correct creds', function() {
    LoginPage.open();
    LoginPage.username.setValue(LoginData.valid.username);
    LoginPage.password.setValue(LoginData.valid.password);
    LoginPage.submit(); 

    expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
  });
});
