# Smart Array Merger

### Instructions

Create a function called `smartMergeArrays` that combines multiple arrays into a single array with specific handling requirements.

The function should:

- Remove all duplicate values from the final result
- Preserve the original order of elements (first occurrence takes precedence)
- Handle nested arrays by flattening them to a single level
- Support both numbers and strings in the arrays
- Maintain the primitive type of elements (numbers stay as numbers, strings as strings)
- Return a new array without modifying the input arrays

### Expected Function

```js
function smartMergeArrays(...arrays) {
  // Your code here
}
```

### Example

```js
const arr1 = [1, [2, 3], "hello"];
const arr2 = [3, [4, [5]], "hello", 6];
const arr3 = ["world", 1, [7, 8]];

console.log(smartMergeArrays(arr1, arr2, arr3));
console.log(smartMergeArrays([1, "2", 2], ["2", 3, 1]));
console.log(smartMergeArrays([1, [2, [3, 4]]], [[4, 3], 2, 1]));
```

Output:

```bash
[1, 2, 3, "hello", 4, 5, 6, "world", 7, 8]
[1, "2", 2, 3]
[1, 2, 3, 4]
```
