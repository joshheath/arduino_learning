var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var led = new five.Led(11);
  led.pulse(11);

  this.wait(10000, function(){
    led.stop().off();
  });
});
