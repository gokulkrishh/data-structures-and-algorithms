/* Problem: Insertion Sort

	Pseudo code:

	1. Start from index 1 to n - 1 in two loops
  2. Compare i - 1 in array with next element, If previous element is > next element,
  3. Swap the small element with next bigger element.

*/

function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var current = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
	}

	return arr;
}

insertionSort([3, 5, 4, 1, 2]); // [1, 2, 3, 4, 5]

// Time Complexity: O(N^2)
// Space Complexity: O(1)
