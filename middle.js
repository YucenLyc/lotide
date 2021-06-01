const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

function middle(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let middle = [array[(array.length) / 2 - 1], array[(array.length / 2)]];
    return middle;
  } else {
    let middleOdd = [Math.floor((array.length) / 2) + 1];
    return middleOdd;
  }

}
module.exports = middle;

