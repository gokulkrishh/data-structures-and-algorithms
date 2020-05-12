/* Problems: Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

  Note:
    1. N is a positive integer and won't exceed 10,000.
    2. All the scores of athletes are guaranteed to be unique.

  Example:

  Input: [5, 4, 3, 2, 1]

  Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]

  Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the left two athletes, you just need to output their relative ranks according to their scores.

*/

var findRelativeRanks = function (nums) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  var arr = nums.slice(); // Shallow Clone
  arr.sort(function (a, b) { return b - a }); // Sort in reverse order

  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      nums[hash[arr[i]]] = "Gold Medal";
    }
    else if (i === 1) {
      nums[hash[arr[i]]] = "Silver Medal";
    }
    else if (i === 2) {
      nums[hash[arr[i]]] = "Bronze Medal";
    }
    else {
      nums[hash[arr[i]]] = (i + 1).toString();
    }
  }

  return nums;
};


findRelativeRanks([5, 4, 3, 2, 1]); // ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]

// Time Complexity: O(N), exluding the sort complexity which browser takes care of it
// Space Complexity: O(1)
