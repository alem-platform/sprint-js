# Slice Array

### Instructions:

Write a function called `sliceArray` that divides the original array into sub-arrays, each having a length equal to the provided size.
If the array cannot be split evenly, the last sub-array should contain the remaining elements.
In case of invalid input values, function should return initial array

### Expected Function:

```js
function sliceArray(array, size) {
  // ...
}
```

### Example:

```js
sliceArray([1, 2, 3, 4, 5], 2);
// Output: [[1, 2], [3, 4], [5]]

sliceArray([10, 20, 30, 40, 50, 60], 3);
// Output: [[10, 20, 30], [40, 50, 60]]

sliceArray(["a", "b", "c", "d"], 5);
// Output: [['a', 'b', 'c', 'd']]
```
