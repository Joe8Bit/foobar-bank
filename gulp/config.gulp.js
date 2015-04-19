'use strict';

var gulp 		 			= require('gulp'),
		gulpNgConfig 	= require('gulp-ng-config'),
		rename 		 		= require('gulp-rename'),
		insert 		 		= require('gulp-insert'),
		replace 	 		= require('gulp-replace-task'),
		path					= require('path'),
		expect 				= require('gulp-expect-file');

gulp.task('config' ,function () {
	gulp.src(path.join('.', 'config', 'defaults.json'))
		.pipe(gulpNgConfig('ConfigModule', require(path.join('..', 'config', (process.env.NODE_ENV || 'development')))))
		.pipe(rename('config.constant.js'))
		.pipe(insert.prepend('/* jshint ignore:start */\n'))
		.pipe(insert.append('/* jshint ignore:end */'))
		.pipe(replace({
			patterns: [{
				match: 'angular.module(\'ConfigModule\', [])',
				replacement: 'angular.module(\'ConfigModule\')'
			}]
	   }))
		.pipe(gulp.dest(path.join('.', 'src', 'app', 'core', 'constant')))
		.pipe(expect(path.join('.', 'src', 'app', 'core', 'constant', 'config.constant.js')));
});
