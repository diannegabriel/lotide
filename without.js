const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemToRemove.length; j++) {
      source[i] === itemToRemove[j] ? newArray
      : newArray.push(source[i])
    } 
  }
  return newArray
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;