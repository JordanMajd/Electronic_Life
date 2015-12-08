'use strict';

function Action(type, direction, character){
  this.type = type;
  this.direction = direction;
  this.character = character;
}

Action.types = {
  reproduce:'reproduce',
  grow:'grow',
  move:'move',
  eat:'eat',
  die:'die',
  create:'create'
};

module.exports = Action;
