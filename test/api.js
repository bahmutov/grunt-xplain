require('lazy-ass');

/** Adds two numbers
@method add */
function add(a, b) { return a + b; }

/** @sample add */
it('adds numbers', function () {
  lazyAss(add(2, 3) === 5);
  lazyAss(add(2, -3) === -1);
});
