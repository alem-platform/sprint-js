# \*Shadow Wars – Block vs Function Scope Showdown

Write a function `scopeShowdown` that takes an array of mixed numbers and strings, processes it in both function scope (var) and block scope (let, const). The task is to demonstrate hoisting by having variables with the same name in both the block and function scopes. The function should return two values, one from each scope.

### Expected Input/Output:

```js
scopeShowdown([1, "2", 3, "four", 5]);
// Output: { functionScopedResult: 4, blockScopedResult: 6 }
```

### Problem Details:

Use a for loop (function scope) and an if block (block scope).
Modify a variable in both function and block scopes and return both values.
