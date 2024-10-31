# The Mirror Issue

### Instructions

Write a function called `mirrorIssue` where a local variable with the same name as a global variable, `hero`, shadows the global one. Inside `mirrorIssue`, the local `hero` should replace the text "global" with "local" and return the modified value, showing the "power struggle" between the global and local scopes. Do not pass the global variable directly into the function.

- In `mirrorIssue`, declare a local variable named `hero` that shadows the global one.
- Modify the local `hero` variable, changing "global" to "local", and return it.

### Starting Code:

```js
var mirrorIssue = function () {
  var hero = "";
  // ...
  return hero;
};
```

### Example:

```js
var hero = "globalHero";
mirrorIssue();
// Output: 'localHero'
```

```js
var hero = "global";
mirrorIssue();
// Output: 'local'
```
