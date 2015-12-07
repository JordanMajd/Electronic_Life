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
