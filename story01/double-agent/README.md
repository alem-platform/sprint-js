# Double Agent

You’ve been tasked to double the values in a series of numbers while ensuring that their original form remains untouched. As the Double Agent, your mission is to create an identical clone of the array, and only then, double the values within it.

### Instructions:

Create a function called `doubleAgent` that accepts an array of numbers and returns a new array where each number has been doubled. The original array must remain unchanged!

Target Array: You will receive an array of numbers, and your mission is to double each value.
Stealth Mode: Ensure the original array is not modified — use non-mutative methods to create a new array with doubled values.
Return the Clone: The function will return the new array with the updated values, leaving the original untouched.

### Example:

```js
doubleAgent([1, 2, 3]);
// Output: [2, 4, 6]

doubleAgent([10, 20, 30]);
// Output: [20, 40, 60]

doubleAgent([5, 15, 25]);
// Output: [10, 30, 50]
```
