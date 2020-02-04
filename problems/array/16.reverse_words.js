/* Problem: Reverse Words in a String

  Given an input string, reverse the string word by word.

  Example 1:
    Input: "the sky is blue"
    Output: "blue is sky the"

  Example 2:
    Input: "  hello world!  "
    Output: "world! hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

  Example 3:
    Input: "a good   example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

  Note:
    - A word is defined as a sequence of non-space characters.
    - Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
    - You need to reduce multiple spaces between two words to a single space in the reversed string.


*/

// Solution 1 using filter to remove "" string
var reverseWords = function(s) {
  if (!s) return '';
  var strArr = s.split(' ');
  strArr = strArr.filter(Boolean);
  var str = '';
  for (var i = strArr.length - 1; i >= 0; i--) {
    if (!str) {
      str += strArr[i];
    } else {
      str = str + ' ' + strArr[i];
    }
  }

  return str;
};

reverseWords('the sky is blue'); // "blue is sky the"
reverseWords('  hello world!  '); // "world! hello"

// Time Complexity: O(N)
// Space Complexity; O(1)

// Solution 2 using replace, trim
var reverseWords = function(s) [
  if (!s) return ""
  var sArr = s.replace(/\s+/g, ' ').trim().split(' ');
  return sArr.reverse().join(' ');
]

reverseWords('the sky is blue'); // "blue is sky the"
reverseWords('  hello world!  '); // "world! hello"

// Time Complexity: O(N)
// Space Complexity; O(1)
