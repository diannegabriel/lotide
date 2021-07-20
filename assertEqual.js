/*
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 
*/

const assertEqual = function(actual, expected) {
  return actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}`
  : `🛑 Assertion Failed: ${actual} !== ${expected}`
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));