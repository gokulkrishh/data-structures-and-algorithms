/* Problem: Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

  Note:
    - Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.
    - D can appear in any format (list, hash table, prefix tree, etc)

  Example:
    Input: S = "abppplee", D = ["able", "ale", "apple", "bale", "kangaroo"]
    Output: "apple"

  Explanation:
    - The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".
    - The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.
    - The word "kangaroo" is the longest word in D, but it isn't a subsequence of S.
*/

// Solution 1

function findSubSequenceOfString(S, D) {
	if (!D.length) return "";

	var result = "";
	var length = 0;

	for (var i = 0; i < D.length; i++) {
		if (length < D[i] && isSubSequence(D[i], S)) {
			length = D[i].length;
			result = D[i];
		}
	}

	function isSubSequence(str1, str2) {
		var m = str1.length;
		var n = str2.length;

		var j = 0;

		for (var i = 0; i < n && j < m; i++) {
			if (str[j] === str2[i]) {
				j++;
			}
		}

		return j === m;
	}

	return result;
}

findSubSequenceOfString("abppplee", [
	"able",
	"ale",
	"apple",
	"bale",
	"kangaroo"
]);

// Time Complexity: O(N * K * L), N is length of D and K is length of S and L is max length of words in D
// Auxillary Space: O(1)
// Space Complexity: O(1)
