# Closure Manipulator

### Instructions:

Write a function `closureManipulator` that returns a closure capable of modifying a variable defined two levels above its scope. The outer variable should not be directly referenced, and you must use closure chains to achieve this.

### Requirements:

- The outer variable will be defined within the `closureManipulator` function.
- Return a function `modifyOuter` from `closureManipulator` that can modify the outer variable through inner closures.
- Avoid passing the outer variable directly into the inner functions.

### Starting Code:

```js
function closureManipulator() {
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
const closure = closureManipulator();
console.log(closure.getOuterVariable()); // Output: "Initial Value"
closure.modifyOuter();
console.log(closure.getOuterVariable()); // Output: "Modified Value"
```
