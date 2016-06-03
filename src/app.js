'use strict';

var ActionRunner = require('./game/actionrunner');
var WorldAnimator = require('./game/worldanimator');
// var DomWorldAnimator = require('./game/domworldanimator');
// var CanvasWorldAnimator = require('./game/canvasworldanimator');
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
new CanvasWorldAnimator(myWorld).run();
