const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


function eqArrays (array1,array2) {
  let result = false;

  if (array1.length != array2.length){
    return false;
  }
  for(let i = 0; i < array1.length; i++){

    if(array1[i] instanceof Array && array2[i] instanceof Array){
      if(!array1[1].equals(array2[i]))
      return false;
    } 
    else if (array1[i] != array2[i]){
      return false;
    }
  }
  return true;    
}

//assertEqual(eqArrays(["1","2", "3", "4"], ["1","3", "3", "4"]), true);


//** */ take in two arrays and console.log an appropriate message to the console

function assertArrayEqual(arr1, arr2){
  if (eqArrays (arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArrayEqual([1,2,3,"hello"], [1,2,3,"hi"]);
assertArrayEqual([2,3,3,"sunny"], [2,3,3,"sunny"]);