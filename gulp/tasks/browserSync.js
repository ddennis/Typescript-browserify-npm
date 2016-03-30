/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-03-2016.
 */


var gulp        = require("gulp");
var browserSync = require('browser-sync').create('app');


//******************************************************************************
gulp.task("dev", ['markup', 'browserifyTypescript'], function () {

	  browserSync.init({
			server: "./dist/"
	  });

	 // gulp.watch([ "source/**/**.ts" ], ["default"]);
	  gulp.watch("dist/app.js").on('change', browserSync.reload);
	  gulp.watch( ['app/index.ejs', 'app/src/modules/**/*.ejs', 'app/src/modules/**/*.html'], ['markup']);
});
