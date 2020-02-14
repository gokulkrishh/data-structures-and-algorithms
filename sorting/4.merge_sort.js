/* Problem: Merge Sort

	Pseudo code:

	1. Divide the array into 2 sub array halves. (Divide and Conquer)
  2. If array length is < 2, then it is already sorted, So return it.
  2. Sort each sub array halves recursively by calling mergeSort() again.
  3. Then merge two sub array into one sorted array using doSorting() method.

*/

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var median = Math.floor(arr.length / 2);

	var leftArr = arr.slice(0, median);
	var arrRight = arr.slice(median, arr.length);

	return doSorting(mergeSort(leftArr), mergeSort(arrRight));

	function doSorting(arrLeft, arrRight) {
		var tempArr = [];

		while (arrLeft.length && arrRight.length) {
			if (arrLeft[0] > arrRight[0]) {
				tempArr.push(arrRight.shift());
			} else {
				tempArr.push(arrLeft.shift());
			}
		}

		while (arrLeft.length) {
			tempArr.push(arrLeft.shift());
		}

		while (arrRight.length) {
			tempArr.push(arrRight.shift());
		}

		return tempArr;
	}
}

mergeSort([5, 3, 2, 4, 1]); // [1, 2, 3, 4, 5]

// Time Complexity: O(N Log N)
// Space Complexity: O(N)
