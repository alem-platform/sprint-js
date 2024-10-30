# Value Protector

Create a function called `scopeGuardian` that returns two inner functions: `increaseTreasure` to modify a value defined in the outer scope and `revealTreasure` to return the current value. The initial treasure value should be set to 100. Keep the treasure secure within the scope!

### Instructions:

- The outer function scopeGuardian should initialize a treasure value to 100.
- It should return two inner functions:
  1. `increaseTreasure(amount)`: Increases treasure by the given amount.
  2. `revealTreasure()`: Returns the current treasure value.
- treasure should not be accessible outside the scope of `scopeGuardian`.

### Example:

```js
const guard = scopeGuardian();
guard.increaseTreasure(50);
guard.revealTreasure(); // Output: 150
```
