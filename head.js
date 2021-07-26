const assertEqual = require('./assertEqual');

// const assertEqual = function(head, expected) {

//   if (head === expected) {
//     console.log(`✅ Assertion Passed: ${head} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${head} !== ${expected}`);
//   }

// };

const head = function(array) {
  return array[0];
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;