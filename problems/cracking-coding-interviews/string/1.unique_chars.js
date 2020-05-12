/* Problem: Determine if a string has all Unique Characters

	Example:
		Input : abcd10jk
		Output : true

		Input : hutg9mnd!nk9
		Output : false

	Note: Check if the string is ASCII or unicode
*/

// Solution 1: Brute force
function uniqueChars(str) {
	if (str.length === 0) {
		return false;
	}

	for (var i = 0; i < str.length; i++) {
		for (var j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				return false;
			}
		}
	}

	return true;
}

uniqueChars("abcd10jk"); // true
uniqueChars("hutg9mnd!nk9"); // false

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// Solution 2: Hashmap
function uniqueChars(str) {
	if (str.length === 0) {
		return false;
	}

	var hash = {};

	for (var i = 0; i < str.length; i++) {
		if (!hash[str[i]]) {
			hash[str[i]] = 1;
		} else {
			return false;
		}
	}

	return true;
}

uniqueChars("abcd10jk"); // true
uniqueChars("hutg9mnd!nk9"); // false

// Time Complexity: O(S), S is length of the string
// Space Complexity: O(S)
