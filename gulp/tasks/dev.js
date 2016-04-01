/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 01-04-2016.
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');
var browserSync = require('browser-sync').create('app');
var config = require('../config');

gulp.task('dev', ['clean'], function(callback) {

	  browserSync.init({
			server: config.outputFolder
	  });

	  config.productionBuild = false;
	  callback = callback || function() {};

	  runSequence(['markup', 'browserifyTypescript', 'styles'], 'watch')
});