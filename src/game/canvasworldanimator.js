'use strict';

var WorldAnimator = require('../game/worldanimator');
var Cell = require('../entities/cell');

function CanvasWorldAnimator(world, tickRate) {
  WorldAnimator.call(this, world, tickRate);
  this.startTime = 0;
}
CanvasWorldAnimator.prototype = Object.create(WorldAnimator.prototype);

CanvasWorldAnimator.prototype.run = function(){
  var self = this;
  window.requestAnimationFrame(function(timestamp){
    self.tick.call(self, timestamp);
  });
};

CanvasWorldAnimator.prototype.tick = function(timestamp) {

  if(timestamp - this.startTime > this.tickRate){
    console.log(timestamp - this.startTime);
    this.world.turn();

    var canvas = document.querySelectorAll('#canvas-canvas')[0];
    var context = canvas.getContext('2d');
    var multiplier = 8;
    context.canvas.width  = this.world.grid.width * multiplier;
    context.canvas.height = this.world.grid.height * multiplier;

    this.world.grid.forEach(function(entity, vector){
      if(entity instanceof Cell){
        context.fillStyle = '#ff5722';
      }else{
        context.fillStyle = '#2196f3';
      }
      context.fillRect(vector.x * multiplier, vector.y * multiplier, 1 * multiplier, 1 * multiplier);
    });
    this.startTime = timestamp;
  }

  var self = this;
  window.requestAnimationFrame(function(timestamp){

    self.tick.call(self, timestamp);
  });

};

module.exports = CanvasWorldAnimator;
