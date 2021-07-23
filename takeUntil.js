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

const assertArraysEqual = function(array1, array2) {
  // I assert that these two arrays are Equal (array1, array2)
    if (eqArrays(array1, array2)) {
      console.log(`✅ Assertion Passed! ${array1} === ${array2}`)
    } else {
      console.log(`🛑 Assertion Failed. ${array1} !== ${array2}`)
    }
  };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])
