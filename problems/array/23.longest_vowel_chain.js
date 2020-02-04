/* Problem: Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.

  Example
  Input: "codewarriors"
  Output: 2

  Explantion: "io" is continued substring as longest in the given string.
*/

// Solution 1:
function longestVowelChain(str) {
  if (!str.length) return 0;
  var arr = [];
  var continued = false;
  var vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };
  for (var i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      if (continued) {
        arr.push(arr.pop().concat(str[i]));
      } else {
        arr.push([str[i]]);
      }
      continued = true;
    } else {
      continued = false;
    }
  }

  return arr.reduce((a, b) => (a.length > b.length ? a : b), []).length; // To get the longest array in arr variable
}

longestVowelChain('codewarriors'); // 2
longestVowelChain('ultrarevolutionariees'); // 3
longestVowelChain('iiihoovaeaaaoougjyaw'); // 8

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 2: Pointers

function longestVowelChain(str) {
  var current = 0;
  var max = 0;
  var vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };
  for (var i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      current++;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }
  return max;
}

longestVowelChain('axexixxoxuaiuo'); // 5

// Time Complexity: O(N)
// Space Complexity: O(1)
