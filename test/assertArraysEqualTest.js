const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3,"hello"], [1,2,3,"hi"]);
assertArraysEqual([2,3,3,"sunny"], [2,3,3,"sunny"]);