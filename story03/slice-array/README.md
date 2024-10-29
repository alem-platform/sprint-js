# Slice Array

Write a function called `sliceArray` that performs the following:

### Parameters:

1. array: An array of any values (strings, numbers, objects, etc.).
2. size: An integer that specifies the number of elements each sub-array should contain.

### Functionality:

Divide the original array into sub-arrays, each having a length equal to the provided size.
If the array cannot be split evenly, the last sub-array should contain the remaining elements.

### Instructions:

The function should always return an array of arrays.
Each sub-array should have the specified length (except the last, which may have fewer elements if the original array doesn't divide evenly).

### Example:

```js
sliceArray([1, 2, 3, 4, 5], 2);
// Output: [[1, 2], [3, 4], [5]]

sliceArray([10, 20, 30, 40, 50, 60], 3);
// Output: [[10, 20, 30], [40, 50, 60]]

sliceArray(["a", "b", "c", "d"], 5);
// Output: [['a', 'b', 'c', 'd']]
```
