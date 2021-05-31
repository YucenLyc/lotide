const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//MIDDLE: take in an array and return the middle-most element(s) of the array 
//for arrays with no middle, return an empty array 
//array with odd num of elements, the single middle element should be returned 
//array with an even number of elements, the two middle elements should be returned 

function middle (array){
  //if odd num array, take the length of the array divide it by 2 
  let result;
  if(array.length % 2 !== 0){
    
    let x = Math.round(array.length / 2);
    x = x - 1;
    console.log(array[x]);

  } else {

    let x = Math.round(array.length / 2);
    x = x - 1;
    console.log((array[x] + "," + array[x+1]));
  }
  
}
module.exports = middle;

