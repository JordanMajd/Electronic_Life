'use strict';

var Entity = require('../entities/entity'),
Action = require('../game/action');

function Empty(){
  Entity.call(this);
}
Empty.prototype = Object.create(Entity.prototype);
Empty.prototype.act = function(view){
  var neighbors = view.findAll('\u2588');
  if(neighbors.length === 3){
    return new Action(Action.types.create, undefined, '\u2588');
  }
};

module.exports = Empty;
