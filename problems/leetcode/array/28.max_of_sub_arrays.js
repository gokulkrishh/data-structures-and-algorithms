/*
Problem: Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

Example: Given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8],

Explanation:
	10 = max(10, 5, 2)
	7 = max(5, 2, 7)
	8 = max(2, 7, 8)
	8 = max(7, 8, 7)

Note:
	Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results.
	You can simply print them out as you compute them.

*/

// Solution 1 - Two loops

function findMax(arr, k) {
	for (var i = 0; i < arr.length - k; i++) {
		var max = arr[i];

		for (var j = 1; j < k; j++) {
			if (arr[j + i] > max) {
				max = arr[j + i];
			}
		}

		console.log(max);
	}
}

var arr = [10, 5, 2, 7, 8, 7];
var k = 2;

findMax(arr, 2); // [10, 5, 7, 8]

// Time Complexity: O(N * K), N is (length of array - k) and K is no of subarray times we find max

// Solution 2 - Deque (https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/)
