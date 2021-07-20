const assertArraysEqual = function(array1, array2) {
  return Array.isArray(array1) && 
    Array.isArray(array2) &&
    array1.length === array2.length &&
    array1.every((val, index) => val === array2[index]);
};

const assertEqual = function(boolean) {
  boolean === true ? console.log(`✅ Assertion Passed!`)
  : console.log(`🛑 Assertion Failed.`)

};

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false

assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // => false