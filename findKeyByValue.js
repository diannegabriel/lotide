const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 

const findKeyByValue = function (obj, show) { 
  let genreList = Object.keys(obj)
  let genre;

  for (let i = 0; i < genreList.length; i++) {
    if (show === obj[genreList[i]]) {
      genre = genreList[i]
    }

  }
  console.log(genre)
  return genre
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);