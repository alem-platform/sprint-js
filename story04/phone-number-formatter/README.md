# Phone Number Formatter

### Instructions

Write a function called `formatPhoneNumber` that formats phone numbers into a standardized format.

### Expected Function

```js
function formatPhoneNumber(phone) {
  // Your code here
}
```

The function should format phone numbers according to these rules:

- 10-digit numbers: (XXX) XXX-XXXX
- 11-digit numbers (starting with 1): +1 (XXX) XXX-XXXX
- Remove all non-numeric characters from input before processing
- Return 'Invalid phone number' for invalid inputs

Valid inputs:

- Must be either 10 digits or 11 digits starting with 1
- May contain spaces, dashes, dots, and parentheses
- Maximum input length: 20 characters

### Example

```js
console.log(formatPhoneNumber("1234567890"));
console.log(formatPhoneNumber("11234567890"));
console.log(formatPhoneNumber("123-456-7890"));
console.log(formatPhoneNumber("12345"));
```

output:

```bash
(123) 456-7890
+1 (123) 456-7890
(123) 456-7890
Invalid phone number
```
