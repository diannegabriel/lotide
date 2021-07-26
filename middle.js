const middle = function(array) {
  let midIndex = Math.floor(array.length/2);
  let middleArray = [];

  if (array.length < 3) {
    return []
  } else if (array.length >= 3 && array.length % 2 === 1) {
    middleArray.push(array[midIndex])
    return middleArray
  } else if (array.length >3 && array.length % 2 === 0) {
    middleArray.push(array[midIndex-1], array[midIndex])
    return middleArray
  }
}

module.exports = middle;