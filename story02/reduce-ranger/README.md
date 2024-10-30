# Reduce Ranger

Unite the elements into a single force using the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method. Your task is to determine whether any element in the array meets the condition of your callback.

### Instructions:

Create a function called `reduceRangers` that takes three arguments:

1. An array: The set of elements you’ll be combining.
2. A callback function: The accumulation logic.
3. An initial value: The starting point for your accumulation.

The function will return a single value, the result of combining all elements.

### Example:

```js
reduceRangers([1, 2, 3, 4], (sum, num) => sum + num, 0);
// Output: 10

reduceRangers(["a", "b", "c"], (acc, letter) => acc + letter, "");
// Output: 'abc'
```
