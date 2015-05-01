'use strict';

var i18n = require('./i18n.object');

describe('The foobank', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/login');
  });

  it('should load English as the default language', function() {
    i18n.getTagline().getText().then(function(text) {
      expect(text).toBe('Your digital bank');
    });
  });

  it('should translate the UI to Turkish', function() {
    i18n.getTurkishLink().click();
    i18n.getTagline().getText().then(function(text) {
      expect(text).toBe('Dijital bankası');
    });
  });

  it('should translate the UI to Turkish and back to English', function() {
    i18n.getTurkishLink().click();
    i18n.getTagline().getText().then(function(text) {
      expect(text).toBe('Dijital bankası');

      i18n.getEnglishLink().click();

      i18n.getTagline().getText().then(function(text) {
        expect(text).toBe('Your digital bank');
      });
    });
  });

});
