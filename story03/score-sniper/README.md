# Scope Sniper

### Instructions:

Write a function `scopeSniper` that returns a closure capable of modifying a variable defined two levels above its scope. The outer variable should not be directly referenced, and you must use closure chains to achieve this.

### Requirements:

- The outer variable will be defined within the `scopeSniper` function.
- Return a function `modifyOuter` from `scopeSniper` that can modify the outer variable through inner closures.
- Avoid passing the outer variable directly into the inner functions.

### Staring Code:

```js
function scopeSniper() {
  let outerVariable = "Initial Value";

  function modifyOuter() {
    // inner function for closure chains implementation
  }

  return {
    modifyOuter,
    getOuterVariable: () => outerVariable,
  };
}
```

### Example:

```js
const sniper = scopeSniper();
console.log(sniper.getOuterVariable()); // Output: "Initial Value"
sniper.modifyOuter();
console.log(sniper.getOuterVariable()); // Output: "Modified Value"
```
