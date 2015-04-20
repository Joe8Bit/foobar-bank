'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var expect = require('gulp-expect-file');
var path = require('path');

gulp.task('test', ['config'], function() {
  var bowerDeps = wiredep({
    directory: 'src/bower_components',
    dependencies: true,
    devDependencies: true,
    overrides: {
      "angular-feature-flags": {
        "main": "dist/featureFlags.js"
      }
    }
  });

  var testFiles = bowerDeps.js.concat([
    'src/{app,components}/**/*.js',
    'test/unit/**/*.js'
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
