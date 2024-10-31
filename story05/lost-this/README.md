# Lost This

You have a function `getValue` inside an object that tries to return an internal property. However, when used as a callback, it loses its context. Fix the code in such a way that call of the `boundGetValue` always refers to the original object.

### Start Code:

```js
const obj = {
  value: 100,
  getValue: function () {
    return this.value;
  },
};
const boundGetValue = obj.getValue; //undefined
console.log(boundGetValue());
```
