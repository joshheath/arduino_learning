var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  console.log('Ready event. REPL instance auto-initialised!');

  var led = new five.Led(13);

  this.repl.inject({
    on: function(){
      led.on();
    },
    off: function(){
      led.off();
    }
  });
});
