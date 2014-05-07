// logger.js
// Version 0.0.1
// =========
fs = require('fs');

module.exports = Logger;

htimestamp = function() {
    var date = new Date();
    result = '[' + date.getFullYear() + '/' + date.getMonth() + '/' +
        date.getDate() + '/' + date.getHours() + ':' + 
        date.getMinutes() + ':' + date.getSeconds() + ']';
    return result;
}

// Create log file if it does not exists.
function Logger(logFilePath) {
	this.logFilePath = logFilePath;
}

Logger.prototype.start = function() {
	var logFilePath = this.logFilePath;

	fs.exists(logFilePath, function (exists) {
		if (!exists) {
			console.log('creating file: ' + logFilePath);
			fs.writeFile(logFilePath, '');
			console.log(logFilePath + ' created.');
		}else {
			console.log(logFilePath + ' is already created.');
			console.log(logFilePath + ' logger started.');
		}
	});
}

Logger.prototype.log = function(message) {
	var logFilePath = this.logFilePath;
    var timestamp = htimestamp();
    var logMessage = timestamp + ' ' + message + '\n';
    console.log(logMessage);
    fs.appendFile(logFilePath, logMessage);
}

console.log('logger.js imported successfully');
