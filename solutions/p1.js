// Problem 1: Solution with For Loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

const total = (a,b) => {
  return a+b;
}

var sum = numbers.reduce(total);

console.log("sum = " + sum);      // should print "sum = 45"
