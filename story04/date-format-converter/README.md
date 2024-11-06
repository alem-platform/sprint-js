# Date Format Converter

### Instructions|

| Expected file        |
| -------------------- |
| date-format-converter.js   |

Write a function called `convertDateFormat` that converts dates between different formats.

The function should:

- Support formats: DD/MM/YYYY, MM-DD-YYYY, YYYY.MM.DD, YYYY/MM/DD
- Handle different separators (/, -, .)
- Validate input date format
- Return "Invalid Date Format" for invalid inputs
- Properly handle single digit months and days

### Expected Function

```js
function convertDateFormat(date, fromFormat, toFormat) {
  // Your code here
}
```

### Example

```js
console.log(convertDateFormat("23/01/2024", "DD/MM/YYYY", "MM-DD-YYYY"));
console.log(convertDateFormat("2024.01.23", "YYYY.MM.DD", "DD/MM/YYYY"));
console.log(convertDateFormat("01-23-2024", "MM-DD-YYYY", "YYYY/MM/DD"));
console.log(convertDateFormat("invalid", "DD/MM/YYYY", "MM-DD-YYYY"));
```

output:

```bash
01-23-2024
23/01/2024
2024/01/23
Invalid Date Format
```
