const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array1) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      for (let j = 0; j < array1[i].length; j++){
      newArray.push(array1[i][j])
      }
    } else {
      newArray.push(array1[i])
    }
  }
  return newArray
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;