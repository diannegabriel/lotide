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

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false