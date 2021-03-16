/* Problems: You have a set of integers s, which originally contains all the numbers from 1 to n.
  Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
  which results in repetition of one number and loss of another number.

  You are given an integer array nums representing the data status of this set after the error. Find the number that
  occurs twice and the number that is missing and return them in the form of an array.

  Example 1:
    Input: nums = [1,2,2,4]
    Output: [2,3]

  Example 2:
    Input: nums = [1,1]
    Output: [1,2]

*/

// Solution 1 - Using HashMap
function findMissingAndDuplicate(nums) {
	var hash = {};

	for (var i = 0; i < nums.length; i++) {
		if (!hash[nums[i]]) {
			hash[nums[i]] = 1;
		} else {
			hash[nums[i]] += 1;
		}
	}

	var missing = 1;
	var duplicate = -1;

	for (var i = 1; i <= nums.length; i++) {
		if (hash[i]) {
			if (hash[i] === 2) {
				duplicate = i;
			} else {
				missing = i;
			}
		}
	}

	return [duplicate, missing];
}

findMissingAndDuplicate([1, 1]); // [1, 2]
findMissingAndDuplicate([1, 2, 2, 4]); // [2, 3]
findMissingAndDuplicate([3, 2, 2]); // [2, 1]

// Time Complexity: O(N)
// Space Complexity: O(N)

// Solution 2 - Using in place array modification

function findMissingAndDuplicate(nums) {
	var missing = 1;
	var duplicate = -1;

	for (var i = 0; i < nums.length; i++) {
		var num = Math.abs(nums[i]);
		if (nums[num - 1] < 0) {
			duplicate = num;
		} else {
			nums[num - 1] *= -1;
		}
	}

	for (var i = 1; i <= nums.length; i++) {
		if (nums[i] > 0) {
			missing = i + 1;
		}
	}

	return [duplicate, missing];
}

findMissingAndDuplicate([1, 1]); // [1, 2]
findMissingAndDuplicate([1, 2, 2, 4]); // [2, 3]
findMissingAndDuplicate([3, 2, 2]); // [2, 1]

// Time Complexity: O(N)
// Space Complexity: O(1), as are we modifying in place and having constant space.
