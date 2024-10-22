# The Shadow Duel – Battle of Variables

A fierce battle between global and local variables is underway! Write a function called `shadowDuel` where a local variable shadows a global one, named as `hero`, and changes the `global` text part to `local` one. You must return local variable in your function to reveal the power struggle between them, without passing global variable directly to function!

# Example Operation:

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
