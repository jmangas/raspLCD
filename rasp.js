var serlcd = require('./serlcd.js');
var lcd = new serlcd("/dev/ttyAMA0");
console.log('lcd configured');

lcd.clearScreen();
lcd.write("Hooray!");
console.log('bye...');