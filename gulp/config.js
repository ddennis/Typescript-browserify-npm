/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 31-03-2016.
 */

var path = require('path');


var outputFolder = './dist';
var rootAppFolder = './app';

module.exports = {

	  // should the code be minified
	  productionBuild: false,
	  outputFolder: outputFolder ,

	  styles:{
			input: path.resolve(rootAppFolder, './css/styles.less'),
			output: outputFolder
	  },

	  js:{
			input: path.resolve(rootAppFolder, './src/app.ts'),
			output: outputFolder
	  }
	  
}

