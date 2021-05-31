//this function will take in two parameters
//callback function should only be provided with one value: the item in the array 

const takeUntil = function(array, callback){
  const result = [];
  for(let elem of array){
    if(!callback(elem)){
      result.push(elem);
    } else {
      break;
    }
  }

  return result;
  };



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);