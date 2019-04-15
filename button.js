var five = require('johnny-five'),
  board, button;
var board = new five.Board();

board.on('ready', function(){
  button = new five.Button(2);

  board.repl.inject({
    button: button
  });

  button.on("down", function(){
    console.log('down');
  });

  button.on('hold', function(){
    console.log('hold');
  });

  button.on('up', function(){
    console.log('up');
  });
});
