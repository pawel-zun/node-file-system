var fs = require('fs');
var colors = require('colors');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.readdir('./', 'utf-8', function(err, files) {
		console.log('W folderze znajdują się następujące pliki:', files);
		fs.appendFile('./text.txt', '\n' + files, function(err) {
			if (err) throw err;
			console.log('Zapisano wykaz plików!'.green);
			fs.readFile('./text.txt', 'utf-8', function(err, data) {
				console.log('Dane po zapisie'.blue);
				console.log(data);
			});
		});
	});
});
