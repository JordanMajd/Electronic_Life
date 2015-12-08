'use strict';

function Action(type, direction){
  this.type = type;
  this.direction = direction;
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
