# Jenga Stack

| Expected file  |
| -------------- |
| jenga-stack.js |

### Instructions:

Write two functions `buildJengaStack` and `removeJengaBox` that will help to manipulate with jenga game elements.

1. `buildJengaStack`: Creates and displays a given number of boxes (passed as an argument).

   - Each box should be a div element added to the page immediately.
   - Each box gets a unique id in the format: `<div id="box-1"></div>`, `<div id="box-2"></div>`, etc.
   - The stack should have three columns, to simulate the Jenga structure.
   - Each box should have a corresponding level attribute, indicating its position in the stack.

2. `removeJengaBox`: Allows removal of any box according to it's id except for the top-level boxes (those with the highest data-level numbers)

   - Removal should be allowed from either the middle or bottom levels, and removal should respect the Jenga rules: it should not disturb the overall balance of the stack (i.e., middle boxes cannot be removed if they support upper boxes).
   - Allowed to remove boxes only if the block with such id exists

### Expected Functions:

```js
function buildJengaStack(numOfBlocks) {
  // ...
}
function removeJengaBox(blockId) {
  // ...
}
```

### Example:

```js
buildJengaStack(9);
removeJengaBox("box-3");
```

```html
<div id="stack">
  <div id="box-1" class="box" data-level="1"></div>
  <div id="box-2" class="box" data-core="true" data-level="1"></div>
  <!-- The box (box-3) has been removed, as it is allowed -->
  <div id="box-4" class="box" data-level="2"></div>
  <div id="box-5" class="box" data-core="true" data-level="2"></div>
  <div id="box-6" class="box" data-level="2"></div>
  <div id="box-7" class="box" data-level="3"></div>
  <div id="box-8" class="box" data-core="true" data-level="3"></div>
  <div id="box-9" class="box" data-level="3"></div>
</div>
```
