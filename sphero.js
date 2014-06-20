var Cylon = require('cylon');

var blinky = Cylon.robot({
  connection:   {
    name:     'sphero',
    adaptor:  'sphero',
    port:     '/dev/rfcomm0'
  },

  device:       {
    name:     'sphero',
    driver:   'sphero'
  },

  work:         function (my) {
    every((1).second(), function() {
      my.sphero.roll(60, Math.floor(Math.random() * 360));
    });
  }
});

blinky.start();