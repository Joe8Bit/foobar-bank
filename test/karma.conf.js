'use strict';

module.exports = function(config) {

  config.set({
    basePath: '..',

    files: [
      'src/app/**/*.js',
      'src/components/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: false,

    frameworks: ['jasmine', 'sinon'],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      'src/app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-sinon'
    ]
  });

};
