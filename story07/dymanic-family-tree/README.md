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

You're provided with starting CSS and HTML codes below. You can use them to create proper css and html files to test your solution

> You only need to create and submit the `dynamic-family-tree.js` file, where you can use provided CSS file:

- [style.css](story07/dymanic-family-tree/style.css)

### Expected Function:

```js
function addFamilyMember() {
  // ...
}
```

### Example HTML:

```html
<button id="toggleBtn">Add Family Member</button>
<div id="familyTree"></div>
```
