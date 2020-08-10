/* Problem: We are given two strings, A and B.  A shift on A consists of taking string A and moving the leftmost character to the rightmost position.

 Explanation:
  - if A = 'abcde', then it will be 'bcdea' after one shift on A.
  - Return True if and only if A can become B after some number of shifts on A.

  Example 1:
    Input: A = 'abcde', B = 'cdeab'
    Output: true

  Example 2:
    Input: A = 'abcde', B = 'abced'
    Output: false
    Note:

  Note: A and B will have length at most 100.
 */

//  Solution 1 - Shift one chart at a time in str1 to end of str2 and check agaist str2

function rotateStrings(A, B) {
	if (!A && !B) {
		return true;
	}

	if (A.length !== B.length) {
		return false;
	}

	if (A === B) {
		return true;
	}

	for (var i = 0; i < A.length; i++) {
		A = A.slice(1, A.length) + A.slice(0, 1);

		if (A === B) {
			return true;
		}
	}

	return false;
}

rotateStrings("abcde", "cdeab");

// Time Complexity: O(N)
// Space Complexity: O(N), N is length of the given string

//  Solution 2 - Similar to solution 1 but with arrays

function rotateStrings(A, B) {
	if (!A && !B) {
		return true;
	}

	if (A.length !== B.length) {
		return false;
	}

	if (A === B) {
		return true;
	}

	var arr = A.split("");

	for (var i = 0; i < arr.length; i++) {
		arr.push(arr.shift());

		if (arr.join("") === B) {
			return true;
		}
	}

	return false;
}

rotateStrings("abcde", "cdeab");

// Time Complexity: O(N)
// Space Complexity: O(N), N is length of the array
