// Problem 3: While Loop Solution
// function sumOfArrays(a, b) {
//   var result = [];
//   while (a.length && b.length) {
//     result.push(a.shift() + b.shift());
//   }
//   return result.concat(a, b);
// }
// var a = [1, 2, 3];
// var b = [2, 3, 4, 5, 6];

// console.log("sum of arrays = ", sumOfArrays(a, b));

// Problem 3: For Loop Solution
// function sumOfArrays(a, b) {
//   var result = [];
//   var maxLength = a.length > b.length ? a.length : b.length;
//   for (var i = 0; i<maxLength; i++) {
//     var sum = (a[i] || 0) + (b[i] || 0);
//     result.push(sum);
//   }
//   return result;
// }

// var a = [1, 2, 3];
// var b = [2, 3, 4, 5, 6];

// console.log("sum of arrays =", sumOfArrays(a, b));


var a = [1, 2, 3];
var b = [2, 3, 4, 5, 6];

let sumOfArrays = (a,b) => {

  var longest = a;
  var smallest = b;

  if (a.length < b.length) {
    longest = b;
    smallest = a;
  }

  let sum = longest.map((num) => {
    return num + (smallest[longest.indexOf(num)] || 0);
  });

  return sum;
}

console.log("sum of arrays = ", sumOfArrays(a, b));