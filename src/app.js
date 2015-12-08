'use strict';

var WorldAnimator = require('./game/worldanimator'),
  Legend = require('./game/legend'),
  Cell = require('./entities/cell'),
  Empty = require('./entities/empty'),
  ConwayWorld = require('./worlds/conwayworld'),
  conwayMap = require('./maps/conwaymap');

var myLegend = new Legend();
myLegend.set('#', Cell);
myLegend.set(' ', Empty);

var conways = new ConwayWorld(conwayMap, myLegend);

//Megaman EXECUTE! \o/
new WorldAnimator(conways).run();
//
