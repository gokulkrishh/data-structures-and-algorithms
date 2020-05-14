/* Problem: Given a NxM matrix by rotate it by 90 deg.

Example:
	Input: [[1,2,3], [4,5,6], [7,8,9]]
	Output: [[7,4,1], [8,5,2], [9,6,3]]

*/

// Solution  1 - In place rotating by moving the items in edges and go towards inside

function rotateMatrix(matrix) {
	for (var i = 0; i < matrix.length / 2; i++) {
		var last = matrix.length - 1 - i;
		for (var j = i; j < last; j++) {
			var offset = j - i;
			var top = matrix[i][j];
			matrix[i][j] = matrix[last - offset][i];
			matrix[last - offset][i] = matrix[last][last - offset];
			matrix[last][last - offset] = matrix[j][last];
			matrix[j][last] = top;
		}
	}

	return matrix;
}

rotateMatrix([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]);

/*
Output: [
	[7, 4, 1],
	[8, 5, 2],
	[9, 6, 3]
]
*/

// Time Complexity: O(N*M)
// Space Complexity: O(1)
