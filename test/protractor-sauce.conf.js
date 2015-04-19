// An example configuration file.
exports.config = {

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  capabilities: {
    browserName: 'chrome'
  },

  // Capabilities to be passed to the saucelabs webdriver instance.
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }, {
  //   browserName: 'iphone'
  // }, {
  //   browserName: 'ipad'
  // }, {
  //   browserName: 'android'
  // }],

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
