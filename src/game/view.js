'use strict';

var Utility = require('../game/utility');

function View(world, vector) {
  this.world = world;
  this.vector = vector;
}
View.prototype.look = function(direction) {
  var target = this.vector.plus(Utility.directions[direction]);
  if (this.world.grid.isInside(target)) {
    return Utility.charFromEntity(this.world.grid.get(target));
  } else {
    return "#";
  }
};
View.prototype.findAll = function(character) {
  var found = [];
  for (var direction in Utility.directions) {
    if (this.look(direction) === character) {
      found.push(direction);
    }
  }

  return found;
};
View.prototype.find = function(character) {
  var found = this.findAll(character);
  if (found.length === 0) {
    return null;
  }
  return Utility.randomElement(found);
};


module.exports = View;
