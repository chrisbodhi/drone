var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'opencv', adaptor: 'opencv'},

  devices: [
    {
      name: 'window',
      adaptor: 'opencv'
    },
    {
      name: 'camera',
      driver: 'camera',
      camera: 1,
      haarcascade: __dirname + "/examples/opencv/haarcascade_frontalface_alt.xml"
    }
  ],

  work: function(my){
    my.camera.once('cameraReady', function(){
      console.log('La camera is ready!')

      my.camera.on('frameReady', function(err, im){
        console.log("frameReady!");
        my.window.show(im, 40);
      });

    every(50, function() { my.camera.readFrame(); });
    });
  }
});

Cylon.start();
