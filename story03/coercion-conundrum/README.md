# Coercion Conundrum

### Instructions

Write a function called `smartConversion` that takes three arguments: value, fromType, and toType. The goal is to convert value from its fromType to the toType specified.

Your function should intelligently coerce the value based on the provided types, performing conversions:

- String to number
- Number to boolean
- Boolean to string

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
