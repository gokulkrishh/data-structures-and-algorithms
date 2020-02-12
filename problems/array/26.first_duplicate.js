/* Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
	prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

	Example:
		Input: [2, 1, 3, 5, 3, 4]
		Output: 3

	Example:
		Input: [2, 1, 5, 3, 4, 4]
		Output: 4

	Note:

	- List of numbers will start from 1 - N
	- List of numbers cannot be greater than N (N is list length)
	- You cannot modify the array
	- There is only one duplicate number in the array, but it could be repeated more than once.
*/

// Solution 1 - Two Pointer
function findDuplicate(nums) {
	var minIndex = nums.length;
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				minIndex = Math.min(minIndex, j);
			}
		}
	}

	if (minIndex === nums.length) return -1;
	return nums[minIndex];
}

findDuplicate([2, 1, 3, 5, 3, 4]); // 3
findDuplicate([2, 1, 5, 3, 4]); // -1

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// Solution 2 - HashMap
function findDuplicate(nums) {
	var hash = {};
	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]]) {
			return nums[i];
		} else {
			hash[nums[i]] = true;
		}
	}

	return -1;
}

findDuplicate([2, 1, 3, 5, 3, 4]); // 3
findDuplicate([2, 1, 5, 3, 4]); // -1

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 3 - Using index of array from problem 1 - N as clue, we will store make the index of num[i] value as -1
function findDuplicate(nums) {
	for (var i = 0; i < nums.length; i++) {
		if (nums[Math.abs(nums[i]) - 1] < 0) {
			return Math.abs(nums[i]);
		} else {
			nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
		}
	}

	return -1;
}

// Time Complexity: O(N)
// Space Complexity: O(1)
