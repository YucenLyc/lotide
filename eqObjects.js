const assertEqual = require('./assertEqual');

const eqObjects = function (obj1, obj2) {

  let output = false;
  const value1 = Object.keys(obj1);
  const value2 = Object.keys(obj2);

  if (value1.length != value2.length) {
    return false;
  }

  for (const key of value1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  };
  return true;
}

module.exports = eqObjects; 