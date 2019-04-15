var five = require('johnny-five');

five.Board().on('ready', function(){

  // initialise a new instance of the RGB led
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  this.repl.inject({
    led: led
  });

  led.on();
  // set colour to red
  led.color("FF0000");

  led.blink(100);
});
