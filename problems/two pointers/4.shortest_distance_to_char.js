/* Problem: Shortest Distance to a Character.

  Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

  Example 1:
    Input: S = "loveleetcode", C = 'e'

    Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

*/

var shortestDistanceToChar = function(word, char) {
  var result = [];
  var count = word.length;

  for (var i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count = 0;
    } else {
      count++;
    }

    result[i] = count;
  }

  for (var j = word.length - 1; i >= 0; i--) {
    if (word[i] === char) {
      count = 0;
    } else {
      count++;
    }

    result[i] = Math.min(count, result[i]);
  }

  return result;
};

shortestDistanceToChar('loveleetcode', 'e'); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

// Time Complexity: O(N), N is length of word.
// Space Complexity: O(N), N is length of result array.
