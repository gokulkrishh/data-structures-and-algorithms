/* Problem:

  Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

  Note: You may assume that the array is non-empty and the majority element always exist in the array.

  Example 1:
    Input: [3,2,3]
    Output: 3
    Example 2:

  Example: 2
    Input: [2,2,1,1,1,2,2]
    Output: 2

*/

// Solution 1 - Hashmap
var majorityElement = function(nums) {
	var len = nums.length;
	var hash = {};
	var sum = 0;

	for (var i = 0; i < len; i++) {
		if (!hash[nums[i]]) {
			hash[nums[i]] = 1;
		} else {
			hash[nums[i]] += 1;
		}
	}

	for (var i in hash) {
		if (hash[i] > Math.floor(len / 2)) {
			sum = i;
		}
	}
	return sum;
};

majorityElement([3, 3, 4]); // 2

// Time Complexity: O(n)
// Space complexity : O(n), As we are storing atmost (n - n/2) times in the Hashmap
