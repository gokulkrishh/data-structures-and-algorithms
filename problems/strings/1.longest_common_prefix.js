/* Problem: Write a function to find the longest common prefix string amongst an array of strings.

  Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

  As an example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".

  Given the array of strings, you need to find the longest S which is the prefix of ALL the strings in the array.

  Example:

  Input: [ "abd", "abccc", "abcc"]
  Output: ab

*/

function longestCommonPrefix(arr) {
  var longest = "";
  var firstWord = arr[0];

  for (var i = 0; i < firstWord.length - 1; i++) {
    var count = 0;
    var char = firstWord[i];
    for (var j = 1; j < arr.length; j++) {
      var compareChar = arr[j][i];
      if (char === compareChar) count++;
      else break;
    }

    if (count === arr.length - 1) {
      longest += char;
      continue;
    }
  }

  return longest;
}

longestCommonPrefix(["abd", "abccc", "abcc"]); // ab

/* Complexity:

  Time Complexity: O(n^2)

*/
