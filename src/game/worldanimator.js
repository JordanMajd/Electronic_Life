'use strict';

function WorldAnimator(world, tickRate) {
  this.world = world;
  this.tickRate = tickRate || 333;
}

WorldAnimator.prototype.run = function(){
  var self = this;
  self.inverval = setInterval(function() {
    self.tick();
  }, self.tickRate);
};

WorldAnimator.prototype.tick = function() {
  this.world.turn();

  //clear terminal
  console.log('\x1B[2J');

  //set color to green
  console.log('\x1b[32m');
  console.log(this.world.toString());

  //clear colors so when the program terminates everything isn't messed up.
  console.log('\x1b[0m');
};

WorldAnimator.prototype.stop = function() {
  clearInterval(this.interval);
};

module.exports = WorldAnimator;
