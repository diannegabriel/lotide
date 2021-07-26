const assertEqual = require('./assertEqual');

// const assertEqual = function(result, expected) {

//   if (result === expected) {
//     console.log(`✅ Assertion Passed: ${result} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${result} !== ${expected}`);
//   }

// };

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

module.exports = tail;