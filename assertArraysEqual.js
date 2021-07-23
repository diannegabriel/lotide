const eqArrays = function(array1, array2) {
  // compare two arrays together, return true if both arrays match, otherwise return false

  // compare each element of two arrays, because arrays are structural type

  // to compare the arrays, must compare the value at the same index

  // to access all of the indexes, loop over the values
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

const assertArraysEqual = function(array1, array2) {
// I assert that these two arrays are Equal (array1, array2)
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed!`)
  } else {
    console.log(`🛑 Assertion Failed.`)
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false