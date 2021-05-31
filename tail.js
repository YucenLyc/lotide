const assertEqual = require('./assertEqual');

//returning a new array and not modify the original array that is passed in
function tail(array){
  const length = array === null? 0: array.length
  if(! length){
    return []
  }
  const [, ...result] = array
  return result 
};

module.exports = tail;