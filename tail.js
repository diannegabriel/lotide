const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

module.exports = tail;