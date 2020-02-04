/* Problem:

  Given a set of distinct integers, nums, return all possible subsets (the power set).

  Note: The solution set must not contain duplicate subsets.

  Example:

  Input: nums = [1,2,3]
  Output:
  [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
  ]

*/

var subsets = function(nums) {
  var lists = [];

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    var max = lists.length;

    lists.push([num]);

    for (var j = 0; j < max; j++) {
      var list = lists[j].slice();
      list.push(num);
      lists.push(list);
    }
  }

  lists.push([]);

  return lists;
};

subsets([1, 2, 3]); // [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];

// Time Complexity: O(N * 2^N), 2^N (2 power N) is total number of subsets for given array.
