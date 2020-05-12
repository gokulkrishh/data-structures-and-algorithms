/*
  Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
  If the last word does not exist, return 0.

  Note: A word is defined as a character sequence consists of non-space characters only.

  Example:
    Input: "Hello World"
    Output: 5
*/

// Solution 1

var lengthOfLastWord = function(s) {
	s = s.trim(); // To remove last space in str
	var length = 0;
	if (!s[i]) return length;
	var i = s.length - 1;
	while (s[i] && s[i] !== ' ') {
		length += 1;
		i -= 1;
	}
	return length;
};

lengthOfLastWord('hello s world'); // 5

// Time Complexity: O(N)

// Solution 2

var lengthOfLastWord = function(s) {
	s = s.trim(); // To remove last space in str
	var strArr = s.split(' ');
	return strArr[strArr.length - 1].length;
};

lengthOfLastWord('hello s world'); // 5

// Time Complexity: O(N)
