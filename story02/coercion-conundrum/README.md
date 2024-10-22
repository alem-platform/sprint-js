# Coercion Conundrum – The Smart Conversion

You are tasked with mastering the art of coercion! Write a function called `smartConversion` that takes three arguments: value, fromType, and toType. The goal is to convert value from its fromType to the toType specified. Make sure your function handles common types like strings, numbers, and booleans gracefully!

Your function should intelligently coerce the value based on the provided types, performing conversions like:

- String to number
- Number to boolean
- Boolean to string

### Example Operations:

```js
smartConversion("123", "string", "number");
// Output: 123

smartConversion(1, "number", "boolean");
// Output: true

smartConversion(false, "boolean", "string");
// Output: "false"
```
