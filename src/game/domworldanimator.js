'use strict';

var WorldAnimator = require('../game/worldanimator');

function DomWorldAnimator(world, tickRate) {
  WorldAnimator.call(this, world, tickRate);
}
DomWorldAnimator.prototype = Object.create(WorldAnimator.prototype);

DomWorldAnimator.prototype.tick = function() {
  this.world.turn();

  //term codes
  // var clearTerm = '\x1B[2J';
  // var textColor = '';//'\x1b[35m';
  // var bgColor =  '';//'\x1b[46m';
  // var clearColor = '\x1b[0m';

  //clear term, set fg and bg color, print world, clear color options.
  // console.log(clearTerm + textColor + bgColor + this.world.toString() + clearColor);
  document.querySelectorAll('#canvas')[0].innerHTML = '<pre>'+ this.world.toString() + '</pre>';
};

module.exports = DomWorldAnimator;
