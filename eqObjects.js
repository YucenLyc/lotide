const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//eqObjects: take in two objects and returns true/false based on a perfect match 
//2 objects are equal: - have same number of keys 
//- the value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function (obj1,obj2){
  
  let output = false;
  const value1 = Object.keys(obj1);
  const value2 = Object.keys(obj2);

  if(value1.length != value2.length){
    return false;
  }

  for (const key of value1) {
    if(obj1[key] !=  )
  }

}

const ab = { a: "1", b: "2" }; 
const ba = { b: "2", a: "1" };
const c = {a: "1", b: "2", c:"2"};
eqObjects(c, ba); // => true

//const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false