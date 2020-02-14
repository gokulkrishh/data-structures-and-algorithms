/* Problem: Binary Search

	**: Given array should be in sorted order in order for binary search work.

	Pseudo code:

	1. Start with low and high index of arr.
	2. if low <= high, iterate the arr based on condition
	3. mid = low + high / 2
	4. if target is same arr[mid], return mid index;
	5. if target is > arr[mid] then target lies after the mid index, so increase low = mid + 1;
	6 else target lies below mid index, so do high = mid - 1
	7. If low becomes greater than high that means target is not present in given arr.

*/

function binarySearch(arr, target) {
	var low = 0;
	var high = arr.length;

	while (low <= high) {
		var mid = Math.floor((low + high) / 2);

		if (target === arr[mid]) {
			return mid;
		}

		if (target > arr[mid]) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}

binarySearch([1, 2, 3, 4, 6, 8, 9, 11, 12], 9); // 6

// Time Complexity: O(log n)
// Space Complexity: O(1)
