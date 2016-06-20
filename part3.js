// Write tests that output TAP, that tests the following properties of a function
// fancify. The function will be provided in process.argv[2].

// 1 fancify(str) returns the str wrapped in ~*~
//   Example: fancify('Hello') returns ~*~Hello~*~
// 2 It takes an optional second argument that converts the string into ALLCAPS
//   Example: fancify('Hello', true) returns ~*~HELLO~*~
// 3 It takes a third optional argument that determines the character in the middle
//   Example: fancify('Hello', false, '!') returns ~!~Hello~!~

var fancify = require(process.argv[2]),
  test = require('tape');

test('fancify testing', function (t) {
  t.deepEqual(fancify('Hello'), '~*~Hello~*~','fancify("Hello") returns ~*~Hello~*~');
  t.deepEqual(fancify('Hello', true), '~*~HELLO~*~','fancify("Hello", true) returns ~*~HELLO~*~');
  t.deepEqual(fancify('Hello', false, '!'), '~!~Hello~!~','fancify("Hello", false, "!") returns ~!~Hello~!~');
 t.end();
});
