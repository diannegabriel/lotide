const chai = require('chai'); // 1
const assert = chai.assert;

const head = require('../head');

// describe("head true", function() { // 3

//   it(" return true if first element is equal to expected", function() {



//   });

// });

head([5,6,7]), 5;
head(["Hello", "Lighthouse", "Labs"]), "Hello";