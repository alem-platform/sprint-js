# Ultimate Accumulator

Write a function called `reduceSummoner` that replicates the functionality of the built-in `reduce` method. This function should take an array, a callback function, and an initial value, then accumulate values into a single result based on the logic provided in the callback—without using the built-in reduce method.

### Instructions:

- Your function should iterate through each element in the array and apply the callback function to accumulate the result.
- Parameters:
  1. array: An array of any values (numbers, strings, objects, etc.).
  2. callback: A function that takes two arguments: the accumulator (the running total) and the current element.
  3. initialValue: The initial value to start accumulating from.

### Example:

```js
reduceSummoner([1, 2, 3, 4], (acc, num) => acc + num, 0);
// Output: 10
```
