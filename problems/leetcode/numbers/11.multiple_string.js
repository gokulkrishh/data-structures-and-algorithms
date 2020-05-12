/* Problem: Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

	Example 1:
		Input: num1 = "2", num2 = "3"
		Output: "6"

	Example 2:
		Input: num1 = "123", num2 = "456"
		Output: "56088"

	Note:
		1. The length of both num1 and num2 is < 110.
		2. Both num1 and num2 contain only digits 0-9.
		3. Both num1 and num2 do not contain any leading zero, except the number 0 itself.
		4. You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

function multiplyStrings(str1, str2) {
	var resultArr = Array(str1.length + str2.length).fill(0);

	for (var i = str1.length - 1; i >= 0; i--) {
		for (var j = str2.length - 1; j >= 0; j--) {
			var multi = str1[i] * str2[j] + resultArr[i + j + 1];
			resultArr[i + j] += Math.floor(multi / 10);
			resultArr[i + j + 1] = multi % 10;
		}
	}

	return resultArr
		.join("")
		.replace(/^0+(?!$)/, "") // to remove all leading 0 except last char in string
		.toString();
}

multiplyStrings("2", "3");

// Time Complexity: O(N * M), N is string one length and M is string two length
// Space Complexity: O(NLen + MLen)
