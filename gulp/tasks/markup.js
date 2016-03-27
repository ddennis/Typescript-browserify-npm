/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 27-03-2016.
 */
'use strict';


var gulp           = require('gulp');

var browserSync  = require('browser-sync').get('app');
var gulpif       = require('gulp-if');
var ejs = require("gulp-ejs");
var rename = require('gulp-rename');
var handleErrors = require('./handleErrors');
var fs = require('fs');

var versionNumber = require('../../package.json').version;


/*
fs.readFile('./package.json','utf8', function (err, data) {
	  var file = JSON.parse(data)
	  versionNumber = file.version
	  gulpif(browserSync.active, browserSync.reload({ stream: true, once: true }))
})
*/



// Views task
gulp.task('markup', function() {

	  gulp.src('./app/index.ejs')
			.pipe(ejs({
				  version: versionNumber
			}).on('error', handleErrors))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('./dist' ))
			.pipe(gulpif(browserSync.active , browserSync.reload({ stream: true, once: true })));

	  /**
	   * Put the views into the templates module, which adds them to the templateCache
	   */

	  return gulp.src('./app/src/modules/**/*.html')
			.pipe(gulp.dest('dist/modules/' ))
			.pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});