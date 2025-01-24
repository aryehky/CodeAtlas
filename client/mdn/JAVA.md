# Java

## Introduction
Java is a high-level, object-oriented programming language designed to be platform-independent. It follows the "Write Once, Run Anywhere" principle through its bytecode compilation and virtual machine execution model.

## Development Environment

### Installation
1. Download JDK from [Oracle's official website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
2. Install JDK following platform-specific instructions
3. Configure environment variables:
   - Set JAVA_HOME
   - Update PATH variable

### Basic Structure
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## Core Concepts

### Data Types

#### Primitive Types
```java
// Integer Types
byte byteVar = 127;
short shortVar = 32767;
int intVar = 2147483647;
long longVar = 9223372036854775807L;

// Floating Point Types
float floatVar = 3.14f;
double doubleVar = 3.14159;

// Other Types
char charVar = 'A';
boolean boolVar = true;
```

#### Reference Types
```java
String str = "Hello, World";
Integer intObj = 42;
Double doubleObj = 3.14;
```

### Control Structures

#### Conditional Statements
```java
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other day");
}
```

#### Loops
```java
// For Loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While Loop
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}

// Enhanced For Loop
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

## Object-Oriented Programming

### Classes and Objects
```java
public class Person {
    // Instance Variables
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Methods
    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

// Creating Objects
Person person = new Person("John Doe", 30);
```

### Inheritance
```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}
```

## Exception Handling
```java
try {
    // Code that might throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} finally {
    System.out.println("This always executes");
}
```

## Collections Framework

### List Interface
```java
// ArrayList
List<String> list = new ArrayList<>();
list.add("First");
list.add("Second");

// Iterating
for (String item : list) {
    System.out.println(item);
}
```

### Map Interface
```java
Map<String, Integer> map = new HashMap<>();
map.put("One", 1);
map.put("Two", 2);

// Accessing values
int value = map.get("One");
```

## File Operations
```java
// Reading a File
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}

// Writing to a File
try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
    writer.write("Hello, World!");
}
```

## Best Practices

### Code Organization
1. Follow package naming conventions
2. Use meaningful class and method names
3. Implement proper encapsulation
4. Document code with Javadoc

### Performance
1. Use appropriate data structures
2. Close resources properly
3. Implement proper exception handling
4. Optimize loops and collections

### Security
1. Validate input data
2. Use secure coding practices
3. Implement proper access control
4. Handle sensitive data carefully

## Additional Resources

### Documentation
- [Java Documentation](https://docs.oracle.com/en/java/)
- [Java Language Specification](https://docs.oracle.com/javase/specs/)
- [Java API Documentation](https://docs.oracle.com/en/java/javase/11/docs/api/)

### Tools
- [Eclipse IDE](https://www.eclipse.org/)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
- [Maven](https://maven.apache.org/)
