var five = require('johnny-five'),
  board, button, led;
var board = new five.Board();

board.on('ready', function(){

  // creates a new button instance on port 2 - the button module can create a completely default instance
  button = new five.Button(2);
  var led = new five.Led(13);

  // allows control from the command line by injecting the button hardware into the repl
  board.repl.inject({
    button: button
  });

  // button event API

  // down = button pressed
  button.on("down", function(){
    console.log('down');
    led.on();
  });

  // hold = button pressed for a specific time, 1/2 second by default
  button.on('hold', function(){
    console.log('hold');
    led.on();
  });

  // up = button released
  button.on('up', function(){
    console.log('up');
    led.off();
  });
});
