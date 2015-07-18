'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var expect = require('gulp-expect-file');
var path = require('path');
var Server = require('karma').Server;

gulp.task('test', ['config'], function(done) {
  var bowerDeps = wiredep({
    directory: 'src/bower_components',
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'src/{app,components}/**/*.js',
    'test/unit/**/*.js'
  ]);

  return gulp.src(testFiles)
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
});
