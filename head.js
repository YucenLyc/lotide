const assertEqual = require('./assertEqual');

// return the first element of an array 
//an empty array should yield undefined as its head 

function head(array){
  if (array.length < 1){
    console.log("undefined");
  } else {
    return array[0];
  }
  
};
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;