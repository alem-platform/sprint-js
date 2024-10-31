# User Profile Merger

### Instructions

Write a function called `mergeProfiles` that combines user information from different sources.

The function should:

- Merge two object literals using spread operator
- Handle nested objects
- Prevent object mutations
- Resolve conflicting properties
- Implement custom merge logic for specific fields

### Expected Function

```js
function mergeProfiles(profile1, profile2) {
  // Your code here
}
```

### Example

```js
const profile1 = {
  name: "John",
  contact: { email: "john@example.com" },
  preferences: { theme: "dark" },
};

const profile2 = {
  name: "John Smith",
  contact: { phone: "123-456-7890" },
  settings: { notifications: true },
};

console.log(mergeProfiles(profile1, profile2));
```

Output:

```bash
{
  name: "John Smith",
  contact: {
    email: "john@example.com",
    phone: "123-456-7890"
  },
  preferences: { theme: "dark" },
  settings: { notifications: true }
}
```
