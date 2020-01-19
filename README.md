# data-structures-and-algorithms

> Materials for learning data structures and algorithms.

## Table of Contents

- [What is analysis of an algorithm?](#what-is-analysis-of-an-algorithm?)
- [Asymptotic analysis](#asymptotic-analysis)
  - [3 cases to analyze an algorithm](./3-cases-to-analyze-an-algorithm)
    - [Best case](./best-case)
    - [Average case](./average-case)
    - [Worst case](./worst-case)

### What is analysis of an algorithm?

To measure the efficiency of an algorithm that doesn’t depend on machine specific constants like single/multiple processor, architecture like 32bit or 64bit etc,.

**How do you analyse it then ?** - Using `Asymptotic Analysis`.

### Asymptotic analysis

The process of finding the computational complexity of an algorithm -- the amount of time, storage, or other resources needed to execute them.

#### 3 cases to analyze an algorithm

- Best case
- Average case
- Worst case

To explain the above cases, let us see an example.

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

#### Average case

For average case analysis, we calculate by taking all inputs and computing the time for all inputs.

**Eg**: For linear search problem, worst case occurs when the target is not present in the given the list.

#### Worst case

For worst case analysis, we calculate the upper bound on the running time of an algorithm. Sum all the calculated values and divide the sum by total number of inputs.

**Eg**: For linear search problem, let us assume we are considering all the cases including the element not present.

### References

- [Analysis of Algorithms](https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/)
