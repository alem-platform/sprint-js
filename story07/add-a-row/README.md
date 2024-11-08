# Add a Row

| Expected file |
| ------------- |
| add-a-row.js  |

### Instructions:

Write a function named `addTableRow` that adds a new row to an existing HTML table with three columns of data.

- The function should find the table by its ID.
- Insert a new row with cells containing placeholder text received by function, like "New Row, Column 1", "New Row, Column 2", and "New Row, Column 3".
- Each new row should be inserted at the end of the table.

You only need to create and submit the `add-a-row.js` file, which you can be checked locally with provided HTML file:

- [add-a-row.html](story07/add-a-row/add-a-row.html)

Feel free to modify provided file according to your needs. If necessary, you can add your own CSS file.

### Resources

- [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

### Expected Function:

```js
function addTableRow(elementId, textRow1, textRow2, textRow3) {
  // ...
}
```
