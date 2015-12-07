'use strict';

var World = require('../worlds/world'),
  View = require('../game/view'),
  ActionRunner = require('../game/actionrunner');

function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.prototype.letAct = function(entity, vector) {
  var action = entity.act(new View(this, vector));
  var handled = action &&
    action.type in ActionRunner &&
    ActionRunner[action.type].call(this, entity,
      vector, action);
  if (!handled) {
    entity.energy -= 0.2;
    if (entity.energy <= 0) {
      this.grid.set(vector, null);
    }
  }
};

module.exports = LifelikeWorld;
