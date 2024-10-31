# Book Library

### Instructions

Implement a Library class using ES6+ features
Requirements:

1. Store books with title, author, year, and ISBN
2. Validate all inputs
3. Prevent duplicate ISBNs
4. Track number of books by author
5. Support book removal
6. Implement search functionality

```js
class Library {
  constructor() {
    // TODO: Initialize books array
  }

  addBook(title, author, year) {
    // TODO: Add validation
    // - title and author cannot be empty
    // - year must be between 1000 and current year
  }

  get bookCount() {
    // TODO: Return number of books
  }
}
```

### Example

```js
const library = new Library();

library.addBook("The Hobbit", "J.R.R. Tolkien", 1937, "978-0261103283");
library.addBook("1984", "George Orwell", 1949, "978-0451524935");
library.addBook("Pride and Prejudice", "Jane Austen", 1813, "978-0141439518");

console.log(`Total books: ${library.bookCount}`); // Should be 3
```
