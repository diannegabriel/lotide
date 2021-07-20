const eqArrays = function(array1, array2) {
  return Array.isArray(array1) && 
    Array.isArray(array2) &&
    array1.length === array2.length &&
    array1.every((val, index) => val === array2[index]);
};

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

const assertArraysEqual = function(array1, array2) {
  (eqArrays(array1, array2) === true) ? 
  console.log(`✅ Assertion Passed! ${array1} === ${array2}`)
  : console.log(`🛑 Assertion Failed. ${array1} !== ${array2}`)
}; 



const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);