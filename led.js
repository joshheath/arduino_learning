var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var led = five.Led(13);

// grant access to led instance from repl that is created when this is run
  this.repl.inject({
    led: led
  });

  led.blink();
})

// Commands from REPL:
// led.stop()
// led.off()
// led.on() 
