# Value Protector

### Instructions:

Write a function called scopeGuardian that securely manages a value using two inner functions: `increaseValue` to modify the value and `revealValue` to access it.

- The outer function scopeGuardian should initialize a treasure value to 100.
- It should return two inner functions:
  1. `increaseValue(amount)`: Increases treasure by the given amount.
  2. `revealValue()`: Returns the current treasure value.
- `value` should not be accessible outside the scope of `scopeGuardian`.

### Example:

```js
const guard = scopeGuardian();
guard.increaseValue(50);
guard.revealValue(); // Output: 150
```
