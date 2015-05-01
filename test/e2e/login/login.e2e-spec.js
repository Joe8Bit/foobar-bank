'use strict';

var loginPage = require('./login.object');

describe('The foobank', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/login');
  });

  it('should show a generic message if nothing is entered and form is submitted', function() {
    loginPage.enterDetailsAndSubmitForm('', '');
    loginPage.getErrorText(function(text) {
      expect(text).toBe('You must enter a username and password');
    });
  });

  it('should show a username validation message if none entered and form is submitted', function() {
    loginPage.enterDetailsAndSubmitForm('', 'Password');
    loginPage.getErrorText(function(text) {
      expect(text).toBe('You must enter a username');
    });
  });

  it('should show a password validation message if none entered and form is submitted', function() {
    loginPage.enterDetailsAndSubmitForm('Username', '');
    loginPage.getErrorText(function(text) {
      expect(text).toBe('You must enter a password');
    });
  });

  it('should successfully navigate to dashboard page if username/password is entered', function() {
    loginPage.enterDetailsAndSubmitForm('Username', 'Password');
    expect(browser.getLocationAbsUrl()).toBe('/dashboard');
  });

});
