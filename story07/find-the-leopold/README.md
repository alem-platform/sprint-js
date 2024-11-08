# Find the Leopold

| Expected file       |
| ------------------- |
| find-the-leopold.js |

You’re provided with an HTML file that lists people in the guild. Some are architects, some are not. Some belong to a special group known as "classic architects," and only one of them is Leopold the Grand, identifiable by his unique `id`.

### Instructions:

1. Write the function `filterArchitects` that return two arrays

- The first array includes all architects (<a> tags).
- The second array includes all non-architects.

2. Write the function `filterClassicalArchitects` that return two arrays:

- The first array includes all classical architects (<a> tags with the `classical` class).
- The second array includes all non-classical architects (all left <a> tags).

3. Write the function `filterActiveArchitects` that return two arrays:

- The first array includes all active classical architects (<a> tags with the `active` class).
- The second array includes all inactive classical architects (all left <a> tags).

4. Write the function `findLeopold`: This function should return an array containing two elements

- The first element is the HTML element for the architect Leopold the Grand (whose `id` is `"LeopoldGrand"`).
- The second element is an array containing the remaining active classical architects (<a> tags excluding "Leopold the Grand").

### Expecting Functions:

```js
function filterArchitects() {
  // ...
}

function filterClassicalArchitects() {
  // ...
}

function filterClassicalArchitects() {
  // ...
}

function findLeopold() {
  // ...
}
```

### Example HTML:

You can create your own HTML file by using starting html code example to test your solution:

```html
<ul id="guild">
  <li>
    <a class="architect classical active" id="LeopoldGrand"
      >Leopold the Grand</a
    >
  </li>
  <li><a class="architect classical active">Bruno</a></li>
  <li><a class="architect classical">Gustav</a></li>
  <li><a class="architect">Vincent</a></li>
  <li><span>Lorenzo</span></li>
  <li><span>Michelangelo</span></li>
</ul>

<button onclick="filterArchitects()">Filter Architects</button>
<button onclick="filterClassicalArchitects()">
  Filter Classical Architects
</button>
<button onclick="filterActiveArchitects()">Filter Active Architects</button>
<button onclick="findLeopold()">Find Leopold</button>
```
