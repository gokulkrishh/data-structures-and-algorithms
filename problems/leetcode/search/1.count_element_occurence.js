/* Problem: Given a sorted array of integers, find the number of occurrences of a given target value.

  Hint: Your algorithm’s runtime complexity must be in the order of O(log n). If the target is not found in the array, return 0.

  Example:

  Input: [5, 7, 7, 8, 8, 10] and target value 8

  Output: 2

*/

function elementOccurence(arr, target) {
  if (arr.length === 0) return 0;

  var firstIndex = -1;
  var lastIndex = -1;
  var count = 0;
  var mid = Math.floor(arr.length / 2);

  while (mid < arr.length) {
    if (arr[mid] == target) {
      firstIndex = mid - 1;
      lastIndex = mid + 1;
      count++;
      break;
    } else if (arr[mid] > target) {
      mid--;
    } else mid++;
  }

  while (firstIndex > -1) {
    if (arr[firstIndex] === target) {
      count++;
      firstIndex--;
    } else break;
  }

  while (lastIndex < arr.length) {
    if (arr[lastIndex] === target) {
      count++;
      lastIndex++;
    } else break;
  }

  return count;
}

elementOccurence([5, 7, 7, 8, 8, 10], 8); // 2

// Complexity: Time Complexity: O(LOG N)
// Space: O(1)
