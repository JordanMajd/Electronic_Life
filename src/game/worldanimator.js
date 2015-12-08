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

  console.log(this.world.toString());
};

WorldAnimator.prototype.stop = function() {
  clearInterval(this.interval);
};

module.exports = WorldAnimator;
