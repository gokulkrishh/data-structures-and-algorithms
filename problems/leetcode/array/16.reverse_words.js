/* Problem: Reverse Words in a String

  Given an input string, reverse the string word by word.

  Example 1:
    Input: "the sky is blue"
    Output: "blue is sky the"

  Example 2:
    Input: "  hello world!  "
    Output: "world! hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

  Example 3:
    Input: "a good   example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

  Note:
    - A word is defined as a sequence of non-space characters.
    - Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
    - You need to reduce multiple spaces between two words to a single space in the reversed string.


*/

// Solution 1 using filter to remove "" string
var reverseWords = function(s) {
	if (!s) return "";
	var strArr = s.split(" ");
	strArr = strArr.filter(Boolean);
	var str = "";
	for (var i = strArr.length - 1; i >= 0; i--) {
		if (!str) {
			str += strArr[i];
		} else {
			str = str + " " + strArr[i];
		}
	}

	return str;
};

reverseWords("the sky is blue"); // "blue is sky the"
reverseWords("  hello world!  "); // "world! hello"

// Time Complexity: O(N)
// Space Complexity; O(N)

// Solution 2 using replace, trim
var reverseWords = function(s) {
	if (!s) return "";
	var sArr = s
		.replace(/\s+/g, " ")
		.trim()
		.split(" ");
	return sArr.reverse().join(" ");
};

reverseWords("the sky is blue"); // "blue is sky the"
reverseWords("  hello world!  "); // "world! hello"

// Time Complexity: O(N)
// Space Complexity; O(N)

// Solution 3 using char reversal

var reverseWords = function(s) {
	if (!s.length) return "";

	function swap(s, start, end) {
		while (start < end) {
			var temp = str[start];
			str[start] = str[end];
			str[end] = temp;

			start++;
			end--;
		}
	}

	var start = 0;

	for (var end = 0; end < s.length; end++) {
		if (s[end] === " ") {
			swap(s, start, end);
			start = end + 1;
		}
	}

	// In above for - loop we would reversed all chars last word since (last word doesnt have space)
	// So we will do now
	swap(s, start, s.length - 1); // To swap last word chars

	swap(s, 0, s.length - 1); // To swap all reversed chars words

	return s.join("");
};

reverseWords(s.split(""));

// Time Complexity: O(N)
// Space Complexity; O(1)
