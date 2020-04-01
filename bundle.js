"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrow = arr.map(function (i) {
  return i * 2;
});
var reduce = arr.reduce(function (p, n) {
  return p + n;
});
var reduce2 = arr.reduce(function (p, n) {
  return n - p;
});
console.log(arrow);
console.log(reduce);
console.log(reduce2);
console.log('arr.reduce((p, n) => n - p) => ((((((((2 - 1) - 3) - 4) - 5) - 6) - 7) - 8) - 9)');
