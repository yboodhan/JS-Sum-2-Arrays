# Loops and Functions Practice

#### Problem 1 - Sum the elements of an array

Write a program to sum the elements of an array (assume all of the elements are numbers):

Starter:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;

// TODO: add a for loop here to add up all of the numbers into the variable sum

console.log('sum = ' + sum);
```

Solutions are below:

* [Classic For Loop Solution](./solutions/p1a.js)
* [Solution Using Reduce](./solutions/p1b.js)

> Wow, the second solution is only three lines of code and we don't need a loop at all!!!

#### Problem 2 - Add the Elements of Two Arrays Together

Write a function to add all of the elements of two arrays together. For instance, given the arrays:

```javascript
var x = [1, 2, 3];
var y = [4, 5, 6];
```

The sum of the arrays is [5, 7, 9].

Starter:

```javascript
// add 2 integer arrays (add elements)
function sumOfArrays(a, b) {
  var result = [];
  // TODO: write a for loop that adds the elements of a and b.
  //       and pushes each sum into the result array.
  return result;
}

var a = [1, 2, 3];
var b = [4, 6, 8];
console.log("sum of arrays = " + sumOfArrays(a, b));
```

You can view the solution [here](./solutions/p2.js).

#### Problem 3 - Differing Length Arrays

Bonus (work in pairs): Assume that the arrays may be of different lengths, and assume zero values for the shorter array:

You can view the solution [here](./solutions/p3.js)

#### Problem 4 - Multi-Dimensional Arrays

Write a nested loop (that's one loop inside of another loop!) to print out each element of a tic-tac-toe board. Notice this is a multi-dimensional array. That means when you access it via a normal loop, the elements inside this array are themselves also arrays.

```javascript
var board = [ [ 'X', 'O', 'X' ],
              [ 'O', 'X', 'O' ],
              [ 'O', 'X', 'O' ]
            ];
            
// TODO: Write a nested loop that prints out the tic-tac-toe board above
```

> HINT: You can print a newline in JavaScript by writing a `console.log()` with no arguments.

#### Expected Output

```
XOX
OXO
OXO
```

You can view the solutions [here](./solutions/p4.js)
