const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// This function will take in two parameters:

// 1. The array to work with (array)
// 2. The callback (callback)

const takeUntil = function(array, callback) {
  
  // The function will return a slice of the array with elements taken from the beginning
  
  for (item of array){
  let index;

    if (callback(item)) {

      index = array.indexOf(item)
      return array.slice(0, index)
    }
  }
  // To keep things simple, the callback should only be provided one value: The item in the array
} 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])

module.exports = takeUntil;