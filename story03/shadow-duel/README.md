# The Shadow Duel

Write a function called `shadowDuel` where a local variable with the same name as a global variable, `hero`, shadows the global one. Inside `shadowDuel`, the local `hero` should replace the text "global" with "local" and return the modified value, showing the "power struggle" between the global and local scopes. Do not pass the global variable directly into the function.

### Instructions

- In `shadowDuel`, declare a local variable named `hero` that shadows the global one.
- Modify the local `hero` variable, changing "global" to "local", and return it.

# Example:

```js
const hero = "globalHero";
shadowDuel();
// Output: 'localHero'
```

```js
const hero = "global";
shadowDuel();
// Output: 'local'
```
