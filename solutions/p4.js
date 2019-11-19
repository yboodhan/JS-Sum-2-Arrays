var board = [ [ 'X', 'O', 'X' ],
              [ 'O', 'X', 'O' ],
              [ 'O', 'X', 'O' ]
            ];

// for (var row = 0; row < 3; row++) {
//   console.log(board[row][0] + ' ' + board[row][1] + ' ' + board[row][2]);
// }

var str = '';

board.forEach((row) => {
  row.forEach((cell) => {
    str = str+cell+' ';
  })
  console.log(str);
  str = '';
})