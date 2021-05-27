const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



// this function takes in an object and a value;
//it should scan the object and return the first key which contains the given value, if no key with that given value, it should return undefined 

const findKeyByValue = function (obj, value) {
  const objKey = Object.keys(obj);
  for (const key of objKey) {
    if (obj[key] === value) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
