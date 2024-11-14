# User Profile Merger

| Expected file         |
| --------------------- |
| user-profile-merge.js |

### Instructions

Write a function called `mergeProfiles` that combines user information from different sources. If there are entities that appear in both users' profiles, the values from user2 profile should overwrite those from user 1.

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
// {
//   name: "John Smith",
//   contact: {
//     email: "john@example.com",
//     phone: "123-456-7890"
//   },
//   preferences: { theme: "dark" },
//   settings: { notifications: true }
// }

const user1 = {
  name: "John",
};

const user2 = {
  name: "Mary",
};

console.log(mergeProfiles(user1, user2));
// {
//   name: "Mary",
// }
```
