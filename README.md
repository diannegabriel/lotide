# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @diannegabriel/lotide`

**Require it:**

`const _ = require('@diannegabriel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Confirms if two arrays are equal
* `assertEqual`: Confirms if two elements are equal
* `assertObjectsEqual`: Confirms if two objects are equal
* `countLetters`: When given a string, this function returns an object with detailed counts of each letter
* `countOnly`: When given an array of names and an object, this function returns an object where it summarizes which names should appear and totals how many times that name appears in the array
* `eqArrays`: Tests if two arrays are equal, returns a boolean
* `eqObjects`: Tests if two objects are equal, returns a boolean
* `findKey`: When given a set of objects, this function returns a key when the condition is met
* `findKeyByValue`: When given a set of objects and a value, this function returns a key where the value is found
* `flatten`: This function gets rid of nested arrays and returns all the elements in one array
* `head`: When given an array, this function returns the first index of the array
* `index`: List of all function exports
* `letterPositions`: When given a string, this function returns the index of all appearing letters
* `map`: When given an array and a condition, this function iterates through the array and returns the result of the condition for each element
* `middle`: When given an array, this function returns the element/s in the middle
* `tail`: When given an array, this function returns the same element but without the first element
* `takeUntil`: When given an array and a condition, this function will return the elements in an array until it meets its condition
* `without`: When given an array of strings and a word, this function returns an array with all the elements except for the given word