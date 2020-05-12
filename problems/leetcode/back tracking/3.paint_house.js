/* Problem: Find the minimum cost to paint all houses.

	Note:
		- There are a row of n houses, each house can be painted with one of the three colors: red, blue or green.
		- The cost of painting each house with a certain color is different.
		- You have to paint all the houses such that no two adjacent houses have the same color.
		- The cost of painting each house with a certain color is represented by a n x 3 cost matrix.

	Example: [[17, 2, 17], [15, 1, 4], [18, 3, 19]]
	Output: 9

	Explanation:
		1. Min cost of painting house 0 is 2
		2. Min cost of painting house 1 is 4, we cannot pick 1 as the neighbors (house 0) has it.
		3. Min cost of painting house 2 is 3;

		Ans: 2 + 4 + 3 = 9

*/

function minCostOfPainting(housesMatrix) {
	if (housesMatrix.length === 0) {
		return 0;
	}

	for (var i = 1; i < housesMatrix.length; i++) {
		housesMatrix[i][0] += Math.min(housesMatrix[i - 1][1], housesMatrix[i - 1][2]);
		housesMatrix[i][1] += Math.min(housesMatrix[i - 1][0], housesMatrix[i - 1][2]);
		housesMatrix[i][2] += Math.min(housesMatrix[i - 1][0], housesMatrix[i - 1][1]);
	}

	var n = housesMatrix.length - 1;
	return Math.min(housesMatrix[n][0], housesMatrix[n][1], housesMatrix[n][2]);
}

var housesMatrix = [
	[17, 2, 17],
	[15, 1, 4],
	[18, 3, 19]
];

minCostOfPainting(housesMatrix); // 9

// Time Complexity: O(N), N is number of houses
// Space Complexity: O(1), as we changed the input matrix
