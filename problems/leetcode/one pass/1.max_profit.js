/* Problem: Given a array of numbers representing the stock prices of a company in chronological order,
		write a function that calculates the maximum profit you could have made from buying and selling that stock once.
		You must buy before you can sell it.


	Example:
		Input: [9, 11, 8, 5, 7, 10]
		Output: 5

		Explanation: min buy is 5 and max sell is 10 so profit is 5

		Input: [7,6,4,3,1]
		Output: 0

		Explanation: No profit

*/

// Solution 1: Using double iteration
function maxProfit(arr) {
	var maxProfit = 0;

	if (arr.length === 0) {
		return maxProfit;
	}

	var i = 0;

	while (i < arr.length) {
		var j = i + 1;
		while (j < arr.length) {
			var diff = arr[j] - arr[i];
			if (diff > maxProfit) {
				maxProfit = diff;
			}

			j++;
		}

		i++;
	}

	return maxProfit;
}

maxProfit([9, 11, 8, 5, 7, 10]); // 5
maxProfit([14, 13, 12, 11]); // 0

// Time Complexity: O(N * N - 1 / 2)
// Space Complexity: O(1)

// Solution 2: One pass
function maxProfit(arr) {
	var minBuy = Infinity;
	var maxProfit = 0;
	var i = 0;

	if (arr.length === 0) {
		return profit;
	}

	while (i < arr.length) {
		if (arr[i] < minBuy) {
			minBuy = arr[i];
		} else if (arr[i] - minBuy > maxProfit) {
			maxProfit = arr[i] - minBuy;
		}

		i++;
	}

	return maxProfit;
}

maxProfit([9, 11, 8, 5, 7, 10]); // 5
maxProfit([14, 13, 12, 11]); // 0

// Time Complexity: O(N)
// Space Complexity: O(1)
