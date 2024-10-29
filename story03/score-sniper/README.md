# Scope Sniper

Write a function `scopeSniper` that takes a nested closure and modifies a variable two levels above its scope without directly referencing it. You must use closure chains to carefully manipulate a variable defined in the outermost function but only through inner closures.

### Instructions:

Implement a function that can modify the outermost variable (from the global scope) through inner closures.
Avoid passing the outer variable directly into the inner functions.

### Example:

```js
const sniper = scopeSniper();
sniper();
// Output: Outer variable is modified by closures without direct access.
```
