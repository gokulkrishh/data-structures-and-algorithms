/* Problem: Find the Duplicate Number

  Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist.
  Assume that there is only one duplicate number, find the duplicate one.

  Example 1:
    Input: [1,3,4,2,2]
    Output: 2

  Example 2:
    Input: [3,1,3,4,2]
    Output: 3

  Note:
    1. You must not modify the array (assume the array is read only).
    2. You must use only constant, O(1) extra space.
    3. Your runtime complexity should be less than O(n2).
    4. There is only one duplicate number in the array, but it could be repeated more than once.
*/

// Solution 1 - HashMap

var findDuplicate = function (nums) {
	var hash = {};

	for (var i = 0; i < nums.length; i++) {
		if (!hash[nums[i]]) {
			hash[nums[i]] = 1;
		} else {
			return nums[i];
		}
	}
};

findDuplicate([3, 1, 3, 4, 2]); // 3
findDuplicate([1, 3, 4, 2, 2]); // 2

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 2 - Pointers (fast and slow)
// When fast is running faster than slow, then they must meet at some point. That point is the intersection of cycle
// Again start from slow form begining, fast and slow will meet at some point where there cycle is detected and we can find the duplicate

var findDuplicate = function (nums) {
	var slowPointer = nums[0];
	var fastPointer = nums[0];

	do {
		slowPointer = nums[slowPointer];
		fastPointer = nums[nums[fastPointer]];
	} while (slowPointer !== fastPointer);

	// Intersection
	slowPointer = nums[0];

	while (slowPointer !== fastPointer) {
		slowPointer = nums[slowPointer];
		fastPointer = nums[fastPointer];
	}

	return fastPointer;
};

findDuplicate([3, 1, 3, 4, 2]); // 3
findDuplicate([1, 3, 4, 2, 2]); // 2

// Time Complexity: O(N)
// Space Complexity: O(1)
