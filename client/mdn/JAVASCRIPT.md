# JavaScript

## Core Concepts

### Variables and Declarations
```javascript
// Variable Declarations
let variableName = "value";      // Block-scoped, mutable
const constantName = "value";     // Block-scoped, immutable
var legacyVariable = "value";     // Function-scoped (not recommended)
```

### Data Types

#### Primitive Types
```javascript
// String
const text = "Hello, World";
const template = `Value: ${variable}`;

// Number
const integer = 42;
const float = 3.14;
const scientific = 1e6;

// Boolean
const isActive = true;
const isComplete = false;

// Other Primitives
const nullValue = null;
const undefinedValue = undefined;
const uniqueSymbol = Symbol('description');
const bigIntValue = 9007199254740991n;
```

#### Reference Types
```javascript
// Object
const person = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, ${this.name}`;
    }
};

// Array
const numbers = [1, 2, 3, 4, 5];
const mixed = ["text", 42, true, { key: "value" }];
```

### Functions

#### Function Declarations
```javascript
// Standard Function
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow Function
const divide = (a, b) => a / b;

// Method in Object
const calculator = {
    add(a, b) {
        return a + b;
    }
};
```

### Control Flow

#### Conditional Statements
```javascript
// If Statement
if (condition) {
    // code
} else if (otherCondition) {
    // code
} else {
    // code
}

// Switch Statement
switch (value) {
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    default:
        // code
}
```

#### Loops
```javascript
// For Loop
for (let i = 0; i < array.length; i++) {
    // code
}

// For...of Loop (Iterables)
for (const item of array) {
    // code
}

// For...in Loop (Object Properties)
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        // code
    }
}

// While Loop
while (condition) {
    // code
}
```

### Error Handling
```javascript
try {
    // Code that might throw an error
    throw new Error('Custom error message');
} catch (error) {
    console.error('Error:', error.message);
} finally {
    // Always executes
}
```

## Advanced Features

### Promises and Async
```javascript
// Promise Creation
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve(result);
    } else {
        reject(error);
    }
});

// Async/Await
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Classes
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }

    static createAnonymous() {
        return new Person('Anonymous', 0);
    }
}

// Inheritance
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
}
```

### Modules
```javascript
// Exporting
export const utility = {
    // utility methods
};
export default class MainClass {
    // class implementation
}

// Importing
import MainClass, { utility } from './module';
```

## DOM Manipulation

### Element Selection
```javascript
// Query Selectors
const element = document.querySelector('.class');
const elements = document.querySelectorAll('.class');

// ID and Class Selection
const byId = document.getElementById('elementId');
const byClass = document.getElementsByClassName('className');
```

### Event Handling
```javascript
element.addEventListener('click', (event) => {
    event.preventDefault();
    // Handle event
});

// Event Delegation
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.child-selector')) {
        // Handle child element events
    }
});
```

## Best Practices

### Code Organization
1. Use consistent naming conventions
2. Implement proper error handling
3. Write modular, reusable code
4. Comment complex logic

### Performance
1. Optimize loops and operations
2. Use appropriate data structures
3. Implement proper memory management
4. Cache frequently accessed values

### Security
1. Validate input data
2. Sanitize output
3. Use secure coding practices
4. Implement proper access controls

## Additional Resources

### Documentation
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [ECMAScript Specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
