# Date Format Converter

| Expected file            |
| ------------------------ |
| date-format-converter.js |

### Instructions

Write a function `convertDateFormat` that converts dates from one format to another.

The function should:

- Support formats: `DD/MM/YYYY`, `MM-DD-YYYY`, `YYYY.MM.DD`, `YYYY/MM/DD`
- Handle different separators (/, -, .)
- Validate input date format
- Return "Invalid Date" for invalid inputs

### Resourses

- [Array.prototype.indexOf()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Array.prototype.split()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

### Expected Function

```js
function convertDateFormat(date, fromFormat, toFormat) {
  // Your code here
}
```

### Example

```js
console.log(convertDateFormat("23/01/2024", "DD/MM/YYYY", "MM-DD-YYYY")); // 01-23-2024
console.log(convertDateFormat("2024.01.23", "YYYY.MM.DD", "DD/MM/YYYY")); //23/01/2024
console.log(convertDateFormat("01-23-2024", "MM-DD-YYYY", "YYYY/MM/DD")); // 2024/01/23
console.log(convertDateFormat("invalid", "DD/MM/YYYY", "MM-DD-YYYY")); // Invalid Date
```
