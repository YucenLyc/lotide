// return all the indices (zero-based positions) in the string where each character is found 

const letterPositions = function (sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }

  return result;
}
//console.log(letterPositions("hello world"))