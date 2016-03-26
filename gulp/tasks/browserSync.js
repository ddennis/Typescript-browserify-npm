/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-03-2016.
 */


var gulp        = require("gulp");
var browserSync = require('browser-sync').create();


//******************************************************************************
gulp.task("dev", ["js"], function () {

	  browserSync.init({
			server: "./dist/"
	  });

	 // gulp.watch([ "source/**/**.ts" ], ["default"]);
	  gulp.watch("dist/app.js").on('change', browserSync.reload);
});
