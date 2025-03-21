# Email Validator

### Instructions

| Expected file      |
| ------------------ |
| email-validator.js |

Write a function called `isValidEmail` that validates email addresses based on specific rules.

Your function must follow rules:

- Must contain exactly one '@' symbol
- Local part (before @):

  - Length: 1-64 characters
  - Allowed characters: letters (a-z, A-Z), numbers, and .!#$%&'\*+-/=?^\_`{|}~
  - Cannot start or end with a dot
  - Cannot have consecutive dots

- Domain part (after @):

  - Length: 1-255 characters
  - Allowed characters: letters, numbers, dots, and hyphens
  - Cannot start or end with a dot or hyphen
  - Top-level domain must be at least 2 characters

Consider using Regular Expressions (regex) for validation

### Expected Function

```js
function isValidEmail(email) {
  // Your code here
}
```

### Example

```js
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("user.name+tag@example.co.uk")); // true
console.log(isValidEmail(".user@example.com")); // false
console.log(isValidEmail("user@.com")); // false
```
