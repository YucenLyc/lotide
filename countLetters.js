const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetter function: 
// take in a sentence (as a string) and return a count of each of the letters in that sentence 

function countLetter(sentence) {
  const count = {};

  for (let letter of sentence) {
    if (letter != " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }

  return count;
}

console.log(countLetter("command"));