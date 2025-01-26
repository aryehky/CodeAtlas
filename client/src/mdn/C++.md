# C++

## Introduction
C++ is a high-level programming language that supports object-oriented, procedural, and generic programming paradigms. It extends the C language with additional features such as classes, templates, and exceptions.

## Development Environment

### Setup
1. Install a C++ compiler (GCC, Clang, or MSVC)
2. Choose an IDE or text editor (Visual Studio, Code::Blocks, or VS Code)
3. Configure build tools and debugger

## Core Concepts

### Basic Structure
A simple C++ program:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

### Data Types

#### Primitive Types
- Integer Types: `int`, `short`, `long`, `long long`
- Floating Types: `float`, `double`, `long double`
- Character Types: `char`, `wchar_t`
- Boolean: `bool`

#### User-Defined Types
- Structures: `struct`
- Classes: `class`
- Enumerations: `enum`

### Variables and Constants
```cpp
int age = 30;
float salary = 50000.50;
char initial = 'A';
const double PI = 3.14159;
```

## Control Structures

### Conditional Statements
```cpp
if (age >= 18) {
    cout << "Adult" << endl;
} else {
    cout << "Minor" << endl;
}

switch (day) {
    case 1:
        cout << "Monday" << endl;
        break;
    case 2:
        cout << "Tuesday" << endl;
        break;
    default:
        cout << "Other day" << endl;
}
```

### Loops
```cpp
// For Loop
for (int i = 0; i < 5; i++) {
    cout << i << endl;
}

// While Loop
int count = 0;
while (count < 5) {
    cout << count << endl;
    count++;
}
```

## Functions

### Function Declaration and Definition
```cpp
// Function Declaration
int add(int a, int b);

// Function Definition
int add(int a, int b) {
    return a + b;
}

// Function Overloading
double add(double a, double b) {
    return a + b;
}
```

## Object-Oriented Programming

### Classes and Objects
```cpp
class Person {
private:
    string name;
    int age;

public:
    Person(string n, int a) : name(n), age(a) {}

    string getName() const {
        return name;
    }

    void setAge(int a) {
        age = a;
    }
};

// Creating Objects
Person person("Alice", 25);
```

### Inheritance
```cpp
class Animal {
public:
    virtual void makeSound() {
        cout << "Animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        cout << "Bark" << endl;
    }
};
```

## Memory Management

### Dynamic Memory Allocation
```cpp
// Using new and delete
int* ptr = new int;
*ptr = 10;
delete ptr;

// Array allocation
int* arr = new int[5];
delete[] arr;
```

## Exception Handling
```cpp
try {
    // Code that might throw an exception
    throw runtime_error("An error occurred");
} catch (const exception& e) {
    cout << "Error: " << e.what() << endl;
}
```

## Standard Template Library (STL)

### Containers
```cpp
#include <vector>
#include <string>

vector<int> numbers = {1, 2, 3, 4, 5};
vector<string> names = {"Alice", "Bob", "Charlie"};
```

### Iterators
```cpp
for (auto it = numbers.begin(); it != numbers.end(); ++it) {
    cout << *it << endl;
}

// Range-based for loop
for (const auto& num : numbers) {
    cout << num << endl;
}
```

## Best Practices

### Code Organization
1. Use header files for declarations
2. Implement functions in source files
3. Follow consistent naming conventions
4. Use appropriate access specifiers

### Memory Management
1. Use smart pointers when possible
2. Always delete dynamically allocated memory
3. Avoid memory leaks
4. Consider RAII principles

## Additional Resources

### Documentation
- [C++ Reference](https://en.cppreference.com/)
- [C++ Standard](https://isocpp.org/)
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)

### Tools
- [GCC Documentation](https://gcc.gnu.org/onlinedocs/)
- [Visual Studio Documentation](https://docs.microsoft.com/cpp/)
- [CMake Documentation](https://cmake.org/documentation/)
