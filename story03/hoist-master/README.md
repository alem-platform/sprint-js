# Hoist Master

Write a function called `hoistMaster` that demonstrates key JavaScript hoisting concepts.

### Instructions:

1. Function Hoisting:

Call a function named `magicFunction` before it is defined in the code.
Define `magicFunction` afterward, with a body that logs "I'm a hoisted function!", showing how function declarations are hoisted to the top of their scope.

2. Variable Hoisting:

Reference a variable `magicVar` before it’s declared.
Hoisting will lift its declaration to the top of the scope, but not its assignment, so its initial value will be undefined.

3. Conditional Logic:

Use an if condition that checks `magicVar` and modifies it based on its hoisted, initial value (undefined).

4. Return Statement:

The function should return `magicVar` after it’s been conditionally modified.

```js
function hoistMaster() {
  // Call magicFunction here
  // Use magicVar before declaring it
  // Function and variable definitions follow
}
```
