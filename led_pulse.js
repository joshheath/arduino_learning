var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var led = new five.Led(11);
  led.pulse(11);

  // LED pulse loop will stop after 10s
  this.wait(10000, function(){

    // stop - stops the interval
    // off - shuts off LED
    led.stop().off();
  });
});
