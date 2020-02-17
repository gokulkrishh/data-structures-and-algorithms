/* Problem: For this challenge, you will have to write a function called capitalizeFirstLast or capitalize_first_last. This function will capitalize the first and last letter of each word, and lowercase what is in between.

	Example:
		Input: "hello world"
		Out: "HellO WorlD"

	Rules:

	- The function will take a single parameter, which will be a string.
	- The string can contain words separated by a single space.
	- Words are made of letters from the ASCII range only.
	- The function should return a string.
	- Only the first and last letters are uppercased.
	- All the other letters should be lowercased.

*/

function capitalizeFirstAndLastChar(str) {
	var result = "";

	if (!str.length) {
		return result;
	}

	result = str[0].toUpperCase();
	var end = -1;

	for (var i = 1; i < str.length; i++) {
		if (str[i - 1] === " ") {
			end = i;
		}

		if (end != -1) {
			result += str[end].toUpperCase();
		} else {
			if (str[i + 1] === " " || str.length - 1 === i) {
				result += str[i].toUpperCase();
			} else {
				result += str[i];
			}
		}

		end = -1;
	}

	return result;
}

capitalizeFirstAndLastChar("hello world"); // "HellO WorlD"

// Time Complexity: O(N)
// Space Complexity: O(1)
