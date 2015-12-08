'use strict';

var DomWorldAnimator = require('./game/worldanimator'),
  Legend = require('./game/legend'),
  Cell = require('./entities/cell'),
  Empty = require('./entities/empty'),
  ConwayWorld = require('./worlds/conwayworld'),
  conwayMap = require('./maps/conwaymap');

var myLegend = new Legend();
myLegend.set('\u2588', Cell);
myLegend.set(' ', Empty);

var conways = new ConwayWorld(conwayMap, myLegend);

//Megaman EXECUTE! \o/
// new WorldAnimator(conways, 25).run();
new DomWorldAnimator(conways, 50).run();
