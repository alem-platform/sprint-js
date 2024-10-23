# Arrow Escape

Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.

However, you asked to write a method inside an object `obj` that uses both a regular function and an arrow function. Inside the arrow function, access the `this` value from the outer function.

It is mandatory to use the arrow function to solve the problem!

### Start Code:

```js
const obj = {
  value: "arrowPower",
  getValue: // your code here
};

console.log(obj.getValue()); // Output: 'arrowPower'
```
