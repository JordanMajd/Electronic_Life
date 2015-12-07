'use strict';

var Vector = require('../game/vector');

var directions = {
  "n": new Vector(0, -1),
  "ne": new Vector(1, -1),
  "e": new Vector(1, 0),
  "se": new Vector(1, 1),
  "s": new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
};

var directionNames = "n ne e se s sw w nw".split(" ");


function entityFromChar(legend, ch) {
  if (ch === " " || !ch) {
    return null;
  }
  var entityConstructor = legend.get(ch);
  var entity = new entityConstructor();
  entity.originChar = ch;
  return entity;
}

//get character from an entity
function charFromEntity(entity) {
  if (entity === null) {
    return " ";
  } else {
    return entity.originChar;
  }
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

module.exports.charFromEntity = charFromEntity;
module.exports.entityFromChar = entityFromChar;
module.exports.randomElement = randomElement;
module.exports.directions = directions;
module.exports.directionNames = directionNames;
module.exports.dirPlus = dirPlus;
