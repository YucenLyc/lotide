//this function will take in two parameters
//callback function should only be provided with one value: the item in the array 

const takeUntil = function (array, callback) {
  const result = [];
  for (let elem of array) {
    if (!callback(elem)) {
      result.push(elem);
    } else {
      break;
    }
  }
  return result;
};


module.exports = takeUntil;