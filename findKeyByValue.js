const assertEqual = require('./assertEqual');

const findKeyByValue = function (obj, value) {
  const objKey = Object.keys(obj);
  console.log(Object.keys(obj))
  for (const key of objKey) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// this function takes in an object and a value;
//it should scan the object and return the first key which contains the given value, if no key with that given value, it should return undefined 