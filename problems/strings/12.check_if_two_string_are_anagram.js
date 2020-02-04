/* Problem: Check whether two Strings are Anagram of each other

For example, “abcd” and “dabc” are an Anagram of each other.

*/

// Solution 1 - Sorting

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  str1 = str1
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  str2 = str2
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }

  return true;
}

checkAnagram('abcd', 'dabc'); // True
checkAnagram('abcd', 'dabb'); // False

// Time Complexity: O(N Log N)

// Solution 2 - HashMap
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  var hash = {};

  for (var i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      hash[str1[i]] = 1;
    } else hash[str1[i]]++;
  }

  for (var i = 0; i < str2.length; i++) {
    hash[str1[i]]--;
  }

  for (var key in hash) {
    if (hash[key] > 0) return false;
  }

  return true;
}

checkAnagram('abcd', 'dabc'); // True
checkAnagram('abcd', 'dabb'); // False

// Time Complexity: O(N)
