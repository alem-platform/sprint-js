# Jenga Stack

1. Build the Jenga Stack: Write a function `buildJengaStack` that:

- Creates and displays a given number of boxes (passed as an argument).
- Each box should be a div element added to the page immediately.
- Each box gets a unique id in the format: `<div id="box-1"></div>`, `<div id="box-2"></div>`, etc.
- Every third box should be placed in the middle column, assigned a custom data attribute `data-core="true"`, indicating that it is a core box in the Jenga stack.
- The stack should have three columns: left, middle, and right, to simulate the Jenga structure.
- Each box should have a corresponding level attribute, indicating its position in the stack.

2. Remove a Jenga Box: Write a function `removeJengaBox` that:

- Allows removal of any box according to the id except for the top-level boxes (top level is the highest set of boxes currently in the stack).
- Removal should be allowed from either the middle or bottom levels, and removal should respect the Jenga rules: it should not disturb the overall balance of the stack (i.e., middle boxes cannot be removed if they support upper boxes).
- If the removed box was a core box, mark the box as removed with a class removed.
- If user want to remove the middle block, then it's possible if the left and right block still present. In this case their assigned with `data-core="true"` and not allowed to be removed anymore
- After removing, box should be placed to the next top-level free position, with new id and level indication

### Example Output:

```js
buildJengaStack(9);
removeJengaBox("box-3");
```

```html
<div id="stack">
  <div id="box-1" class="box" data-level="1"></div>
  <div id="box-2" class="box middle" data-core="true" data-level="1"></div>
  <!-- The box (box-3) has been removed, as it is allowed -->
  <div id="box-3" class="box" data-level="1"></div>
  <div id="box-4" class="box" data-level="2"></div>
  <div id="box-5" class="box middle" data-core="true" data-level="2"></div>
  <div id="box-6" class="box" data-level="2"></div>
  <div id="box-7" class="box" data-level="3"></div>
  <div id="box-8" class="box middle" data-core="true" data-level="3"></div>
  <div id="box-9" class="box" data-level="3"></div>
</div>
```
