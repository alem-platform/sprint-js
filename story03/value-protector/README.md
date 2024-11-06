# Value Protector

| Expected file      |
| ------------------ |
| value-protector.js |

### Instructions:

Write a function called `scopeGuardian` that manages a value using two inner functions: `increase` to modify the value and `reveal` to access it.

- The outer function `scopeGuardian` should initialize a `value` to 100.
- It should return two inner functions:
  1. `increase(amount)`: Increases value by the given amount.
  2. `reveal()`: Returns the current value.
- `value` should not be accessible outside the scope of `scopeGuardian`.

### Example:

```js
const guard = scopeGuardian();
guard.increase(50);
guard.reveal(); // Output: 150
```
