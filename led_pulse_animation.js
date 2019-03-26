var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){

  var led = five.Led(11);

  led.pulse({
    // A function from the ease-component that specifies the rate of change of a parameter over time - linear is default
    easing: 'easeInSine',
    duration: 6000,
    // Array of values from 0-1 representing the start and end of the animation
    cuePoints: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    // Array of device positions over time - each element maps on cuePoints, so the arrays have to be the same length
    keyFranes: [0, 10, 0, 50, 0, 10, 0, 50, 0, 255, 0],
    onStop: function(){
      console.log('animation stopped');
    }
  });
  this.wait(12000, function(){
    led.stop().off();
  });
});
