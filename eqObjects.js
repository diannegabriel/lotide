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

  const obj1Keys = Object.keys(object1)
  const obj2Keys = Object.keys(object2)

  if (obj2Keys.length !== obj1Keys.length) {
    return false;
  }

    for (const i of obj1Keys) {

      if (Array.isArray(object1[i])) {
        let result = eqArrays(object1[i], object2[i]);
          if (result !== true) {
            return false
          }
        console.log(`It matches! ${object1[i]} === ${object2[i]}`)
      } else if (object1[i] !== object2[i]) {
        console.log(`It doesn not match! ${object1[i]} !== ${object2[i]}`)
        return false
      }
    
  }

  return true
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