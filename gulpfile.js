/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 17-03-2016.
 */

var fs = require('fs');
//var onlyScripts = require('./gulp/util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/')//.filter(onlyScripts);

tasks.forEach(function(task) {
	  require('./gulp/tasks/' + task);
});

