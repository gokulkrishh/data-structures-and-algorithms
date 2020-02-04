/* Problem: Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

  Example 1:
    Input: candies = [1,1,2,2,3,3]
    Output: 3
    Explanation: There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
    Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
    The sister has three different kinds of candies.

  Example 2:
  Input: candies = [1,1,2,3]
  Output: 2
  Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
  The sister has two different kinds of candies, the brother has only one kind of candies.

*/

// Using sorting and we know that arr will always be even so change of sister getting unique is 50% of candies
var distributeCandies = function (candies) {
  var sister = 1; // lets start by giving one candty to sister

  candies.sort(function (a, b) { return a - b }); // Soring

  for (var i = 1; i < candies.length && sister < candies.length / 2; i++) {
    if (candies[i] > candies[i - 1]) {
      sister++;
    }
  }

  return sister;
};

distributeCandies([1, 1, 2, 2, 3, 3]); // 3
distributeCandies([1, 1, 2, 3]); // 2

// Time Complexity: O(N LOG N)
// Space complexity : O(1)

// Using hash maps
var distributeCandies = function (candies) {
  var obj = {};
  var sister = 0;

  // As per the problem, arr will always be even so change of sister getting unique is 50% of candies
  for (var i = 0; i < candies.length && sister < candies.length / 2; i++) {
    // If unique, give it to sister
    if (!obj[candies[i]]) {
      sister++;
      obj[candies[i]] = 1;
    }
  }

  return sister;
};

distributeCandies([1, 1, 2, 2, 3, 3]); // 3
distributeCandies([1, 1, 2, 3]); // 2

// Time Complexity: O(N)
// Space complexity : O(N)
