
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function (array, itemsToRemove) {
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (array[i] === itemsToRemove[x]) {
        array.splice(i, 1);
      }
    }
  }
  console.log(array);
}

module.exports = without;

// without(["hello", "world", "lighthouse"], ["lighthouse"]);