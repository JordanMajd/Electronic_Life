'use strict';

var Action = require('../game/action');

function Entity() {
  this.energy = 100;
  this.direction = 'n';
}

Entity.prototype.act  = function(view){
  if (view.look(this.direction) !== " ") {
    this.direction = view.find(" ") || "s";
  }
  return new Action(Action.types.move, this.direction);
};

module.exports = Entity;
