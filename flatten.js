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

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]