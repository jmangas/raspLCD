var colors = require('colors');
var serlcd = require('./serlcd.js');
var dev = "/dev/tty1"; 
console.log('using : ' + dev.blue);
var lcd = new serlcd(dev);
console.log('lcd configured'.green);

//console.log(process.env);


lcd.clearScreen();
lcd.write("Hooray!");

console.log('bye...'.green);

process.on('exit', function(code) {
  //console.log('About to exit with code:'.red, code);
});
process.exit();