/* Problem: Selection Sort

	Pseudo code:

	1. Start from index = 0 to n - 1 in two loops
	2. Compare the currentIndex element with nextIndex element.
	3. If currentIndex element > nextIndex element, swap positions
	4. Repeat step 2 & 3 until the array is sorted.

*/

function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
}

selectionSort([3, 5, 4, 2, 1]); // [1, 2, 3, 4, 5]

// Time Complexity: O(N^2)
// Space Complexity: O(1)
