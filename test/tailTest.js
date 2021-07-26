const chai = require('chai');
const assert = chai.assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail');

// describe("#tail", function() {

//   it("returns 2 and 3 for [1, 2, 3]", function() {

//     assert.equal(tail([1, 2, 3,]), [2, 3])

//   });

// });

const words = ["Yo Yo", "Lighthouse", "Labs"];
const array = [5,6,7]

// const tailTest = tail(array)
// // assertEqual(tailTest.length, 3);
// console.log(tailTest)

const tailTest = tail(words)
// assertEqual(tailTest.length, 3);
console.log(tailTest)