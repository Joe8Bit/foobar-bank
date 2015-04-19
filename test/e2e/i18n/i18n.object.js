'use strict';

// Primative page interfaces
function getEnglishLink() {
  return element(by.css('#translate-english'));
}

function getTurkishLink() {
  return element(by.css('#translate-turkish'));
}

function getTagline() {
  return element(by.css('#tagline'));
}

module.exports = {
  getEnglishLink: getEnglishLink,
  getTurkishLink: getTurkishLink,
  getTagline: getTagline
};
