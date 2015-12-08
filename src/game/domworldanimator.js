'use strict';

var WorldAnimator = require('../game/worldanimator');

function DomWorldAnimator(world, tickRate) {
  WorldAnimator.call(this, world, tickRate);
}
DomWorldAnimator.prototype = Object.create(WorldAnimator.prototype);

DomWorldAnimator.prototype.tick = function() {
  this.world.turn();

  document.querySelectorAll('#canvas')[0].innerHTML = '<pre>'+ this.world.toString() + '</pre>';
};

module.exports = DomWorldAnimator;
