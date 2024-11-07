# Phone Number Formatter

### Instructions

| Expected file             |
| ------------------------- |
| phone-number-formatter.js |

Write a function called `formatPhoneNumber` that formats phone numbers into a standardized format.

The function should format phone numbers according to these rules:

- 11-digit numbers (starting with 7): +7 (XXX) XXX-XX-XX
- Remove all non-numeric characters from input before processing
- Return 'Invalid phone number' for invalid inputs

### Expected Function

```js
function formatPhoneNumber(phone) {
  // Your code here
}
```

### Example

```js
console.log(formatPhoneNumber("+7 (777) 123-45-67")); // +7 (777) 123-45-67
console.log(formatPhoneNumber("7771234567")); // +7 (777) 123-45-67
console.log(formatPhoneNumber("8 (777) 123.45.67")); // Invalid phone number
console.log(formatPhoneNumber("7-777-123-45-67")); // +7 (777) 123-45-67
console.log(formatPhoneNumber("777123456789")); // Invalid phone number
```
