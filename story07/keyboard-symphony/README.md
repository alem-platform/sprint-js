# Keyboard Symphony

| Expected file        |
| -------------------- |
| keyboard-symphony.js |

Learn DOM manipulation through keyboard events.

### Instructions:

Write a function named `playNote` that:

- Highlights a note with the coressponding color when specific keyboard keys (a, b, c, d, e, f, g) are pressed.
- Removes the highlight when the key is released.

You're provided with starting HTML, CSS and JS codes, which can be used to write your code and test your solution. You can freely create your own HTML and CSS files without being tied to provided ones.

### Resources:

-[Keyboard Event](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

### Starting HTML code:

```html
<div id="music-box"></div>

<div class="note do">A</div>
<div class="note re">B</div>
<div class="note mi">C</div>
<div class="note fa">D</div>
<div class="note sol">E</div>
<div class="note la">F</div>
<div class="note ti">G</div>
```

### Starting CSS code:

```css
.note {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  color: white;
}
```

### Starting JS code:

```js
const instrumentColors = {
  piano: {
    a: "#FF6B6B",
    b: "#4ECDC4",
    c: "#45B7D1",
    d: "#96CEB4",
    e: "#FFEEAD",
    f: "#D4A5A5",
    g: "#9B59B6",
  },
};
```
