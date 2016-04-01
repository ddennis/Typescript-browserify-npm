/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 31-03-2016.
 */
var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');


gulp.task('clean', function () {
	  return gulp.src( config.outputFolder , {read: false})
			.pipe(clean());
});
