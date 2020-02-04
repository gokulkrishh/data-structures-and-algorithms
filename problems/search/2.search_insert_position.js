/* Problem:
  Given a sorted array and a target value, return the index if the target is found.
  If not, return the index where it would be if it were inserted in order.

  Example 1:
    Input: [1,3,5,6], 5
    Output: 2

  Example 2:
    Input: [1,3,5,6], 2
    Output: 1

  Example 3:
    Input: [1,3,5,6], 7
    Output: 4

  Reference: https://leetcode.com/problems/search-insert-position/description/
*/

// Solution 1 - Raw version

var searchInsert = function(arr, target) {
	if (arr.length === 0) return -1;
	for (var i = 0; i < arr.length; i++) {
		if (target < arr[i]) return i;
		if (arr[i] === target) return i;
		else if (target > arr[i] && target < arr[i + 1]) return i + 1;
		else if (target > arr[i] && i === arr.length - 1) return i + 1;
	}
};

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 7); // 4

// Time Complexity: O(N)

// Solution 2 - Code optimized

var searchInsert = function(arr, target) {
	if (arr.length === 0) return -1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= target) return i;
	}
	return arr.length;
};

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 7); // 4

// Time Complexity: O(N)

// Solution 3 - Binary Search

var searchInsert = function(arr, target) {
	if (arr.length === 0) return -1;
	var left = 0;
	var right = arr.length - 1;

	while (left <= right) {
		var mid = Math.floor(left + right / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			left = mid - 1;
		}
	}
	return left;
};

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 7); // 4

// Time Complexity: O(Log N)
