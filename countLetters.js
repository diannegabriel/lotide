const assertEqual = function(actual, expected) {

  if (actual == expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 

const countLetters = function(string) {
  let str = string.replace(/ /g, '')
  let strCount = {};
  for (let letter of str) {
    if (strCount[letter]) {
      strCount[letter]++;
    } else {
      strCount[letter] = 1;
    }
  }
  console.log(strCount);
  return strCount;
};

assertEqual(countLetters("lighthouse in the house")['l'], [1])
assertEqual(countLetters("abc")['a'], 1)