# Password Strength Checker

### Instructions

Write a function called `checkPasswordStrength` that evaluates the strength of a password based on certain criteria.

### Expected Function

```js
function checkPasswordStrength(password) {
  // Your code here
}
```

### Notes

The function should return password strength based on:

- Length criteria:
  - Very Weak: Less than 6 characters
  - Weak: 6-8 characters
  - Medium: 9-12 characters
  - Strong: 13+ characters

Additional criteria that upgrade the strength:

- Contains uppercase letters
- Contains lowercase letters
- Contains numbers
- Contains special characters (!@#$%^&\*()\_+-=[]{}|;:,.<>?)

Rules:

- A password can't be Strong without at least 3 of the additional criteria
- A password can't be Medium without at least 2 of the additional criteria

### Hints

Use regex patterns for each character type
Consider creating separate functions for each check

### Example

```js
console.log(checkPasswordStrength("Pass123!"));
console.log(checkPasswordStrength("weakpass"));
console.log(checkPasswordStrength("StrongP@ssw0rd"));
console.log(checkPasswordStrength("12345"));
```

output:

```bash
Medium
Weak
Strong
Very Weak
```
