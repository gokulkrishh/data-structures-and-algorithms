/* Problem: An isogram is a word that has no repeating letters, consecutive or non-consecutive.

	Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.

	Note: Ignore letter case.

	Example:
		isIsogram("Dermatoglyphics") == true
		isIsogram("aba") == false
		isIsogram("moOse") == false // -- ignore letter case


*/

// Solution 1 = Using hashMaps
function isIsogram(str) {
	var hash = {};
	str = str.toLowerCase();

	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		if (!hash[char]) {
			hash[char] = true;
		} else {
			return false;
		}
	}
	return true;
}

// Time Complexity: O(N), N is length of string
// Space Complexity: O(N)

// Solution 2 - Using set
function isIsogram(str) {
	return !str || new Set(str.toLowerCase()).size === str.length;
}

// Time Complexity: O(N), N is length of string
// Space Complexity: O(N)
