/* Problem: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.
    - Note that an empty string is also considered valid.

  Example 1:

    Input: "()"
    Output: true

  Example 2:
    Input: "()[]{}"
    Output: true

  Example 3:
    Input: "(]"
    Output: false

  Example 4:
    Input: "([)]"
    Output: false

  Example 5:
    Input: "{[]}"
    Output: true
*/

// Solution 1 - Using Stack

function isValidParentheses(str) {
	if (str === '') return true; // Empty string
	var stack = [];
	var parenthesesMap = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	for (var i = 0; i < str.length; i++) {
		var char = str[i];
		var stackTop = stack[stack.length - 1];
		if (char === parenthesesMap[stackTop]) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0; // If 0, then given str is valid
}

isValidParentheses('([[]])'); // True
isValidParentheses('({[[]])'); // False
isValidParentheses('({[]})'); // True

// Time Complexity: O(N)
// Space Complexity: O(N)
