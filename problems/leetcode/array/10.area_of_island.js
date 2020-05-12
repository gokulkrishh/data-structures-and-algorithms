/* Problem: Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

  Note: Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

  Example 1:
    Input: [[0,0,1,0,0,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,0,0,0], [0,1,1,0,1,0,0,0,0,0,0,0,0], [0,1,0,0,1,1,0,0,1,0,1,0,0], [0,1,0,0,1,1,0,0,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,1,1,0,0,0], [0,0,0,0,0,0,0,1,1,0,0,0,0]]
    Output: 6

    Explanation: Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

  Example 2:
    Input: [[0,0,0,0,0,0,0,0]]
    Output: 0;

    Explanation: Given the above grid, return 0.
*/

// Using Depth First Search (Recursion)
var maxAreaOfIsland = function (grid) {
  var result = 0;

  function dfs(i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0 || grid[i][j] == -1) return 0;
    grid[i][j] = -1; // To keep track of the squares we visited
    // i - 1 to go up
    // i + 1 to go down
    // j - 1 to go backward
    // j + 1 to go forward
    return (1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1));
  }

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i] && grid[i][j] === 1) {
        result = Math.max(result, dfs(i, j));
      }
    }
  }

  return result;
};

// Time Complexity: O(N * M), N is number of rows and M is number of columns
// Space Complexity: O(N * M)
