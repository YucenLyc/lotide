const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual'); 
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  eqArrays,
  eqObjects, 
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};