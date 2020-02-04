/* Problems: Set Matrix Zeroes

  Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

  Example 1:

    Input:
    [
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ]

    Output:
    [
      [1,0,1],
      [0,0,0],
      [1,0,1]
    ]

  Example 2:

    Input:
    [
      [0,1,2,0],
      [3,4,5,2],
      [1,3,1,5]
    ]

    Output:
    [
      [0,0,0,0],
      [0,4,5,0],
      [0,3,1,0]
    ]

  Follow up:
    - A straight forward solution using O(mn) space is probably a bad idea.
    - A simple improvement uses O(m + n) space, but still not the best solution.
    - Could you devise a constant space solution?

*/

var setZeros = function(matrix) {
  if (!matrix.length) {
    return [];
  }

  var hashRows = {};
  var hashCols = {};

  var n = matrix.length;
  var m = matrix[0].length;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        hashRows[i] = true;
        hashCols[j] = true;
      }
    }
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (hashRows[i] || hashCols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

setZeros([[1, 1, 1], [1, 0, 1], [1, 1, 1]]); // [ [1,0,1], [0,0,0], [1,0,1] ]
setZeros([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]); // [ [0,0,0,0], [0,4,5,0], [0,3,1,0] ]

// Time Complexity: O(M * N) where M, N is number rows in matrix.
// Space Complexity: O(M + N)
