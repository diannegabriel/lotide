// const chai = require('chai'); // 1
// const assert = chai.assert;

const assertEqual = require('../assertEqual');

/*
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 
*/

// pink = true
// describe("assertEqual", function() {

//   it("return true when actual is equals to expected", function() {

    (assertEqual("Lighthouse Labs", "Bootcamp"));
    (assertEqual(1, 1));

    // assert.isFalse();

//   });

// });

