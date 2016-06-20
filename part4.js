// Write a test for a function repeatCallback(n, cb), that calls the callback
// cb exactly n times.

// As before the functions location will be provided through process.argv[2].

var test = require('tape'),
  repeatCallback = require(process.argv[2]);

test('repeatCallback', function (t) {
 t.plan(3)
 repeatCallback(3, function () {
   t.pass('callback called')
 })
})