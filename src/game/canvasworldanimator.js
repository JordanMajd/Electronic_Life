'use strict';

var WorldAnimator = require('../game/worldanimator');

function CanvasWorldAnimator(world, tickRate) {
  WorldAnimator.call(this, world, tickRate);
}
CanvasWorldAnimator.prototype = Object.create(WorldAnimator.prototype);

CanvasWorldAnimator.prototype.tick = function() {
  this.world.turn();

  var canvas = document.querySelector('#canvas-canvas');
  var context = canvas.getContext('2d');
  var multiplier = 8;
  context.canvas.width  = this.world.grid.width * multiplier;
  context.canvas.height = this.world.grid.height * multiplier;

  this.world.grid.forEach(function(entity, vector){
    context.fillRect(vector.x * multiplier, vector.y * multiplier, 1 * multiplier, 1 * multiplier);
  });
};

module.exports = CanvasWorldAnimator;
