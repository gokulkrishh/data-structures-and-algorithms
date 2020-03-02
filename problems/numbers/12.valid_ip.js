/*  Problem: Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

	Note: Input to the function is guaranteed to be a single string.

	Examples:
		Valid inputs:
			1.2.3.4
			123.45.67.89

		Invalid inputs:
			1.2.3
			1.2.3.4.5
			123.456.78.90
			123.045.067.089

	Note: leading zeros (e.g. 01.02.03.04) are considered invalid.

*/

function isValidIP(str) {
	if (!str) return false;

	var strArr = str.split(".");

	return strArr.length === 4 && strArr.every(strItem => String(Number(strItem)) === strItem && strItem >= 0 && strItem <= 255);
}

// Time Complexity: O(N), N is length of IP which is 4
// Space Complexity: O(N)
