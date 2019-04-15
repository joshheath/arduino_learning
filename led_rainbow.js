var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function(){
  var rgb = new five.Led.RGB([6,5,3]);
  var index = 0;
  var rainbow = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']

  this.loop(200, function(){
    rgb.color(rainbow[index++]);
    if(index === rainbow.length) {
      index = 0;
    }
  });
});
