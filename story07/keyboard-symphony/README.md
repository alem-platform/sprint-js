# Keyboard Symphony

| Expected file        |
| -------------------- |
| keyboard-symphony.js |

Learn DOM manipulation through keyboard events.

### Instructions:

Write a function named `playNote` that:

- Highlights a note with the coressponding color when specific keyboard keys (a, s, d, f, g, h, j) are pressed, and assign corresponding div with `active` class.
- Removes the highlight when the key is released, and remove `active` class.

You're provided with starting HTML, CSS and JS codes, which can be used to write your code and test your solution. You can freely create your own HTML and CSS files without being tied to provided ones:

```js
const instrumentColors = {
  piano: {
    do: "#FF6B6B",
    re: "#4ECDC4",
    mi: "#45B7D1",
    fa: "#96CEB4",
    sol: "#FFEEAD",
    la: "#D4A5A5",
    si: "#9B59B6",
  },
};
```

- [keyboard-symphony.html](https://github.com/alem-platform/sprint-js/blob/main/story07/keyboard-symphony/keyboard-symphony.html)
- [style.css](https://github.com/alem-platform/sprint-js/blob/main/story07/keyboard-symphony/style.css)

### Resources:

-[Keyboard Event](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
