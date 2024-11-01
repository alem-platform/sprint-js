| Expected files           |
| ------------------------ |
| `hello.js`, `index.html` |

# Welcome

Welcome to Javasript Bootcamp!🎉

We will start from basics and learn what is JS and how to run it.

### What is JavaScript?

JavaScript is a programming language that brings life to the web.

```js
const sayHello = function () {
  console.log("Hello!");
};

sayHello(); // Hello
```

### How to run?

A JavaScript runtime environment is like a container that provides everything JavaScript needs to execute your code.

Runtime environment examples:

- Web Browsers
- [Node.js](https://nodejs.org/en)
- [Bun](https://bun.sh/)
- [Deno](https://deno.com/)
- etc.

```bash
node hello.js
```

```bash
bun hello.js
```

```bash
deno hello.js
```

Let's create first JS program and run it in browser environment

1. Create a js file named `hello.js`

```bash
echo 'console.log("Hey there! 👋")' > hello.js
```

2. Browser needs an entry point, which is an html file, so create an `index.html`

```bash
echo '
<html>
  <head>
    <title>Hello world</title>
  </head>
  <body>
    <script type="module" src="hello.js"></script>
  </body>
</html>' > index.html
```

3. Start any local server:

```bash
python3 -m http.server 8000
```

4. Now visit this URL in your web browser: `http://localhost:8000`

5. Open Browser Developer Console: your message should appear in the console window. To run the code again, just refresh the page (F5).

The console is a great playground for testing JavaScript code. Once you make changes to your files, refresh the browser to see the updates.

For this bootcamp, you will work in the `bootcamp-js` repository, so create it first and add your generated files into it. This repository will store all your bootcamp solutions.

### Resources:

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [An Introduction to JavaScript](https://javascript.info/intro)
- [JavaScript runtime environment (advanced)](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- [http.server](https://docs.python.org/3/library/http.server.html)