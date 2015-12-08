'use strict';

var Entity = require('../entities/entity'),
Action = require('../game/action');

function Cell(){
  Entity.call(this);
}
Cell.prototype = Object.create(Entity.prototype);
Cell.prototype.act = function(view){
  var neighbors = view.findAll('#');
  if(neighbors.length < 2 || neighbors.length > 3){
      return new Action(Action.types.create, undefined, ' ');
  }
};

module.exports = Cell;
