# Has Own IT?

| Expected file |
| ------------- |
| has-own-it.js |

You're given an object `child` that inherits properties from another object `parent`. Create function `hasOwnIt` that checks if a property belongs directly to the child object or or if it is inherited from its prototype.

### Expected Function

```js
function hasOwnIt(obj, checker) {
  // Your code here
}
```

### Starting Code:

```js
const parent = { inheritedProp: "I am inherited" };
const child = Object.create(parent);
child.ownProp = "I am own property";

// you're code here

hasOwnIt(child, "ownProp"); // Output: true
hasOwnIt(child, "inheritedProp"); // Output: false
```
