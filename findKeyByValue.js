const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 

const findKeyByValue = function (obj, show) { 
  // let showList = Object.entries(obj)
  // let entry = {};
  // let entryArr = []
  
  let genreList = Object.keys(obj)
  let genre;

  for (let i = 0; i < genreList.length; i++) {
    if (show === obj[genreList[i]]) {

      // console.log(`Is ${obj[genreList[i]]} a ${genreList[i]}?`)
      // console.log(genreList[i])

      // genre = genreList[i];
      // console.log(genre)

      // entry[genreList[i]] = obj[genreList[i]];
      // console.log(entry)

      // console.log(entry)
      // entryArr.push(showList[i])
      // console.log(entryArr)
      // console.log(Object.entries(entry))
      
      // console.log(obj[entry]+' \n');
      // console.log(obj[genreList[i]])
      // console.log(genreList[i])
      // console.log(obj[genreList])
      genre = genreList[i]
    }

  }
  // console.log(genre)
  return genre
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);