# Python

## Introduction
Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.

## Core Concepts

### Variables and Data Types

#### Basic Types
```python
# Numeric Types
integer = 42
float_number = 3.14
complex_number = 1 + 2j

# String Type
text = "Hello, World"
multiline = """
Multiple
line
string
"""

# Boolean Type
is_active = True
is_complete = False

# None Type
empty_value = None
```

#### Collections
```python
# Lists (Mutable)
numbers = [1, 2, 3, 4, 5]
mixed = [1, "text", True, 3.14]

# Tuples (Immutable)
coordinates = (10, 20)
point = (1,)  # Single-item tuple

# Dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Sets
unique_numbers = {1, 2, 3, 4, 5}
```

### Control Flow

#### Conditional Statements
```python
# If Statement
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# Match Statement (Python 3.10+)
match status:
    case "open":
        print("Processing")
    case "closed":
        print("Complete")
    case _:
        print("Unknown")
```

#### Loops
```python
# For Loop
for item in collection:
    print(item)

# While Loop
count = 0
while count < 5:
    print(count)
    count += 1

# List Comprehension
squares = [x**2 for x in range(10)]
```

### Functions

#### Function Definition
```python
def greet(name, greeting="Hello"):
    """
    Function documentation string
    """
    return f"{greeting}, {name}!"

# Lambda Function
square = lambda x: x**2
```

#### Arguments
```python
# Default Arguments
def connect(host="localhost", port=8080):
    pass

# Variable Arguments
def sum_all(*args):
    return sum(args)

# Keyword Arguments
def config(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
```

## Object-Oriented Programming

### Classes
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    @classmethod
    def create_anonymous(cls):
        return cls("Anonymous", 0)
    
    @staticmethod
    def validate_age(age):
        return age >= 0
```

### Inheritance
```python
class Employee(Person):
    def __init__(self, name, age, role):
        super().__init__(name, age)
        self.role = role
    
    def get_info(self):
        return f"{self.name} - {self.role}"
```

## Exception Handling
```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("Success")
finally:
    print("Cleanup")
```

## File Operations
```python
# Reading Files
with open('file.txt', 'r') as file:
    content = file.read()

# Writing Files
with open('output.txt', 'w') as file:
    file.write('Hello, World!')

# JSON Operations
import json

with open('data.json', 'r') as file:
    data = json.load(file)
```

## Best Practices

### Code Style
1. Follow PEP 8 guidelines
2. Use meaningful variable names
3. Write docstrings for functions and classes
4. Keep functions and classes focused

### Performance
1. Use appropriate data structures
2. Optimize loops and comprehensions
3. Implement proper error handling
4. Use context managers for resources

### Project Structure
1. Organize code into modules
2. Use virtual environments
3. Maintain requirements.txt
4. Include proper documentation

## Additional Resources

### Documentation
- [Python Documentation](https://docs.python.org/)
- [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/)
- [Python Package Index](https://pypi.org/)

### Tools
- [PyCharm IDE](https://www.jetbrains.com/pycharm/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Python Formatter (Black)](https://github.com/psf/black)
