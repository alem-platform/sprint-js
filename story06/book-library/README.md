# Book Library

| Expected file     |
| ----------------- |
| `book-library.js` |

### Instructions

Implement a Library class with following methods:

- `constructor`: The constructor initializes two properties - `books` (an array to store books) and `authorCounts` (an object to track the number of books per author).
- `addBook`: takes the book details (`title`, `author`, `year`, `isbn`) and performs the following checks:

  - Validates that all fields are present and the year is within the valid range (1000 to current year).
  - Checks if a book with the same ISBN already exists in the library, and throws an error if so.
  - Creates a new book object and adds it to the books array.
  - Updates the authorCounts object to keep track of the number of books per author.

- `removeBook`: takes an `ISBN` and removes the corresponding book from the books array.
- `bookCount`: returns the total number of books in the library.
- `authorBookCounts`: returns the authorCounts object, which provides the number of books per author.

```js
class Library {
  constructor() {}

  addBook(title, author, year, isbn) {}

  removeBook(isbn) {}

  get bookCount() {}

  get authorBookCounts() {}
}
```

### Resources:

[throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
[Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Example

```js
const library = new Library();

library.addBook("The Hobbit", "J.R.R. Tolkien", 1937, "978-0261103283");
library.addBook("1984", "George Orwell", 1949, "978-0451524935");
library.addBook("Pride and Prejudice", "Jane Austen", 1813, "978-0141439518");

try {
  library.addBook("Another Book", "Another Author", 2022, "978-0261103283");
} catch (error) {
  console.log(error.message); // A book with this ISBN already exists.
}

console.log(library.bookCount); // 3
console.log(library.authorBookCounts);
// {
//   "J.R.R. Tolkien": 1,
//   "George Orwell": 1,
//   "Jane Austen": 1
// }

library.removeBook("978-0451524935");
console.log(library.bookCount); // 2

console.log(library.authorBookCounts);
// {
//   "J.R.R. Tolkien": 1,
//   "Jane Austen": 1
// }

library.removeBook("non-existent-isbn");
console.log(library.bookCount); // 2

try {
  library.addBook("Ancient Text", "Unknown Author", 900, "978-1234567890");
} catch (error) {
  console.log(error.message); // Expected output: "Year must be between 1000 and the current year."
}
```
