/* Problem: Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

  Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.

  Note: You may assume the string contain only lowercase letters.
*/

function firstUniqChar(str) {
	var hash = {};

	for (var i = 0; i < str.length; i++) {
		if (!hash[str[i]]) hash[str[i]] = 1;
		else {
			hash[str[i]] += 1;
		}
	}

	for (var i = 0; i < str.length; i++) {
		if (hash[str[i]] === 1) return i;
	}

	return -1;
}

firstUniqChar('leetcode'); // 0
firstUniqChar('aadsadss'); // -1

// Time Complexity: O(N)
// Space Complexity: O(N), as we are storing N times in hash
