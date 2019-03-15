var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function(){

  this.samplingInterval(1000);
})
