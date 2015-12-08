'use strict';

function WorldAnimator(world, tickRate) {
  this.world = world;
  this.tickRate = tickRate || 333;
}

WorldAnimator.prototype.run = function(){
  var self = this;
  self.inverval = setInterval(function() {
    self.tick();
  },self.tickRate);
};

WorldAnimator.prototype.tick = function() {
  this.world.turn();

  //term codes
  var clearTerm = '\x1B[2J';
  var textColor = '';//'\x1b[35m';
  var bgColor =  '';//'\x1b[46m';
  var clearColor = '\x1b[0m';

  //clear term, set fg and bg color, print world, clear color options.
  console.log(clearTerm + textColor + bgColor + this.world.toString() + clearColor);
};

WorldAnimator.prototype.stop = function() {
  clearInterval(this.interval);
};

module.exports = WorldAnimator;
