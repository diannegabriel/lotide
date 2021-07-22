const eqArrays = function(array1, array2) {
  if (array2.length !== array1.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    // return false the soonest the loop finds a mismatch 
    if (array1[i] !== array2[i]) {
      return false
    } 
  }
  return true
  // return true when everything matches until the loop ends

};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}; 

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let obj1Keys = Object.keys(object1)
  let obj2Keys = Object.keys(object2)

  // console.log(obj1Keys)
  // console.log(`Object 1 keys: ${obj1Keys} \t Object 2 keys: ${obj2Keys}`)

  // let i = 0;
  // let j = 0;
  // let key1 = i;
  // let key2 = j;

  // console.log(obj1Keys[key1]+" "+object1[obj1Keys[key1]]) //a 1

  // console.log(obj2Keys[key2]+" "+object2[obj2Keys[key2]]) //b 2
  // console.log()

  
  // console.log(obj1Keys[key1] === obj2Keys[key2]) //key1 = 0 key2 = 0; false a !== b
  // key2 = 1;
  // console.log(obj1Keys[key1] === obj2Keys[key2]) //key1 = 0 key2 = 1; true a === a

  // console.log()
  // console.log(object1[obj1Keys[key1]] === object2[obj2Keys[key2]]) //key1 = 0 key2 = 1; true 1 === 1
  // key2 = 0;
  // console.log(object1[obj1Keys[key1]] === object2[obj2Keys[key2]]) //key1 = 0 key2 = 0; false 1 !== 2

  // key2 = 1;
  // console.log()

//Counter for true/false
let match = 0;

if (obj2Keys.length !== obj1Keys.length) {
  // console.log("Nothing to compare")
  return false
}

for (let i = 0; i < obj1Keys.length; i++) {
  let key1 = i;
  for (let j = 0; j < obj2Keys.length; j++) {
    let key2 = j

    //Iterates through the array of KEYS and prints which one does not match
    if (obj1Keys[key1] !== obj2Keys[key2]) {
      //console.log(`Does not match ${obj1Keys[key1]} !== ${obj2Keys[key2]}`)

    } 

    //Iterates through the array of KEYS and prints which KEYS match. Moves on to a nested if/else to see if VALUES of the matched keys match.
    if (obj1Keys[key1] === obj2Keys[key2]) {
      console.log(`It matches! ${obj1Keys[key1]} === ${obj2Keys[key2]}`)
      match++;

      //Iterates through the VALUES and prints the VALUES that match
      if (object1[obj1Keys[key1]] === object2[obj2Keys[key2]]) {
        console.log(`It matches! ${object1[obj1Keys[key1]]} === ${object2[obj2Keys[key2]]}`)

        match++;

      } else if (
        Array.isArray(object1[obj1Keys[key1]]) && Array.isArray(object2[obj2Keys[key2]]) && eqArrays(object1[obj1Keys[key1]], object2[obj2Keys[key2]])) {

        console.log(`It matches! ${object1[obj1Keys[key1]]} === ${object2[obj2Keys[key2]]}`)
        match++

      } else {
        // console.log(`Does not match ${object1[obj1Keys[key1]]} !== ${object2[obj2Keys[key2]]}`)
        // console.log(`Doesn't match! ${object1[obj1Keys[key1]]} !== ${object2[obj2Keys[key2]]}`)
      }
    }
  }
}

/* Since the code is trying to find objects that matches, it makes sense that TRUE will be returned if the total amount of keys and values are equal to match.
If the total number of KEYS and VALUES are 6 (3 keys plus 3 values), then MATCH should be also 6 to be true and to confirm it is matching.
If the total number of MATCHES are less than the total of KEYS and VALUES, it will return FALSE */
if (match !== (obj1Keys.length + obj2Keys.length)) {
  console.log(`${match}/${(obj1Keys.length + obj2Keys.length)}`)
  return false
} else {
  console.log(`${match}/${(obj1Keys.length + obj2Keys.length)}`)
  return true
}
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed! ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑 Assertion Failed. ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // => true

const bc = { b: "1", c: "2" };
const cb = { d: "2", d: "2" };
eqObjects(bc, cb); // => false
assertEqual(eqObjects(bc, cb), false); // => false

const xyz = { x: "9", y: "8", z: "7" };
const zyx = { z: "7", y: "8", x: "9" };
eqObjects(xyz, zyx); // => true
assertEqual(eqObjects(xyz, zyx), true); // => true

const fg = { f: "10", g: "2" };
const gf = { g: "2", f: "1" };
eqObjects(fg, gf); // => false
assertEqual(eqObjects(fg, gf), false); // => false

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);


assertObjectsEqual({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]});