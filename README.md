# Loops and Functions Practice

### Problem 1 - Sum the elements of an array

Write a program to sum the elements of an array (assume all of the elements are numbers):

#### Starter Code

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;

// TODO: add a for loop here to add up all of the numbers into the variable sum

console.log('sum = ' + sum);
```

#### Solution Code

* [Classic For Loop Solution](./solutions/p1.js)

### Problem 2 - Add the Elements of Two Arrays Together

Write a function to add all of the elements of two arrays together. For instance, given the arrays:

```javascript
var x = [1, 2, 3];
var y = [4, 5, 6];
```

The sum of the arrays is [5, 7, 9].

#### Starter Code

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

#### Solution Code

You can view the solution [here](./solutions/p2.js).

### Problem 3 - Differing Length Arrays

Bonus (work in pairs): Assume that the arrays may be of different lengths, and assume zero values for the shorter array.

#### Expected Output

Given the code:

```javascript
var a = [1, 2, 3];
var b = [2, 3, 4, 5, 6];

console.log("sum of arrays =", sumOfArrays(a, b));
```

We would expect the output:

```
sum of arrays = [ 3, 5, 7, 5, 6 ]
```

#### Solution Code

You can view the solution [here](./solutions/p3.js)

### Problem 4 - Multi-Dimensional Arrays

Check out this multi-dimensional array (that's an array that holds other arrays inside of it!) Your job is to print out each element of a tic-tac-toe board. You'll only need one loop - but keep in mind that you'll need multiple indexes! For example in the `board` below, the value of `board[1][2]` means the second array's third element (remember to start counting from 0!)

```javascript
var board = [ [ 'X', 'O', 'X' ],
              [ 'O', 'X', 'O' ],
              [ 'O', 'X', 'O' ]
            ];
            
// TODO: Write a loop and print out the tic-tac-toe board above
```

> HINT: You may want to add a space between each letter on your board

#### Expected Output

```
X O X
O X O
O X O
```

#### Solution Code

You can view the solutions [here](./solutions/p4.js)

### BONUS PROBLEM!

Try to solve problem 1 using the [reduce iterator](https://www.w3schools.com/jsref/jsref_reduce.asp). Reduce is a built-in array method (just like `sort` or `push`) that **reduces** an array into a single value. In our case, we want to take a whole array of numbers and reduce it to a single value - a sum of those numbers.

An iterator takes a function as an **argument** and performs that function on each individual element in an array. Thus, you can kind of think of it as doing a "loop" behind the scenes. 

#### Starter Code

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = ??? // Reduce function goes here instead of the ???

console.log('sum = ' + sum);
```

#### Solution Code

* [Solution Using Reduce](./solutions/p1-bonus.js)

> Wow, this solution is only one line of code (not counting variable declaration and console.logs) and we don't need a loop at all!!!
