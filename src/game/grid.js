'use strict';

var Vector = require('../game/vector');

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
    vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};
Grid.prototype.forEach = function(callbackFunc, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var entity = this.space[x + y * this.width];
      if (entity !== null) {
        callbackFunc.call(context, entity, new Vector(x, y));
      }
    }
  }
};

module.exports = Grid;
