# JavaScript Input & Running DSA

## 1. Install Node.js

Install **Node.js** to run JavaScript files directly in the VS Code terminal instead of using the Chrome console.

Check installation:

```bash
node -v
npm -v
```

## 2. Install `prompt-sync`

Inside your project terminal:

```bash
npm install prompt-sync
```

## 3. Take Input

```js
let prompt = require('prompt-sync')();

let a = Number(prompt("Enter The First Number : "));
```

For two numbers:

```js
let prompt = require('prompt-sync')();

let a = Number(prompt("Enter First Number : "));
let b = Number(prompt("Enter Second Number : "));

let sum = a + b;

console.log(sum);
```

> Use `Number()` when you want numeric input.

## 4. Run a JavaScript File

```bash
node file_name.js
```

Example:

```bash
node sum_of_two.js
```

If the file is inside a folder:

```bash
node operators/sum_of_two.js
```

### Quick Reminder

```text
npm install prompt-sync   → Install input package
node file_name.js         → Run JS file
```
