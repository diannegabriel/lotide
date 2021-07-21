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

const assertArraysEquals = function(array1, array2) {
// I assert that these two arrays are Equal (array1, array2)
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed!`)
  } else {
    console.log(`🛑 Assertion Failed.`)
  }
};

const middle = function(array) {
  let midIndex = Math.floor(array.length/2);
  let middleArray = [];

  if (array.length < 3) {
    return []
  } else if (array.length >= 3 && array.length % 2 === 1) {
    middleArray.push(array[midIndex])
    return middleArray
  } else if (array.length >3 && array.length % 2 === 0) {
    middleArray.push(array[midIndex-1], array[midIndex])
    return middleArray
  }
}

assertArraysEquals(middle([1]), []) // => []
assertArraysEquals(middle([1, 2]), []) // => []

assertArraysEquals(middle([1, 2, 3]), [2]) // => [2]
assertArraysEquals(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEquals(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
assertArraysEquals(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6])