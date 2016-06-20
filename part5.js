// A function feedCat takes any kind of food as a String argument and returns
// 'yum' for everything you feed them. However if you try to feed the cat
// 'chocolate', the function will throw an error.

// Write a tests for this behavior, to be sure no kittens are harmed.

// The function will be provided through process.argv[2].

var test = require('tape'),
  feedCat = require(process.argv[2]);


test('feeding the cat', function (t) {
  t.plan(2)
  t.equal(feedCat('food'), 'yum')
  t.throws(feedCat.bind(null, 'chocolate'))
})