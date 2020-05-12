/* Problem: Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2

  Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1

  Clarification:
    - What should we return when needle is an empty string? This is a great question to ask during an interview.
    - For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

// Solution 1 - Using subString method

var strStr = function(haystack, needle) {
  var hashLen = needle.length;

  if (!haystack && needle) return -1; // When haystack string not present but needle present
  else if (!haystack) return 0; // // When haystack string not present

  for (var i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, hashLen + i) == needle) {
      return i;
    }
  }

  return -1; // When needle string not present in haystack
};

strStr("hello", "ll"); // 2

// Time Complexity: O(N)
// Space Complexity: O(1)

// Solution 2 - Using indexOf()

var strStr = function(haystack, needle) {
  if (!haystack) return 0;
  return haystack.indexOf(needle);
};

strStr("hello", "ll"); // 2

// Time Complexity: O(N)
