// Problem 2: Add 2 integer arrays (of equal length)
// function sumOfArrays(a, b) {
//   var result = [];
//   for (var i = 0; i < a.length; i++) {
//     result.push(a[i] + b[i]);
//   }
//   return result;
// }

var a = [1, 2, 3];
var b = [4, 6, 8];

let sumOfArrays = (a,b) => {
  let sum = a.map((num) => {
    return num + b[a.indexOf(num)];
  });
  return sum;
}

console.log("sum of arrays = " + sumOfArrays(a, b));
