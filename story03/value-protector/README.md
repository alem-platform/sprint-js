# Value Protector

Create a function called `scopeGuardian` that returns two inner functions: one to modify a value from the outer scope `increaseTreasure` and another to return the value `revealTreasure`. Give innter scope variable value of 100. You must keep the values safe within the scope!

### Example:

```js
const guard = scopeGuardian();
guard.increaseTreasure(50);
guard.revealTreasure(); // Output: 150
```
