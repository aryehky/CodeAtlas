# JavaScript

## Core Concepts

### Objects and Properties

#### Object Basics
Objects are useful when you need to group related data and functionality together. They're the fundamental building blocks for organizing code in JavaScript and are perfect for representing real-world entities with multiple characteristics.

```javascript
// Object literal syntax
const classOf2018 = {
  students: 38,
  year: 2018
}

// Accessing properties
console.log(classOf2018.students); // 38
console.log(classOf2018['year']); // 2018
```

**When to use:**
- When you need to group related data together
- When representing entities with multiple attributes
- When you want to encapsulate related functionality
- When creating data structures with key-value pairs

#### Destructuring
Destructuring makes code cleaner and more readable by allowing you to extract values from objects or arrays into distinct variables. It's particularly useful when working with complex objects or API responses.

```javascript
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};

// Destructuring assignment
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
```

**When to use:**
- When extracting multiple values from objects/arrays
- When working with function parameters
- When dealing with complex nested data structures
- When you want to make code more readable

#### Property Shorthand
Property shorthand simplifies object creation when property names match variable names. This is particularly useful in modern JavaScript where you're often creating objects from existing variables.

```javascript
const activity = 'Surfing';
const location = 'Beach';
const beach = { activity, location }; // Same as { activity: activity, location: location }
```

**When to use:**
- When creating objects from existing variables
- When property names match variable names
- In object method definitions
- When returning multiple values from functions

### Functions and Methods

#### Arrow Functions
Arrow functions provide a concise syntax for writing function expressions. They're particularly useful for short callback functions and when you want to preserve the lexical scope of `this`.

```javascript
// Traditional vs Arrow
function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
```

**When to use:**
- For callback functions
- When you need lexical `this` binding
- For short, single-expression functions
- In array methods like map, filter, reduce

#### Higher-Order Functions
Higher-order functions allow for more flexible and reusable code by treating functions as values. They're essential for functional programming patterns and creating abstractions.

```javascript
// Function as parameter
const calculate = (operation, a, b) => {
  return operation(a, b);
};

// Function returning function
const multiply = (x) => {
  return (y) => x * y;
};
```

**When to use:**
- When implementing reusable operations
- For function composition
- When creating middleware or plugins
- For event handling and callbacks

### Array Methods

#### Map, Filter, Reduce
These methods provide a declarative way to transform and process arrays. They're more readable and less error-prone than traditional for loops.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Transform each element
const doubled = numbers.map(n => n * 2);

// Select elements
const evens = numbers.filter(n => n % 2 === 0);

// Aggregate values
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

**When to use:**
- map: When transforming each element in an array
- filter: When selecting elements based on a condition
- reduce: When combining array elements into a single value
- When you want to avoid mutation of original array

### Control Flow

#### Loops
Different types of loops serve different purposes and are optimized for different use cases.

```javascript
// For specific number of iterations
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For iterating arrays/iterables
for (const item of items) {
  console.log(item);
}

// For object properties
for (const key in object) {
  console.log(key, object[key]);
}
```

**When to use each loop:**
- for: When you need index access and precise control
- for...of: When iterating over array elements or other iterables
- for...in: When iterating over object properties
- while: When you don't know the number of iterations in advance

#### Break and Continue
These statements provide fine-grained control over loop execution.

```javascript
// Break example
for (const item of items) {
  if (item.price > 1000) break; // Exit early
  console.log(item);
}

// Continue example
for (const item of items) {
  if (item.price < 10) continue; // Skip cheap items
  console.log(item);
}
```

**When to use:**
- break: When you need to exit a loop early
- continue: When you want to skip certain iterations
- When optimizing loop performance
- When implementing search algorithms

## JavaScript Loops and Iterations

### Basic Loops
```javascript
// For Loop
for (let i = 0; i <= 5; i++) {
  console.log(`Iteration: ${i}`);
}

// For...of (Arrays)
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}

// For...in (Objects)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
```

### Array Methods
```javascript
// Join
const arr = ['Hello', 'World'];
console.log(arr.join(' ')); // "Hello World"

// Fill
const zeros = new Array(5).fill(0);
console.log(zeros); // [0, 0, 0, 0, 0]

// Includes
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // true
```

## JavaScript Hacks

### Conditional Tricks
```javascript
// Ternary Operator
const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';

// Short-Circuit Evaluation
const name = '' || 'Default Name';
const isAdmin = true && 'Admin Access Granted';

// Optional Chaining
const user = { profile: { name: 'John' } };
console.log(user?.profile?.name); // "John"
```

### Array Operations
```javascript
// Destructuring for Swap
let a = 1, b = 2;
[a, b] = [b, a];

// Generate Range
const range = Array.from(
  { length: 5 }, 
  (_, i) => i + 1
); // [1, 2, 3, 4, 5]

// Spread and Rest
const nums = [1, 2, 3];
console.log([...nums, 4]); // [1, 2, 3, 4]

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```

### Async Operations
```javascript
// Promise.all for Parallel Execution
const promises = [
  Promise.resolve(10),
  Promise.resolve(20)
];

Promise.all(promises)
  .then(([res1, res2]) => {
    console.log(res1 + res2); // 30
  });
```

## Best Practices
1. Use const by default, let when needed
2. Prefer arrow functions for callbacks
3. Use destructuring for cleaner code
4. Leverage array methods over loops
5. Use meaningful variable names
6. Use optional chaining for safe property access
7. Implement short-circuit evaluation for cleaner code
8. Use destructuring for cleaner variable assignments

## Additional Resources

### Documentation
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [ECMAScript Specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)

### Advanced Array Methods
```javascript
// Finding Elements
const numbers = [1, 2, 3, 4, 5];

// Check if ANY element meets condition
const hasEven = numbers.some(x => x % 2 === 0);  // true

// Check if ALL elements meet condition
const allPositive = numbers.every(x => x > 0);   // true

// Find first element meeting condition
const firstEven = numbers.find(x => x % 2 === 0); // 2

// Transform and Filter
const doubled = numbers
  .filter(x => x % 2 === 0)    // Keep even numbers
  .map(x => x * 2);            // Double them

// Complex Reduce
const items = [
  { type: 'fruit', name: 'apple', price: 0.5 },
  { type: 'fruit', name: 'banana', price: 0.3 },
  { type: 'vegetable', name: 'carrot', price: 0.4 }
];

const fruitTotal = items
  .filter(item => item.type === 'fruit')
  .reduce((sum, item) => sum + item.price, 0);
```

### Loop Patterns
```javascript
// Early Exit with Break
for (const item of items) {
  if (item.price > 1) {
    console.log('Found expensive item');
    break;
  }
}

// Skip Items with Continue
for (const item of items) {
  if (item.price < 0.5) continue;  // Skip cheap items
  console.log(`Processing ${item.name}`);
}

// Nested Loop with Labels
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i * j === 4) break outer;
    console.log(i, j);
  }
}

// Iterating with Index
items.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item.name}`);
});
```
