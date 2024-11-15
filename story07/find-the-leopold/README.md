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

> You only need to create and submit the `find-the-leopold.js` file. You can create your own HTML file by using starting html code example to test your solution:

- [find-the-leopold.html](story07/find-the-leopold/find-the-leopold.html)

### Expected Functions

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
