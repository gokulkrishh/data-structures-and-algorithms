/* Problem: How to Sum Integers 1 to n

	Example:
		Input: [1,2,3,4,5,6,7,8,9,10]
		Output: 55

*/

// Solution 1 - Brute Force
function sumNumbers(listOfIntegers) {
	var result = 0;

	for (var i = 0; i < listOfIntegers.length; i++) {
		result += listOfIntegers[i];
	}

	return result;
}

sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Time Complexity: O(N)

// Solution 2 - (N * (N + 1)) / 2
function sumNumbers(listOfIntegers) {
	return (listOfIntegers.length * (listOfIntegers.length + 1)) / 2;
}

sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Time Complexity: O(1), no matter how big the list is, solution will always run in constant time
