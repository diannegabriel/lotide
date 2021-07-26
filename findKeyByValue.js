const assertEqual = require('./assertEqual');

const findKeyByValue = function (obj, show) { 
  // let showList = Object.entries(obj)
  // let entry = {};
  // let entryArr = []
  
  let genreList = Object.keys(obj)
  let genre;

  for (let i = 0; i < genreList.length; i++) {
    if (show === obj[genreList[i]]) {
      genre = genreList[i]
    }

  }
  return genre
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;