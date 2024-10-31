# The Mirror Issue

### Instructions

Write a function called `mirrorIssue` where a local variable with the same name as a global variable, `hero`, shadows the global one. Inside `mirrorIssue`, the local `hero` should replace the text "global" with "local" and return the modified value, showing the "power struggle" between the global and local scopes.

- In `mirrorIssue`, declare a local variable named `hero`.
- Modify the local `hero` variable, by replacing the text "global" with "local" and return the modified value.

### Starting Code:

```js
var hero = "...";
var mirrorIssue = function () {
  var hero;
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
