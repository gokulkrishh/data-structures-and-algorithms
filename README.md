# data-structures-and-algorithms

> Basics for learning data structures and algorithms.

## Table of Contents

- [Analysis of an algorithm](#analysis-of-an-algorithm)
- [Asymptotic analysis](#asymptotic-analysis)
  - [3 cases to analyze an algorithm](#3-cases-in-algorithm-analysis)
    - [Best case](#best-case)
    - [Average case](#average-case)
    - [Worst case](#worst-case)
- [Asymptotic notations](#asymptotic-notations)
  - [Theta notation](theta-notation-θ---best-case)
  - [Omega notation](#omega-notation-ω---average-case)
  - [BigO notation](bigo-notation-o---worst-case)

### Analysis of an algorithm

To measure the efficiency of an algorithm that doesn’t depend on machine specific constants like single/multiple processor, architecture like 32bit or 64bit etc,.

**How do you analyse it then ?**

Using `asymptotic analysis`.

### Asymptotic Analysis

The process of finding the computational complexity of an algorithm -- the amount of time, storage, or other resources needed to execute the solution.

#### 3 cases in algorithm analysis

- Best case
- Average case
- Worst case

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

#### Best case

For best case analysis, we calculate the lower bound on the running time of an algorithm.

**Eg**: For linear search problem, best case occurs when the target is found at the first location of the list.

Time Complexity: **`O(1)`**

> Note: Here **`O`** (pronounced as BigO) is called **asymptotic notation**. More on this later.

#### Average case

For average case analysis, we calculate by taking all inputs and computing the time for all inputs.

**Eg**: For linear search problem, worst case occurs when the target is not present in the given the list.

Time Complexity: **`O(N)`**

#### Worst case

For worst case analysis, we calculate the upper bound on the running time of an algorithm. Sum all the calculated values and divide the sum by total number of inputs.

**Eg**: For linear search problem, let us assume we are considering all the cases including the element not present.

Time Complexity: **`O(N)`**

### Asymptotic notations

Asymptotic notations are mathematical tools to represent the **time complexity** of algorithms for asymptotic analysis.

There are 3 types of asymptotic notations:

- Theta notation
- Omega notation
- BigO notation

#### Theta notation (Θ) - (**Best Case**)

Theta (Θ) notation bounds the function above and below and can be deduced by dropping the lower order terms and ignoring leading constants. This is least used notation among all three. Since best case of an algorithm is generally not useful.

##### Example:

**`3(N^2) + 2(N^3) + 1`** = **`Θ(N^3)`**

#### Omega notation (Ω) - (**Average Case**)

Omega (Ω) notation provides an asymptotic lower bound for an algorithm. Similar to the best case, average case is not very useful. We should be more interested in **worst case**.

#### BigO notation (O) - (**Worst Case**)

BigO (O) notation defined the upper bound of an algorithm. It bounds the function only from above unlike Theta notation which takes both above and below.

##### Example:

**`5(N^2) + 2(N) + 1`** = **`O(N^2)`**.

Lets say,

**`O(g(n))`** = { **`f(n): there exists constants c and n0, f(n) <= c times g(n), for all n >= n0`** }

##### Example:

If **`f(n)`** = **`5(N^2) + 2(N) + 1`** is equivalent to **`O(N^2)`**

then **`g(n)`** = **`(N^2)`**

where

**`c`** = **`8`** which is (5 + 2 + 1), **`f(n) <= 8(N^2), n >= 1`**

**`n0`** = **`1`**

##### References:

- [Analysis of algorithms - Part 1](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)
- [Analysis of Algorithms - Part 2](https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/)
- [Analysis of Algorithms - Part 3](https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/)
- [Time Complexity](https://www.interviewbit.com/courses/programming/topics/time-complexity/)
