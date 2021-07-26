const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {

  let names = Object.keys(itemsToCount)
  let total = {}
  let k = 0;

  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < allItems.length; j++) {
      if (names[i] === allItems[j] && itemsToCount[names[i]] === true) {
        total[names[i]] = ++k;
        console.log(total)
        console.log()
        break
      }
    }
  }
  console.log(total)
  return total
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { 
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;