/* Problem: Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

  A region is captured by flipping all 'O's into 'X's in that surrounded region.

  Example:
    X X X X
    X O O X
    X X O X
    X O X X

  After running your function, the board should be:

    X X X X
    X X X X
    X X X X
    X O X X

Explanation:
  - Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.
  - Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'.
  - Two cells are connected if they are adjacent cells connected horizontally or vertically.


  Idea: Backtracking and start with starting and ending index of row and columns and find if there is any ajdecent O's, if there replace it temp var

*/

var solve = function(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if ((i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1) && board[i][j] == 'O') {
        backTrack(i, j, board);
      }
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }

      if (board[i][j] === '*') {
        board[i][j] = 'O';
      }
    }
  }

  function backTrack(i, j, board) {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return;
    if (board[i][j] == 'O') {
      board[i][j] = '*';
      backTrack(i + 1, j, board);
      backTrack(i - 1, j, board);
      backTrack(i, j + 1, board);
      backTrack(i, j - 1, board);
    }
  }

  return board;
};

solve([['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']]); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Time Complexity: O(N^2), as in worst case we will be visiting all rows and columns
// Space Complexity: O(1)
