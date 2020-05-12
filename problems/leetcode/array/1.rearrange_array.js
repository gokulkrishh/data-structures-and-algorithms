/* Problem: Rearrange an array so that arr[i] becomes arr[arr[i]] with O(1) extra space

  Given an array arr[] of size n where every element is in range from 0 to n-1.
  Rearrange the given array so that arr[i] becomes arr[arr[i]]. This should be done with O(1) extra space.

  Example:

  Input: arr[]  = {3, 2, 0, 1}
  Output: arr[] = {1, 0, 3, 2}

  Input: arr[] = {4, 0, 2, 1, 3}
  Output: arr[] = {3, 4, 2, 0, 1}

  Input: arr[] = {0, 1, 2, 3}
  Output: arr[] = {0, 1, 2, 3}

*/

// Solution #1 with extra O(N) space
function rearrangeArray(arr) {
	var temp = [];

	arr.forEach((e, i) => {
		temp[i] = arr[e];
	});

	return temp;
}

rearrangeArray([3, 2, 0, 1]); // [1, 0, 3, 2]

/* Complexity:
  Time Complexity: O(n)
  Space Complexity; O(n)
*/

// Solution #2
function rearrangeArray(arr) {
	if (arr.length === 0) return arr;

	var n = arr.length;

	for (var i = 0; i < n; i++) {
		arr[i] += (arr[arr[i]] % n) * n; // % by n and * by n will give me a new value.
	}

	for (var i = 0; i < n; i++) {
		arr[i] = parseInt(arr[i] / n); // dividing by n will be the ans and % by n will the old value.
	}

	return arr;
}

rearrangeArray([3, 2, 0, 1]); // [1, 0, 3, 2]

/* Complexity:
  Time Complexity: O(n)
  Auxiliary Space: O(1)
  Space Complexity; O(n)
*/
