const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const findKey = function (obj, callback) {
  let objKey = Object.keys(obj);
  for (let i = 0; i < objKey.length; i++) {
    if(callback(obj[objKey[i]])) {
      return objKey[i];
    }
  }
  return undefined;
};

module.exports = findKey;