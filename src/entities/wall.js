'use strict';

var Entity = require('../entities/entity');

function Wall() {
  Entity.call(this);
}

Wall.prototype.act = null;

module.exports = Wall;
