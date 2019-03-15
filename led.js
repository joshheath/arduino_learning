var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var led = five.Led(13);

  this.repl.inject({
    led: led
  });

  led.blink();
})
