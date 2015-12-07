'use strict';

var ActionRunner = require('./game/actionrunner'),
  WorldAnimator = require('./game/worldanimator'),
  Grid = require('./game/grid'),
  Utility = require('./game/utility'),
  Vector = require('./game/vector'),
  View = require('./game/view'),
  Legend = require('./game/legend'),
  Entity = require('./entities/entity'),
  Wall = require('./entities/wall'),
  Animal = require('./entities/animal'),
  Herbivore = require('./entities/herbivore'),
  Carnivore = require('./entities/carnivore'),
  Plant = require('./entities/plant'),
  LifelikeWorld = require('./worlds/lifelikeworld'),
  World = require('./worlds/world'),
  defaultMap = require('./maps/defaultmap');


//NOTE: Update the legend with your entities as you implement them
var myLegend = new Legend();
myLegend.set('#', Wall);
myLegend.set('O', Entity);


//create a LifelikeWorld with the defaultMap and the provided legend.
//NOTE: remember to add entities as you implement them to defaultMap
//NOTE: there are other maps! 
var myWorld = new LifelikeWorld(defaultMap, myLegend);


//Megaman EXECUTE! \o/
new WorldAnimator(myWorld).run();
