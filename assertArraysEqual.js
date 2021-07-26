const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(array1, array2) {
// I assert that these two arrays are Equal (array1, array2)
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed! ${array1} === ${array2}`)
  } else {
    console.log(`🛑 Assertion Failed. ${array1} !== ${array2}`)
  }
};

module.exports = assertArraysEqual;