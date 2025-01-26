# TypeScript

## Introduction
TypeScript is a strongly typed programming language that builds on JavaScript, adding optional static types, classes, and modules. It's designed for development of large applications and transpiles to JavaScript.

## Basic Types

### Primitive Types
```typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

// String
let color: string = "blue";
let sentence: string = `Color: ${color}`;

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

// Symbol
const sym: symbol = Symbol("key");
```

### Complex Types
```typescript
// Array
let list: number[] = [1, 2, 3];
let generic: Array<number> = [1, 2, 3];

// Tuple
let tuple: [string, number] = ["hello", 10];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";

// Void
function warnUser(): void {
    console.log("Warning");
}

// Never
function error(): never {
    throw new Error("Error");
}
```

## Interfaces

### Basic Interface
```typescript
interface User {
    name: string;
    age: number;
    email?: string;  // Optional property
    readonly id: number;  // Read-only property
}

const user: User = {
    name: "John",
    age: 30,
    id: 1
};
```

### Function Types
```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(src: string, sub: string): boolean {
    return src.search(sub) > -1;
};
```

## Classes

### Basic Class
```typescript
class Animal {
    private name: string;
    protected age: number;
    
    constructor(name: string) {
        this.name = name;
    }
    
    public move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof!');
    }
}
```

## Generics

### Generic Functions
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

### Generic Interfaces
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## Decorators

### Class Decorators
```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Example {
    constructor(public name: string) {}
}
```

## Type Manipulation

### Union Types
```typescript
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // OK
```

### Intersection Types
```typescript
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & Identity;
```

## Advanced Types

### Mapped Types
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

### Conditional Types
```typescript
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "object";
```

## Best Practices

### Type Safety
1. Use strict mode
2. Avoid any type
3. Define proper interfaces
4. Use type assertions sparingly

### Code Organization
1. Follow naming conventions
2. Use modules effectively
3. Maintain proper file structure
4. Document complex types

### Performance
1. Enable strict null checks
2. Use proper compilation settings
3. Optimize imports
4. Leverage type inference

## Additional Resources

### Documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### Tools
- [TSLint](https://palantir.github.io/tslint/)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [TypeScript Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)
