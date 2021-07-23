// This map function will take in two arguments:

// 1. An array to map
// 2. A callback function

// The map function will return a new array based on the results of the callback function.
const eqArrays = function(array1, array2) {
  if (array2.length !== array1.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    // return false the soonest the loop finds a mismatch 
    if (array1[i] !== array2[i]) {
      return false
    } 
  }
  return true
  // return true when everything matches until the loop ends

};

const words = ["ground", "control", "to", "major", "tom"];
const creams = ["mango", "chocolate", "vanilla", "strawberry", "blueberry"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const assertArraysEqual = function(array1, array2) {
  // I assert that these two arrays are Equal (array1, array2)
    if (eqArrays(array1, array2)) {
      console.log(`✅ Assertion Passed! ${array1} === ${array2}`)
    } else {
      console.log(`🛑 Assertion Failed. ${array1} !== ${array2}`)
    }
  };

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const results2 = map(creams, cream => cream.length);
console.log(results2);

assertArraysEqual(results2, [ 5, 9, 7, 10, 9 ])