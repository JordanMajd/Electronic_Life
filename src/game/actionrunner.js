'use strict';

var Utility = require('../game/utility');

var ActionRunner = function(){

};
ActionRunner.grow = function(entity) {
  entity.energy += 0.5;
  return true;
};
ActionRunner.move = function(entity, vector, action) {
  var dest = this.checkDestination(action, vector);
  if (dest === null ||
    entity.energy <= 1 ||
    this.grid.get(dest) !== null) {
    return false;
  }
  entity.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, entity);
  return true;
};
ActionRunner.eat = function(entity, vector, action) {
  var dest = this.checkDestination(action, vector);
  var atDest = dest !== null && this.grid.get(dest);
  if (!atDest || atDest.energy === null){
    return false;
  }
  entity.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
};
ActionRunner.reproduce = function(entity, vector, action) {
  var baby = Utility.entityFromChar(this.legend,
    entity.originChar);
  var dest = this.checkDestination(action, vector);
  if (dest === null ||
    entity.energy <= 2 * baby.energy ||
    this.grid.get(dest) !== null){
      return false;
    }
  entity.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
};
ActionRunner.die = function(entity, vector){
  this.grid.set(vector, null);
  return true;
};
ActionRunner.create = function(entity, vector, action){
  var newEntity = Utility.entityFromChar(this.legend, action.character);
  this.grid.set(vector, newEntity);
  return true;
};

module.exports = ActionRunner;
