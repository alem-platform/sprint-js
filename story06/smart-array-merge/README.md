# Smart Array Merger

| Expected file          |
| ---------------------- |
| `smart-array-merge.js` |

### Instructions

### Instructions

Create a function called `smartMergeArrays` that combines multiple arrays into a single array with specific handling requirements.

The function should:

- Remove all duplicate values from the final result
- Preserve the original order of elements (first occurrence takes precedence)
- Handle nested arrays by flattening them to a single level
- Support both numbers and strings in the arrays
- Return a new array without modifying the input arrays

### Expected Function

```js
function smartMergeArrays(...arrays) {
  // Your code here
}
```

### Resources

- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Example

```js
const arr1 = [1, [2, 3], "hello"];
const arr2 = [3, [4, [5]], "hello", 6];
const arr3 = ["world", 1, [7, 8]];

console.log(smartMergeArrays(arr1, arr2, arr3)); // [1, 2, 3, "hello", 4, 5, 6, "world", 7, 8]
console.log(smartMergeArrays([1, "2", 2], ["2", 3, 1])); // [1, "2", 2, 3]
console.log(smartMergeArrays([1, [2, [3, 4]]], [[4, 3], 2, 1])); // [1, 2, 3, 4]
```
