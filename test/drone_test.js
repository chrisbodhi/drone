"use strict";

// stub connections to adaptors/devices
process.env['CYLON_TEST'] = true;

// setup tests
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);
var clock = sinon.useFakeTimers();

// load drone in test mode
var Cylon = require('cylon');
require("../drone.js");

describe( "drone", function() {
  var drone = Cylon.findRobot('drone');

  it("should have work", function() {
    return drone.work.should.be.a('function');
  });

  it("should take off", function(done) {
    var drone_js = Cylon.findRobot('drone');
    var drone = drone_js.devices['drone'];
    var takeoff = sinon.stub(drone, 'takeoff');
    drone_js.start();
    takeoff.should.have.been.called;
    done();
  })

  it("should land after 10 seconds", function(done) {
    var drone_js = Cylon.findRobot('drone');
    var drone = drone_js.devices['drone'];
    var land = sinon.stub(drone, 'land')
    drone_js.start();
    // console.log(clock.tick(10).second());
    clock.tick(10000);
    land.should.have.been.called;
    done();
  });

  it("should stop after 15 seconds", function(done) {
    var drone_js = Cylon.findRobot('drone');
    var drone = drone_js.devices['drone'];
    var stop = sinon.stub(drone, 'stop')
    drone_js.start();
    // console.log(clock.tick(10).second());
    clock.tick(15000);
    stop.should.have.been.called;
    done();
  });
});