const eqArrays = function(array1, array2) {
  return Array.isArray(array1) && 
    Array.isArray(array2) &&
    array1.length === array2.length &&
    array1.every((val, index) => val === array2[index]);
};

const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2) === true) ? 
  console.log(`✅ Assertion Passed! ${array1} === ${array2}`)
  : console.log(`🛑 Assertion Failed. ${array1} !== ${array2}`)
}; 

//return all the indices (zero-based positions) in 
// the string where each character is found
const letterPositions = function(sentence) {
  // For each letter, instead of returning just one number to represent 
  // its number of occurrences, multiple numbers may be needed to represent all 
  // the places in the string that it shows up.

  // Needs to loop
  const results = {};
  let counter = 0;

  for (let char of sentence) {
    if (char !== " "){
      if (!results[char]) {
        results[char] = [counter];
      } else {
        results[char].push(counter);
      }
    }
    counter ++;
  }
 
  console.log(results)
  return results;
  // results should be: { l: [0], i: [1], [11], ... }
};

letterPositions("lighthouse in the house")
letterPositions("abc")

assertArraysEqual(letterPositions("hello").e, [1]);