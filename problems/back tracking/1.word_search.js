/*  Problem:  Word Search

    Given a 2D board and a word, find if the word exists in the grid.
    The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.
    The same letter cell may not be used more than once.

    Example:

    board =
    [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ]

    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.

*/

var wordSearch = function(board, word) {
  if (!word || !board.length || !board[0].length) {
    return false;
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (word[0] === board[i][j] && hasCharInAdjacent(i, j, 0, board, word)) {
        return true;
      }
    }
  }

  return false;
};

function hasCharInAdjacent(i, j, index, board, word) {
  if (word.length === index) {
    // when word.length & index are same we found the word in adjacent of board
    return true;
  }

  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
    return false;
  }

  if (board[i][j] !== word[index]) {
    return false;
  }

  var temp = board[i][j];
  board[i][j] = '*'; // Mark this char as visited, later we can restore it

  // Now lets move horizontally or vertically to find the word in adjacent

  // Move down
  if (hasCharInAdjacent(i + 1, j, index + 1, board, word)) {
    return true;
  }

  // Move up
  if (hasCharInAdjacent(i - 1, j, index + 1, board, word)) {
    return true;
  }

  // Move right
  if (hasCharInAdjacent(i, j + 1, index + 1, board, word)) {
    return true;
  }

  // Move left
  if (hasCharInAdjacent(i, j - 1, index + 1, board, word)) {
    return true;
  }

  board[i][j] = temp; // Restoring the char
}

wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'); // True
wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'); // True
wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'); // False

// Time Complexity: O(N * M * K), N, M are 2D board length & K is word.length
