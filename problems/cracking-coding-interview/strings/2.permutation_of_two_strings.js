/* Problem: Given two string, find out if one string is permutation of other.

	Example:
		Input: "abcd" "dcab"
		Output: true

		Input: "abcde" "dcab"
		Output: false

		Input: "dcfg" "cdfg!"
		Output: false
*/

// Solution 1: Sorting
function isPermutation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	str1 = str1
		.split("")
		.sort()
		.join("");

	str2 = str2
		.split("")
		.sort()
		.join("");

	return str1 === str2;
}

isPermutation("abcd", "dcab"); // True
isPermutation("abcde", "dcab"); // False
isPermutation("dcfg", "cdfg"); // True

// Time Complexity: O(N LOG N), due to storing complexity is increased
// Space Complexity: O(A + B), A, B is length of str1, str2

// Solution 2: Hash map
function isPermutation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	var hash = {};

	for (var i = 0; i < str1.length; i++) {
		if (!hash[str1[i]]) {
			hash[str1[i]] = 1;
		} else {
			hash[str1[i]] += 1;
		}
	}

	for (var i = 0; i < str2.length; i++) {
		var char = str2[i];

		if (hash[char]) {
			hash[char]--;
		}
	}

	for (var i in hash) {
		if (hash[i] > 0) {
			return false;
		}
	}

	return true;
}

isPermutation("abcd", "dcab"); // True
isPermutation("abcde", "dcab"); // False
isPermutation("dcfg", "cdfg"); // True

// Time Complexity: O(N), N is length of str1 & str2
// Space Complexity: O(N), N is length of str1
