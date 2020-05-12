/* Problem:
  Given a string, find the length of the longest substring without repeating characters.

  Example 1:
    Input: "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

  Example 2:
    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

  Example 3:
    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring

*/

function lengthOfLongestSubstr(str) {
	var leftWindow = 0;
	var rightWindow = 0;
	var longestSubStrLength = 0;
	var hash = {};

	while (rightWindow < str.length) {
		var char = str[rightWindow];

		if (!hash[char]) {
			hash[char] = char;
			// Get max of (prev longestSubStrLength & right - left window + 1)
			longestSubStrLength = Math.max(longestSubStrLength, rightWindow - leftWindow + 1);
			rightWindow++;
		} else {
			hash[str[leftWindow]] = null;
			leftWindow++;
		}
	}

	return longestSubStrLength;
}

lengthOfLongestSubstr('bbbbb'); // 1
lengthOfLongestSubstr('bbbbbac'); // 3
lengthOfLongestSubstr('bbbbbacgokul'); // 8

// Time Complexity: O(N)
// Space Complexity: O(min(m, n))
