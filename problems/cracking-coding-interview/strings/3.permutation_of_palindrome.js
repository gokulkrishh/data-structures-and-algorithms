/* Problem: Given a string, write a function to find out if the string is permutation of palindrome.

	Note:
	- Palindrome is a word or phrase which is same in front and backwards
		Example: "madam" has characters appears same from front and the back
	- Permutation is re-arrangement of characters
		Example: "abc" and "bac" and "cab" are same

	Example:
		Input: "tact coa"
		Output: true

		Explanation: the permutation combinations are { "taco cat", "atco cta" etc }
*/

// Hint from question is palindrome occurs when we have all the characters as even except 1 char which is odd
// i.e: even + odd = odd means we have permutation of palindrome
// i.e: old + old = false
// i.e: even + even = false

// Solution 1 - using hash map
function isPermutationOfPalindrome(str) {
	var hashMap = {};

	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		if (char === " ") {
			continue;
		}

		if (!hashMap[char]) {
			hashMap[char] = 1;
		} else {
			hashMap[char] += 1;
		}
	}

	var oddCount = 0;

	for (var i in hashMap) {
		oddCount += hashMap[i] % 2;
	}

	return oddCount === 1;
}

isPermutationOfPalindrome("tact coa"); // true
isPermutationOfPalindrome("nurses run"); // true
isPermutationOfPalindrome("aab"); // true
isPermutationOfPalindrome("abca"); // false

// Time Complexity: O(N), as we have to iterate all the chars in the given string
// Space Complexity: O(S), S is number of chars in string as we are storing all the chars in hash map

// Solution 2: Using array of 128 ASC11 characters length and same even odd count

function isPermutationOfPalindrome(str) {
	var arrMap = new Array(128).fill(0);

	for (var i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			continue;
		}
		arrMap[str.charCodeAt(i)]++;
	}

	var oddCount = 0;

	for (var i = 0; i < arrMap.length; i++) {
		oddCount += arrMap[i] % 2;
	}

	return oddCount === 1;
}

isPermutationOfPalindrome("tact coa"); // true
isPermutationOfPalindrome("nurses run"); // true
isPermutationOfPalindrome("aab"); // true
isPermutationOfPalindrome("abca"); // false

// Time Complexity: O(N), as we have to iterate all the chars in the given string
// Space Complexity: O(1)
