# Address Book Filter

### Instructions

Create a function called `filterContacts` that filters and transforms contact information.

The function should:

- Work with an array of object literals
- Filter contacts based on multiple criteria
- Transform the filtered results
- Use object destructuring in the implementation
- Support dynamic property access

### Expected Function

```js
function filterContacts(contacts, filters) {
  // Your code here
}
```

### Example

```js
const contacts = [
  {
    name: "Alice",
    age: 25,
    location: "New York",
    tags: ["friend", "work"],
  },
  {
    name: "Bob",
    age: 30,
    location: "Chicago",
    tags: ["family"],
  },
  {
    name: "Charlie",
    age: 35,
    location: "New York",
    tags: ["work"],
  },
];

const filters = {
  location: "New York",
  tags: ["work"],
};

console.log(filterContacts(contacts, filters));
```

Output:

```bash
[
  {
    name: "Alice",
    contactInfo: "Alice (New York)",
    categories: ["friend", "work"]
  },
  {
    name: "Charlie",
    contactInfo: "Charlie (New York)",
    categories: ["work"]
  }
]
```
