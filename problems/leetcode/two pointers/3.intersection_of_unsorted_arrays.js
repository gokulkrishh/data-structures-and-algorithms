/* Problem: Find the intersection of two arrays or Given 2 arrays, find all the elements which occur in both the arrays in same number of times.

  Note: Do it without sorting the array

  Example:
    Input :
      A : [1, 3, 2, 3]
      B : [1, 3, 3]

    Output : [1, 3, 3]
*/

// Using for loops and hashmap
function findIntersection1(nums1, nums2) {
  var hash = {};
  for (var i = 0; i < nums1.length; i++) {
    var num = nums1[i];
    if (hash[num]) {
      hash[num] += 1
    }
    else {
      hash[num] = 1
    }
  }

  var temp = [];
  for (var i = 0; i < nums2.length; i++) {
    var num = nums2[i];
    if (hash[num]) {
      hash[num]--;
      temp.push(num);
    }
  }

  return temp;
};

findIntersection1([1, 3, 2, 3], [1, 3, 3, 2]); // [1, 3, 3, 2]

// Using reduce and filter
function findIntersection2(nums1, nums2) {
  var hash = nums1.reduce((hash, num) => {
    hash[num] = hash[num] ? hash[num] + 1 : 1;
    return hash;
  }, {});

  var temp = nums2.filter((num) => {
    if (hash[num]) {
      hash[num]--;
      return true;
    }
    else return false;
  });

  return temp;
};

findIntersection2([1, 3, 2, 3], [1, 3, 3, 2]); // [1, 3, 3, 2]

/* Complexity:

  Time Complexity: O(M+N)

*/
