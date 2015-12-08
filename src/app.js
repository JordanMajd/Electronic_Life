'use strict';

var WorldAnimator = require('./game/worldanimator'),
  Legend = require('./game/legend'),
  Cell = require('./entities/cell'),
  Empty = require('./entities/empty'),
  World = require('./worlds/world'),
  defaultMap = require('./maps/defaultmap');

var myLegend = new Legend();
myLegend.set('#', Cell);
myLegend.set(' ', Empty);

var conways = new World(defaultMap, myLegend);

//Megaman EXECUTE! \o/
new WorldAnimator(conways).run();
