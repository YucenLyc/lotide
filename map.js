//map function will take in 2 arguments + a callback function 
//this function will return a new array based on the results of the callback function 

const words = ["ground", "control", "to", "major", "tom"];
const sentences = ["Hello world", "Today is a sunny day", "I had too much coffee"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
const results2 = map(sentences, sentence => sentence[0])

console.log(results1);
console.log(results2);

