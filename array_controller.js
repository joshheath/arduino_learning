var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // create a new array of leds at pin numbers below
  var leds = new five.Leds([2, 3, 4, 5, 6]);
  // create a new instance of the potentiometer
  var pot = new five.Sensor("A0");

  // give the potentiometer 6 settings - off, 1, 2, 3, 4, 5
  pot.scale([-1, 4]).on("change", function() {
    var lastIndex = Math.round(this.value);

    if (lastIndex === -1) {
      leds.off();
    } else {
      leds.each(function(led, index) {
        if (index <= lastIndex) {
          led.on();
        } else {
          led.off();
        }
      });
    }
  });
});
