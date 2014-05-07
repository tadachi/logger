var logger = require('./logger.js');


var logger = new logger('log1.txt');
logger.start();
logger.log('test');

console.log(htimestamp());