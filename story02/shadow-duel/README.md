# The Shadow Duel – Battle of Variables

A fierce battle between global and local variables is underway! Write a function called `shadowDuel` where a local variable shadows a global one, named `hero`, and changes the `global` text part to `local` one. You must return the local variable in your function to reveal the power struggle between them, without passing the global variable directly to function!

# Example Operations:

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