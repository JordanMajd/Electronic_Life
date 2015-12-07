'use strict';

var Grid = require('../game/grid'),
  Vector = require('../game/vector'),
  View = require('../game/view'),
  Utility = require('../game/utility');

function World(map, legend) {

  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y), Utility.entityFromChar(legend, line[x]));
    }
  });
}
World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var entity = this.grid.get(new Vector(x, y));
      output += Utility.charFromEntity(entity);
    }
    output += "\n";
  }
  return output;
};
World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(entity, vector) {
    if (entity.act && acted.indexOf(entity) === -1) {
      acted.push(entity);
      this.letAct(entity, vector);
    }
  }, this);
};
World.prototype.letAct = function(entity, vector) {
  var action = entity.act(new View(this, vector));
  if (action && action.type === "move") {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) === null) {
      this.grid.set(vector, null);
      this.grid.set(dest, entity);
    }
  }
};
World.prototype.checkDestination = function(action, vector) {
  if (Utility.directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(Utility.directions[action.direction]);
    if (this.grid.isInside(dest)) {
      return dest;
    }
  }
};

module.exports = World;
