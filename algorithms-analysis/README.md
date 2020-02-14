## Table of Contents

- [Analysis of an algorithm](#analysis-of-an-algorithm)
- [Asymptotic analysis](#asymptotic-analysis)
  - [Best case](#1-best-case)
  - [Average case](#2-average-case)
  - [Worst case](#3-worst-case)
- [Asymptotic notations](#asymptotic-notations)
  - [Theta notation](#1-theta-notation-θ---best-case)
  - [Omega notation](#2-omega-notation-ω---average-case)
  - [BigO notation](#3-bigo-notation-o---worst-case)
- [Time complexity](#time-complexity)
  - [Time complexity table](#time=complexity-table)
- [Space complexity](#space-complexity)

### Analysis of an algorithm

To measure the efficiency of an algorithm that doesn’t depend on machine specific constants like single/multiple processor, architecture like 32bit or 64bit etc,.

**How do you analyse it then ?**

Using `asymptotic analysis`.

### Asymptotic Analysis

The process of finding the computational complexity of an algorithm -- the amount of time, storage, or other resources needed to execute the solution.

##### There are 3 cases in algorithm analysis:

1. Best case
2. Average case
3. Worst case

#### 1. Best case

For best case analysis, we calculate the lower bound on the running time of an algorithm.

To explain the above cases, let us see an example.

##### Example:

```js
function linearSearch(list, target) {
	for (var i = 0; i < list.length; i++) {
		if (list[i] === target) {
			return i; // if found return index `i`
		}
	}

	return -1; // if not found return `-1`
}

linearSearch([1, 5, 6, 7, 8, 9, 10, 11], 10);
```

###### For linear search problem, best case occurs when the target is found at the first location of the list.

##### Time Complexity: **`Θ(1)`**

> Note: **`Θ`** is pronounced as Theta. More on this later.

#### 2. Average case

For average case analysis, we calculate by taking all inputs and computing the time for all inputs.

###### For linear search problem, worst case occurs when the target is not present in the given the list.

##### Time Complexity: **`Ω(N)`**

> Note: **`Ω`** is pronounced as Omega.

#### 3. Worst case

For worst case analysis, we calculate the upper bound on the running time of an algorithm. Sum all the calculated values and divide the sum by total number of inputs.

###### For linear search problem, let us assume we are considering all the cases including the element not present.

##### Time Complexity: **`O(N)`**

> Note: **`O`** is pronounced as BigO.

##### What is time complexity? How do you represent it? - Using **`Asymptotic notations`**.

### Asymptotic notations

Asymptotic notations are mathematical tools to represent the **time complexity** of algorithms for asymptotic analysis.

There are 3 types of asymptotic notations:

1. Theta notation (Θ)
2. Omega notation (Ω)
3. BigO notation (O)

#### 1. Theta notation (Θ) - (**Best Case**)

Theta notation bounds the function above and below and can be deduced by dropping the lower order terms and ignoring leading constants. This is least used notation among all three. Since best case of an algorithm is generally not useful.

##### Example:

**`3(N^2) + 2(N^3) + 1`** = **`Θ(N^3)`** (Lower bound is N^2 and constants are the whole numbers in the equation)

#### 2. Omega notation (Ω) - (**Average Case**)

Omega notation defines the lower bound of an algorithm. Similar to the best case, average case is not very useful. We should be more interested in **worst case**.

#### 3. BigO notation (O) - (**Worst Case**)

BigO notation defines the upper bound of an algorithm. It bounds the function only from above unlike `Theta notation` which takes both above and below.

##### Example:

**`5(N^2) + 2(N) + 1`** = **`O(N^2)`**

Lets say,

**`O(g(n))`** = { **`f(n): there exists constants c and n0, f(n) <= c times g(n), for all n >= n0`** }

##### Example:

If **`f(n)`** = **`5(N^2) + 2(N) + 1`** is equivalent to **`O(N^2)`**

then **`g(n)`** = **`(N^2)`**

where

**`c`** = **`8`** which is (5 + 2 + 1), **`f(n) <= 8(N^2), n >= 1`**

**`n0`** = **`1`**

### Time complexity

Time complexity is **rate of growth of time with respect to the inputs** taken during the execution time.

##### Example 1:

```js
function sumOfTwoNumbers(a, b) {
	return a + b;
}
```

When I run the above example 1 problem's the complexity is `O(1)`. Because no matter how big you inputs are it will take constant time to return the sum.

##### Example 2:

```js
function sumOfList(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++>) {
    total += list[i] ;
  }

  return total;
}
```

When I run the above example 2, the problem is gone take `N` times to get the total where `N` is number of items. So the time complexity is `O(N)`.

### Time complexity table:

| Big O          | Run Time    | 🤔  |
| -------------- | ----------- | --- |
| `O(1)`         | Constant    | 😃  |
| `O(log n)`     | Logarithmic | 😀  |
| `O(n)`         | Linear      | 🥺  |
| `O(n * log n)` | Log Linear  | 😣  |
| `O(n^2)`       | Quadratic   | 😖  |
| `O(n ^ 3)`     | Cubic       | 😫  |
| `O(2n)`        | Exponential | 😷  |
| `O(n!)`        | Factorial   | 😭  |

### Space complexity

Space complexity is measure of how efficient your code is in terms of memory usage when it runs.

> We can measure it by finding the largest memory used by the solution.

##### Example 1:

```js
function sumOfList(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++>) {
    total += list[i] ;
  }

  return total;
}
```

When I run the above example 1, space complexity is `O(N)` because your solution is going to store `N` times total in a variable.

##### References:

- [Analysis of algorithms - Part 1](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)
- [Analysis of Algorithms - Part 2](https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/)
- [Analysis of Algorithms - Part 3](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/)
- [Time Complexity](https://www.interviewbit.com/courses/programming/topics/time-complexity/)
- [Space Complexity](https://www.interviewbit.com/tutorial/space-complexity/)
