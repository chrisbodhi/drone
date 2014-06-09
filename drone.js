// To run: node drone.js

"use strict";

var Cylon = require('cylon');

// Initialize the drone
var drone = Cylon.robot({
  name: 'drone',
  connection: {name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1'},
  device: {name: 'drone', driver: 'ardrone'},
  work: function (my) {
    console.log("takeoff");
    my.drone.takeoff();

    after((10).seconds(), function() {
      my.drone.land();
      console.log("land after 10 seconds");
    });

    after((15).seconds(), function() {
      my.drone.stop();
      console.log("stopping...");
    });
  }
});

// Start flying
drone.start();