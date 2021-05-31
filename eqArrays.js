const assertEqual = require('./assertEqual');
//** */ implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match 

function eqArrays (array1,array2) {
  let result = false;

  if (array1.length != array2.length){
    return false;
  };
  for(let i = 0; i < array1.length; i++){

    if(array1[i] instanceof Array && array2[i] instanceof Array){
      if(!array1[1].equals(array2[i]))
      return false;
    } 
    else if (array1[i] != array2[i]){
      return false;
    }
  };
  return true;    
};

module.exports = eqArrays;