'use strict';

function WorldAnimator(world) {
  this.world = world;
}

WorldAnimator.prototype.run = function(){
  var self = this;
  this.inverval = setInterval(function() {
    self.tick();
  },333);
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
