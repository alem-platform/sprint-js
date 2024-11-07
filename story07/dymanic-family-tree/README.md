# Dynamic Family Tree

| Expected file          |
| ---------------------- |
| dynamic-family-tree.js |

### Instructions:

Write a function `addFamilyMember` that:

- Creates a new div element with the class "member" on each button click.
- Each newly added member is nested inside the previous one, creating deeper levels.
- Each new level should be progressively indented to reflect its depth.
- The tree can be a maximum of 4 levels deep.

Style Changes: Each newly created family member should:

- Have a different background color based on its level.
- Get progressively smaller in size (font size, padding, etc.).
- Have a unique border style.
- Display a label indicating its generation number (1st, 2nd, 3rd, 4th).

Removal Process: After reaching the maximum depth of 4 members:

- Remove child elements one by one, starting from the deepest level.
- During removal, the element should be styled with a special "removing" class.
- The text of the button should toggle between "Add Family Member" and "Remove Family Member" depending on whether it's adding or removing.

### Expecting Function:

```js
function addFamilyMember() {
  // ...
}
```

### Staring CSS Code:

```css
.member {
  padding: 10px;
  margin-left: 10px;
  border: 2px solid black;
  font-size: 20px;
}
.level-1 {
  background-color: lightblue;
  font-size: 20px;
  border-style: solid;
}
.level-2 {
  background-color: lightgreen;
  font-size: 18px;
  border-style: dashed;
}
.level-3 {
  background-color: lightcoral;
  font-size: 16px;
  border-style: dotted;
}
.level-4 {
  background-color: lightgoldenrodyellow;
  font-size: 14px;
  border-style: double;
}
.removing {
  opacity: 0.5;
  text-decoration: line-through;
}
```

### Starting HTML Code:

```html
<button id="toggleBtn">Add Family Member</button>
<div id="familyTree"></div>
```
