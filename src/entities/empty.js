'use strict';

var Entity = require('../entities/entity'),
Action = require('../game/action');

function Empty(){
  Entity.call(this);
}
Empty.prototype = Object.create(Entity.prototype);
Empty.prototype.act = function(view){
  var neighbors = view.findAll('#');
  if(neighbors.length === 3){
    return new Action(Action.types.create, undefined, '#');
  }
};

module.exports = Empty;
