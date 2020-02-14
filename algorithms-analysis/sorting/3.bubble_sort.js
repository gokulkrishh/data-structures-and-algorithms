/* Problem: Bubble Sort

	Pseudo code:

	1. Start from index 0 to n - 1 in two loops
	2. Compare the currentIndex element with nextIndex element,
	3. If currentIndex element > nextIndex element, swap positions.
	4. If no swapping break the outer loop.
	5. Repeat step 2, 3, 5 until the array is sorted.

*/

function bubbleSort(arr) {
	var swap = false;

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}

		if (!swap) break;
	}

	return arr;
}

bubbleSort([3, 4, 5, 2, 1]);

// Time Complexity: O(N^2)
// Space Complexity: O(1)
