# Smart Conversion

| Expected file       |
| ------------------- |
| smart-conversion.js |

### Instructions

Write a function called `smartConversion` that takes three arguments: value, fromType, and toType.
Your function should support 3 types of conversions:

- `string` to `number`
- `number` to `boolean`
- `boolean` to `string`

### Expected function:

```js
function smartConversion(value, fromType, toType) {
  //
}
```

### Example:

```js
smartConversion("123", "string", "number");
// Output: 123

smartConversion(1, "number", "boolean");
// Output: true

smartConversion(false, "boolean", "string");
// Output: "false"
```
