

// var emotify = require('./emotify.js')


// console.log(emotify('just testing'))



// Write a passing assertion for the function isCoolNumber, that will assure that
// it returns true when passing 42 in it.

// The path of the module exporting the function will be provided through
// process.argv[2].

var isCoolNumber = require(process.argv[2]),
  assert = require('assert');

// assert(isCoolNumber(42) === true,'isCoolNumber(42) should be True');

// alternatively:

// assert.ok(isCoolNumber(42), 'isCoolNumber(42) should be True');

// // or

// assert.deepEqual(isCoolNumber(42), true, 'isCoolNumber(42) should be True');

// or even:

assert(isCoolNumber(42),'isCoolNumber(42) should be True');



