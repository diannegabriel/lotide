const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// This map function will take in two arguments:

// 1. An array to map
// 2. A callback function

const words = ["ground", "control", "to", "major", "tom"];
const creams = ["mango", "chocolate", "vanilla", "strawberry", "blueberry"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const results2 = map(creams, cream => cream.length);
console.log(results2);

assertArraysEqual(results2, [ 5, 9, 7, 10, 9 ])

module.exports = map;