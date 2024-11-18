# Cancellable

Write a function that creates a cancellable interval.

### Instructions

- The function should take 4 parameters:
  - `fn`: The function to be called repeatedly
  - `args`: Array of arguments to pass to fn
  - `t`: Interval time in milliseconds
- Call `fn` immediately with args
- Call `fn` every `t` milliseconds with args
- Return a `cancelFn`

```js
function cancellable(fn, args, t) {
  // Write your code here
}
```

### Resources:

- [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)

### Example:

```js
const greet = (name) => console.log(`Hello, ${name}!`);
const cancelGreeting = cancellable(greet, ['Alice'], 2000);

// Cancel after 6 seconds
setTimeout(cancelGreeting, 6000);
// Hello, Alice!
// Hello, Alice!
// Hello, Alice!

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const cancelFetching = cancellable(fetchData, ['https://jsonplaceholder.typicode.com/posts/1'], 5000);

// Cancel after 15 seconds
setTimeout(cancelFetching, 15000);
// Fetched Data: {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }
// Fetched Data: {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }
// Fetched Data: {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }
```
