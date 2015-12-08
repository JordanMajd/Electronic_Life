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
