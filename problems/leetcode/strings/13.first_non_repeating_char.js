/* Problem: Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

  Note: You may assume the string contain only lowercase letters.

  Examples:
    Input:  S = "leetcode"
    Output: 0

    Input:  S = "loveleetcode"
    Output: 2


  Explanation:

    - In example 1,  chars l, t, c, o, d are non-repeating but only l is first non-repeating char in given string S.
    - In example 2,  chars v, t, d are non-repeating but v is first non-repeating char in given string S.

*/

// Solution 1:

function nonRepeatingFirstChar(S) {
	var hash = {};

	for (var i = 0; i < S.length; i++) {
		if (!hash[S[i]]) {
			hash[S[i]] = 1;
		} else {
			hash[S[i]] += 1;
		}
	}

	for (var i = 0; i < S.length; i++) {
		if (hash[S[i]] === 1) return i;
	}

	return -1;
}

nonRepeatingFirstChar("loveleetcode"); // 2

// Time Complexity: O(N)
// Space Complexity: O(N)

// Note: Problem with above solution is if the non-repeating char is at the end of S we will end up scanning to end which is not efficient.
// Lets solve in solution 2

// Solution 2:

function nonRepeatingFirstChar(S) {
	var temp = [];

	for (var i = 0; i < S.length; i++) {
		temp[i] = [temp[i] ? temp[i][0]++ : 1, i];
	}

	return temp;
}
