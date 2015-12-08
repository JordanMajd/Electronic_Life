'use strict';

var World = require('../worlds/world'),
  View = require('../game/view'),
  ActionRunner = require('../game/actionrunner');

function ConwayWorld(map, legend) {
  World.call(this, map, legend);
}
ConwayWorld.prototype = Object.create(World.prototype);
ConwayWorld.prototype.letAct = function(entity, vector) {
  var action = entity.act(new View(this, vector));
  if(action && action.type in ActionRunner){
    ActionRunner[action.type].call(this, entity, vector, action);
  }
};

module.exports = ConwayWorld;
