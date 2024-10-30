# Scope Sniper

### Instructions:

Write a function `scopeSniper` that takes a nested closure and modifies a variable two levels above its scope without directly referencing it. You must use closure chains to carefully manipulate a variable defined in the outermost function but only through inner closures.

Implement a function `scopeSniper` that can modify the outermost variable (from the global scope) through inner closures.
Avoid passing the outer variable directly into the inner functions.

### Expected function:

```js
function scopeSniper() {
  // two nested levels here
}
```

### Example:

```js
const sniper = scopeSniper();
sniper();
// Output: Outer variable is modified by closures without direct access.
```
