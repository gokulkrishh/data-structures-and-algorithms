/* Problems:

  Find number of ways a frog can jump (1 feet jump or 2 feet jump) to make it across the river.

  Note:
  1. Frog can either make 2 feet jump or 1 feet jump.
  2. Frog cannot go in reverse.

  Example 1:
    Input: 3 Feet long river
    Output: 3 Ways

    Explantion:

    Combination 1 = 1 feet + 1 feet + feet
    Combination 2 = 1 feet + 2 feet
    Combination 1 = 2 feet + 1 feet

  Example 2:
    Input: 11 Feet long river
    Output: 144 Ways

*/

// Solution 1 - recursion
function jumpFrog(totalFeet) {
  function jumps(feet) {
    if (feet === totalFeet) return 1;
    if (feet > totalFeet) return 0;
    return jumps(feet + 1) + jumps(feet + 2)
  }

  return jumps(0);
}


jumpFrog(3); // 3
jumpFrog(11); // 144

// Time Complexity: O(2^N )


// Solution 2 - recursion with memoization
function jumpFrog(totalFeet) {
  function jumps(feet, hash) {
    if (hash[feet]) {
        return hash[feet];
    }
    if (feet === totalFeet) return 1;
    if (feet > totalFeet) return 0;
    var result = jumps(feet + 1, hash) + jumps(feet + 2, hash)
    hash[feet] = result;
    return result;
  }
  return jumps(0, {});
}

// Time Complexity: O(N)
