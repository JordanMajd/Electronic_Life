(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var ActionRunner = require('./game/actionrunner');
var WorldAnimator = require('./game/worldanimator');
var Grid = require('./game/grid');
var Utility = require('./game/utility');
var Vector = require('./game/vector');
var View = require('./game/view');
var Legend = require('./game/legend');
var Entity = require('./entities/entity');
var Wall = require('./entities/wall');
var Animal = require('./entities/animal');
var Herbivore = require('./entities/herbivore');
var Carnivore = require('./entities/carnivore');
var Plant = require('./entities/plant');
var LifelikeWorld = require('./worlds/lifelikeworld');
var World = require('./worlds/world');
var defaultMap = require('./maps/defaultmap');

//NOTE: Update the legend with your entities as you implement them
var myLegend = new Legend();

//NOTE: if you are using Loose Inheritance with Closure Constructors you will need to update the Wall object because it is set up to use Prototypical.
myLegend.set('#', Wall);
myLegend.set('O', Entity);

//create a LifelikeWorld with the defaultMap and the provided legend.
//NOTE: remember to add entities as you implement them to defaultMap
//NOTE: there are other maps!
var myWorld = new LifelikeWorld(defaultMap, myLegend);


//Megaman EXECUTE! \o/
new WorldAnimator(myWorld).run();

},{"./entities/animal":2,"./entities/carnivore":3,"./entities/entity":4,"./entities/herbivore":5,"./entities/plant":6,"./entities/wall":7,"./game/actionrunner":9,"./game/grid":10,"./game/legend":11,"./game/utility":12,"./game/vector":13,"./game/view":14,"./game/worldanimator":15,"./maps/defaultmap":16,"./worlds/lifelikeworld":17,"./worlds/world":18}],2:[function(require,module,exports){
'use strict';

var Entity = require('../entities/entity');

function Animal() {

  //TODO: implement me

}

module.exports = Animal;

},{"../entities/entity":4}],3:[function(require,module,exports){
'use strict';

var Animal = require('../entities/animal');

function Carnivore() {

  //TODO: implement me

}

module.exports = Carnivore;

},{"../entities/animal":2}],4:[function(require,module,exports){
'use strict';

var Action = require('../game/action');

function Entity() {
}

module.exports = Entity;

},{"../game/action":8}],5:[function(require,module,exports){
'use strict';

var Animal = require('../entities/animal');

function Herbivore() {

  //TODO: implement me

}

module.exports = Herbivore;

},{"../entities/animal":2}],6:[function(require,module,exports){
'use strict';

var Entity = require('../entities/entity');

function Plant() {

  //TODO: implement me

}

module.exports = Plant;

},{"../entities/entity":4}],7:[function(require,module,exports){
'use strict';

var Entity = require('../entities/entity');

function Wall() {
  Entity.call(this);
  //var self = new Entity();
  //delete self.act;
  //return self;
}
Wall.prototype = Object.create(Entity.prototype);
Wall.prototype.act = null;

module.exports = Wall;

},{"../entities/entity":4}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"../game/utility":12}],10:[function(require,module,exports){
'use strict';

var Vector = require('../game/vector');

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
    vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};
Grid.prototype.forEach = function(callbackFunc, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var entity = this.space[x + y * this.width];
      if (entity !== null) {
        callbackFunc.call(context, entity, new Vector(x, y));
      }
    }
  }
};

module.exports = Grid;

},{"../game/vector":13}],11:[function(require,module,exports){
'use strict';

function Legend(){
  this.legendMap = {};
}

Legend.prototype.set = function (character, entity){
  this.legendMap[character] = entity;
};

Legend.prototype.get = function(character){
  return this.legendMap[character];
};

module.exports = Legend;

},{}],12:[function(require,module,exports){
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

},{"../game/vector":13}],13:[function(require,module,exports){
'use strict';

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

module.exports = Vector;

},{}],14:[function(require,module,exports){
'use strict';

var Utility = require('../game/utility');

function View(world, vector) {
  this.world = world;
  this.vector = vector;
}
View.prototype.look = function(direction) {
  var target = this.vector.plus(Utility.directions[direction]);
  if (this.world.grid.isInside(target)) {
    return Utility.charFromEntity(this.world.grid.get(target));
  } else {
    return "#";
  }
};
View.prototype.findAll = function(character) {
  var found = [];
  for (var direction in Utility.directions) {
    if (this.look(direction) === character) {
      found.push(direction);
    }
  }

  return found;
};
View.prototype.find = function(character) {
  var found = this.findAll(character);
  if (found.length === 0) {
    return null;
  }
  return Utility.randomElement(found);
};


module.exports = View;

},{"../game/utility":12}],15:[function(require,module,exports){
'use strict';

function WorldAnimator(world, tickRate) {
  this.world = world;
  this.tickRate = tickRate || 333;
}

WorldAnimator.prototype.run = function(){
  var self = this;
  self.inverval = setInterval(function() {
    self.tick();
  },self.tickRate);
};

WorldAnimator.prototype.tick = function() {
  this.world.turn();

  //term codes
  var clearTerm = '\x1B[2J';
  var textColor = '';//'\x1b[35m';
  var bgColor =  '';//'\x1b[46m';
  var clearColor = '\x1b[0m';

  //clear term, set fg and bg color, print world, clear color options.
  // console.log(clearTerm + textColor + bgColor + this.world.toString() + clearColor);
  document.querySelectorAll('#canvas')[0].innerHTML ='<pre>' + this.world.toString() + '</pre>';
};

WorldAnimator.prototype.stop = function() {
  clearInterval(this.interval);
};

module.exports = WorldAnimator;

},{}],16:[function(require,module,exports){
'use strict';

//TODO add your entities to the map as you implement them
var map =
 ["############################",
  "#####                 ######",
  "##                        ##",
  "#    ##                   ##",
  "#                 ##       #",
  "#                 ##       #",
  "#                 ##       #",
  "#           #              #",
  "#           #              #",
  "#           ##             #",
  "##         ###           ###",
  "############################"
];

module.exports = map;

},{}],17:[function(require,module,exports){
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

},{"../game/actionrunner":9,"../game/view":14,"../worlds/world":18}],18:[function(require,module,exports){
'use strict';

var Grid = require('../game/grid'),
  Vector = require('../game/vector'),
  View = require('../game/view'),
  Utility = require('../game/utility');

function World(map, legend) {

  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++) {
      grid.set(new Vector(x, y), Utility.entityFromChar(legend, line[x]));
    }
  });
}
World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var entity = this.grid.get(new Vector(x, y));
      output += Utility.charFromEntity(entity);
    }
    output += "\n";
  }
  return output;
};
World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(entity, vector) {
    if (entity.act && acted.indexOf(entity) === -1) {
      acted.push(entity);
      this.letAct(entity, vector);
    }
  }, this);
};
World.prototype.letAct = function(entity, vector) {
  var action = entity.act(new View(this, vector));
  if (action && action.type === "move") {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) === null) {
      this.grid.set(vector, null);
      this.grid.set(dest, entity);
    }
  }
};
World.prototype.checkDestination = function(action, vector) {
  if (Utility.directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(Utility.directions[action.direction]);
    if (this.grid.isInside(dest)) {
      return dest;
    }
  }
};

module.exports = World;

},{"../game/grid":10,"../game/utility":12,"../game/vector":13,"../game/view":14}]},{},[1]);
