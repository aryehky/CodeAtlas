'use client';
import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizSectionProps {
  topicId?: string;
}

const quizzesByTopic: Record<string, Question[]> = {
  'AWS': [
    {
      id: 1,
      question: "What is Amazon EC2?",
      options: [
        "Elastic Compute Cloud - virtual servers in the cloud",
        "Elastic Cache Cloud - caching service",
        "Elastic Container Cloud - container service",
        "External Computing Cloud - external servers"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which AWS service is used for object storage?",
      options: [
        "EBS (Elastic Block Store)",
        "EFS (Elastic File System)",
        "S3 (Simple Storage Service)",
        "FSx"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is AWS Lambda?",
      options: [
        "A database service",
        "A serverless computing service",
        "A load balancing service",
        "A networking service"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which AWS service is used for content delivery?",
      options: [
        "CloudFront",
        "CloudWatch",
        "CloudFormation",
        "CloudTrail"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "What is Amazon RDS?",
      options: [
        "Remote Desktop Service",
        "Relational Database Service",
        "Rapid Deployment Service",
        "Regional Data Service"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which service provides managed NoSQL databases?",
      options: [
        "Amazon RDS",
        "Amazon Redshift",
        "Amazon DynamoDB",
        "Amazon Aurora"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What is AWS IAM used for?",
      options: [
        "Image Analysis Management",
        "Internet Access Management",
        "Identity and Access Management",
        "Infrastructure Asset Management"
      ],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "Which service is used for containerized applications?",
      options: [
        "ECS (Elastic Container Service)",
        "EBS (Elastic Block Store)",
        "EMR (Elastic MapReduce)",
        "ELB (Elastic Load Balancing)"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "What is Amazon VPC?",
      options: [
        "Virtual Private Cloud",
        "Virtual Processing Center",
        "Virtual Protocol Configuration",
        "Virtual Platform Controller"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "Which service is used for monitoring AWS resources?",
      options: [
        "CloudTrail",
        "CloudWatch",
        "CloudFormation",
        "CloudFront"
      ],
      correctAnswer: 1
    }
  ],
  'C++': [
    {
      id: 1,
      question: "What is the correct way to declare a variable in C++?",
      options: [
        "var x = 5;",
        "int x = 5;",
        "x = 5;",
        "declare x = 5;"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which operator is used for pointer declaration?",
      options: [
        "&",
        "#",
        "*",
        "@"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the correct way to create a class in C++?",
      options: [
        "struct MyClass { };",
        "class MyClass { };",
        "new class MyClass { };",
        "create MyClass { };"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which header file is required for input/output operations?",
      options: [
        "<stdio.h>",
        "<iostream>",
        "<input>",
        "<stream>"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of 'virtual' keyword in C++?",
      options: [
        "To make a variable volatile",
        "To create a virtual machine",
        "To enable function overriding in inheritance",
        "To allocate memory virtually"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is a constructor?",
      options: [
        "A function that destroys objects",
        "A function with the same name as the class used to initialize objects",
        "A function that copies objects",
        "A function that converts data types"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Which operator is used for dynamic memory allocation?",
      options: [
        "malloc",
        "alloc",
        "new",
        "create"
      ],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "What is the correct way to inherit a class in C++?",
      options: [
        "class Child inherits Parent { }",
        "class Child : public Parent { }",
        "class Child extends Parent { }",
        "class Child implements Parent { }"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is the purpose of 'const' keyword?",
      options: [
        "To make a variable constant",
        "To create a constructor",
        "To declare a constant function",
        "Both A and C"
      ],
      correctAnswer: 3
    },
    {
      id: 10,
      question: "What is a reference variable in C++?",
      options: [
        "A pointer to a variable",
        "An alias to an existing variable",
        "A constant variable",
        "A static variable"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "What is function overloading?",
      options: [
        "Having multiple functions with the same name but different parameters",
        "Having multiple functions with different names",
        "Having multiple classes with the same name",
        "Having multiple variables with the same name"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      question: "What is the purpose of 'this' pointer?",
      options: [
        "To point to the next object",
        "To point to the previous object",
        "To point to the current object",
        "To point to a null object"
      ],
      correctAnswer: 2
    }
  ],
  'JavaScript': [
    {
      id: 1,
      question: "What is the correct way to declare a variable in JavaScript?",
      options: [
        "var myVar = 5;",
        "let myVar = 5;",
        "const myVar = 5;",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Which operator is used for strict equality comparison?",
      options: [
        "==",
        "===",
        "=",
        "!="
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the correct way to write a function in JavaScript?",
      options: [
        "function = myFunction() {}",
        "function myFunction() {}",
        "function:myFunction() {}",
        "def myFunction() {}"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the purpose of 'async/await'?",
      options: [
        "To make the code run faster",
        "To handle asynchronous operations",
        "To create loops",
        "To define variables"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the output of typeof null?",
      options: [
        "null",
        "undefined",
        "object",
        "number"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "How do you add an element to the end of an array?",
      options: [
        "arr.push(element)",
        "arr.pop(element)",
        "arr.add(element)",
        "arr.append(element)"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "What is closure in JavaScript?",
      options: [
        "A way to close the browser",
        "A function that has access to variables in its outer scope",
        "A method to end a loop",
        "A way to close a connection"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is the purpose of 'this' keyword?",
      options: [
        "To reference the current function",
        "To reference the current object",
        "To reference the parent function",
        "To reference a variable"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is the correct way to check if an object has a property?",
      options: [
        "object.hasProperty('prop')",
        "object.hasOwnProperty('prop')",
        "object.contains('prop')",
        "object.includes('prop')"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is event bubbling?",
      options: [
        "A way to create new events",
        "When an event triggers on a child and propagates up through parents",
        "A method to prevent events",
        "A type of error handling"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "What is the purpose of Promise in JavaScript?",
      options: [
        "To make code faster",
        "To handle asynchronous operations",
        "To create loops",
        "To define variables"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "What is the spread operator?",
      options: [
        "...",
        "***",
        "///",
        "==="
      ],
      correctAnswer: 0
    },
    {
      id: 13,
      question: "What is destructuring in JavaScript?",
      options: [
        "A way to delete objects",
        "A way to extract values from objects or arrays",
        "A way to create objects",
        "A way to merge objects"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What is the purpose of 'use strict'?",
      options: [
        "To make code run faster",
        "To enable strict mode and catch common mistakes",
        "To include external libraries",
        "To create global variables"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "What is the difference between let and var?",
      options: [
        "There is no difference",
        "let is block-scoped, var is function-scoped",
        "var is block-scoped, let is function-scoped",
        "let is faster than var"
      ],
      correctAnswer: 1
    }
  ],
  'CSS': [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "Which property is used to change the background color?",
      options: [
        "color",
        "bgcolor",
        "background-color",
        "background"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "How do you select an element with id 'demo'?",
      options: [
        ".demo",
        "#demo",
        "*demo",
        "demo"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the correct CSS syntax for making all <p> elements bold?",
      options: [
        "p {font-weight: bold;}",
        "p {text-size: bold;}",
        "<p style='font-size: bold'>",
        "p.style {bold}"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Which property is used to change the font of an element?",
      options: [
        "font-style",
        "text-style",
        "font-family",
        "text-family"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is the default value of the position property?",
      options: [
        "relative",
        "fixed",
        "absolute",
        "static"
      ],
      correctAnswer: 3
    },
    {
      id: 7,
      question: "How do you make a list not display bullet points?",
      options: [
        "list-style-type: none;",
        "list: none;",
        "bulletpoints: none;",
        "list-type: no-bullet;"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which property is used to control the spacing between elements?",
      options: [
        "spacing",
        "margin",
        "padding",
        "Both B and C"
      ],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "What is the correct way to apply a flexbox layout?",
      options: [
        "display: flex-box;",
        "display: flexbox;",
        "display: flex;",
        "display: flexible;"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which CSS property is used to make text bold?",
      options: [
        "font-weight: bold;",
        "text-weight: bold;",
        "text-style: bold;",
        "font-style: bold;"
      ],
      correctAnswer: 0
    },
    {
      id: 11,
      question: "What is the purpose of the z-index property?",
      options: [
        "To count elements",
        "To control the stacking order of elements",
        "To align elements horizontally",
        "To set the zoom level"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "How do you make a grid container?",
      options: [
        "display: grid-container;",
        "display: grid;",
        "display: grids;",
        "grid: enable;"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "Which property is used for changing the transparency of an element?",
      options: [
        "transparency",
        "opacity",
        "visibility",
        "transparent"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What is the purpose of media queries?",
      options: [
        "To play media files",
        "To query the database",
        "To make responsive designs",
        "To import media files"
      ],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "Which unit is relative to the viewport width?",
      options: [
        "px",
        "em",
        "rem",
        "vw"
      ],
      correctAnswer: 3
    }
  ],
  'EDGEQL': [
    {
      id: 1,
      question: "What is EdgeQL?",
      options: [
        "A database management system",
        "A query language for EdgeDB",
        "An edge computing framework",
        "A JavaScript library"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "How do you select all properties from a type in EdgeQL?",
      options: [
        "SELECT * FROM Type",
        "SELECT Type {*}",
        "SELECT ALL FROM Type",
        "GET Type.*"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the correct way to filter results in EdgeQL?",
      options: [
        "SELECT User WHERE name = 'John'",
        "SELECT User FILTER .name = 'John'",
        "SELECT User {FILTER name = 'John'}",
        "SELECT User WITH name = 'John'"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "How do you create a new object in EdgeQL?",
      options: [
        "CREATE User {name := 'John'}",
        "INSERT User {name := 'John'}",
        "NEW User {name := 'John'}",
        "ADD User {name := 'John'}"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the correct way to update an object in EdgeQL?",
      options: [
        "MODIFY User FILTER .id = 1 SET {name := 'John'}",
        "UPDATE User SET {name := 'John'} WHERE id = 1",
        "UPDATE User FILTER .id = 1 SET {name := 'John'}",
        "ALTER User FILTER .id = 1 SET {name := 'John'}"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "How do you delete objects in EdgeQL?",
      options: [
        "REMOVE User FILTER .id = 1",
        "DROP User FILTER .id = 1",
        "DELETE User FILTER .id = 1",
        "ERASE User FILTER .id = 1"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What is the correct way to link objects in EdgeQL?",
      options: [
        "LINK posts := Post",
        "REFERENCE posts := Post",
        "CONNECT posts := Post",
        "RELATION posts := Post"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "How do you order results in EdgeQL?",
      options: [
        "SELECT User SORT BY .name ASC",
        "SELECT User ORDER BY .name ASC",
        "SELECT User ORDER .name ASC",
        "SELECT User ARRANGE BY .name ASC"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is the correct way to limit results in EdgeQL?",
      options: [
        "SELECT User {*} TAKE 5",
        "SELECT User {*} TOP 5",
        "SELECT User {*} LIMIT 5",
        "SELECT User {*} FIRST 5"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "How do you perform aggregation in EdgeQL?",
      options: [
        "SELECT count(User)",
        "SELECT User.count()",
        "SELECT COUNT(User)",
        "SELECT (SELECT User).count()"
      ],
      correctAnswer: 0
    }
  ],
  'HTML': [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Hyper Text Modern Links"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which tag is used for creating a hyperlink?",
      options: [
        "<link>",
        "<href>",
        "<a>",
        "<url>"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the correct way to create a paragraph?",
      options: [
        "<paragraph>",
        "<p>",
        "<para>",
        "<text>"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which HTML element is used for the largest heading?",
      options: [
        "<heading>",
        "<h6>",
        "<head>",
        "<h1>"
      ],
      correctAnswer: 3
    },
    {
      id: 5,
      question: "What is the correct HTML element for inserting an image?",
      options: [
        "<picture>",
        "<image>",
        "<img>",
        "<src>"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: [
        "alt",
        "title",
        "description",
        "caption"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "What is the correct HTML for creating a checkbox?",
      options: [
        "<input type='check'>",
        "<checkbox>",
        "<input type='checkbox'>",
        "<check>"
      ],
      correctAnswer: 2
    },
    {
      id: 8,
      question: "Which HTML element defines navigation links?",
      options: [
        "<navigation>",
        "<nav>",
        "<navigate>",
        "<menu>"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is the correct HTML for making a drop-down list?",
      options: [
        "<list>",
        "<input type='dropdown'>",
        "<select>",
        "<dropdown>"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which HTML element is used to specify a header for a document?",
      options: [
        "<header>",
        "<top>",
        "<head>",
        "<heading>"
      ],
      correctAnswer: 0
    },
    {
      id: 11,
      question: "What is the correct HTML for creating a table?",
      options: [
        "<table><tr><td>",
        "<table><row><col>",
        "<tab><tr><td>",
        "<grid><row><cell>"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      question: "Which HTML element defines a form?",
      options: [
        "<input>",
        "<form>",
        "<section>",
        "<formfield>"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "What is the correct HTML for inserting a line break?",
      options: [
        "<lb>",
        "<break>",
        "<br>",
        "<newline>"
      ],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "Which HTML element is used for semantic grouping of footer content?",
      options: [
        "<bottom>",
        "<footer>",
        "<end>",
        "<section>"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "What is the purpose of the HTML5 'article' element?",
      options: [
        "For navigation links only",
        "For footer content only",
        "For independent, self-contained content",
        "For header content only"
      ],
      correctAnswer: 2
    }
  ],
  'Python': [
    {
      id: 1,
      question: "What is Python?",
      options: [
        "A compiled programming language",
        "An interpreted, high-level programming language",
        "A markup language",
        "A database management system"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "How do you create a list in Python?",
      options: [
        "array = (1, 2, 3)",
        "array = {1, 2, 3}",
        "array = [1, 2, 3]",
        "array = <1, 2, 3>"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the correct way to create a function in Python?",
      options: [
        "function myFunction():",
        "def myFunction():",
        "create myFunction():",
        "func myFunction():"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which of these is NOT a Python data type?",
      options: [
        "int",
        "float",
        "char",
        "str"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What is the purpose of 'self' in Python classes?",
      options: [
        "To create a new instance",
        "To reference the current instance of the class",
        "To delete an instance",
        "To create a static method"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "How do you create a dictionary in Python?",
      options: [
        "dict = []",
        "dict = ()",
        "dict = <>",
        "dict = {}"
      ],
      correctAnswer: 3
    },
    {
      id: 7,
      question: "What is the purpose of '__init__' in Python?",
      options: [
        "To initialize a new class",
        "To create a constructor method",
        "To import modules",
        "To end a program"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "How do you handle exceptions in Python?",
      options: [
        "try/catch",
        "try/except",
        "if/else",
        "for/while"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What does pip stand for in Python?",
      options: [
        "Python Installation Package",
        "Pip Installs Packages",
        "Python Important Packages",
        "Package Installation Python"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is a lambda function in Python?",
      options: [
        "A named function",
        "An anonymous function",
        "A built-in function",
        "A recursive function"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "How do you comment multiple lines in Python?",
      options: [
        "// comment",
        "/* comment */",
        "''' comment '''",
        "<!-- comment -->"
      ],
      correctAnswer: 2
    },
    {
      id: 12,
      question: "What is the purpose of 'yield' in Python?",
      options: [
        "To end a function",
        "To create a generator function",
        "To raise an exception",
        "To return multiple values"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "What is the difference between list and tuple in Python?",
      options: [
        "Lists are ordered, tuples are not",
        "Tuples are mutable, lists are immutable",
        "Lists are mutable, tuples are immutable",
        "There is no difference"
      ],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "What is the purpose of 'with' statement in Python?",
      options: [
        "Loop control",
        "Exception handling",
        "Resource management",
        "Function definition"
      ],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "How do you create a virtual environment in Python?",
      options: [
        "python create venv",
        "python -m venv myenv",
        "virtualenv create",
        "pip install venv"
      ],
      correctAnswer: 1
    }
  ],
  'React': [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "A database management system",
        "A web server"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is JSX?",
      options: [
        "A JavaScript extension for writing XML-like code",
        "A JavaScript compiler",
        "A React package",
        "A database query language"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What is the correct way to create a component in React?",
      options: [
        "class Component {}",
        "function Component()",
        "component = new Component()",
        "Both A and B are correct"
      ],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "What hook is used for side effects in React?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of useState hook?",
      options: [
        "To perform side effects",
        "To manage component state",
        "To handle routing",
        "To make API calls"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "How do you pass data from parent to child component?",
      options: [
        "Using state",
        "Using props",
        "Using context",
        "Using refs"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "What is the Virtual DOM?",
      options: [
        "A direct copy of the real DOM",
        "A lightweight copy of the real DOM for performance optimization",
        "A browser feature",
        "A React component"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is the purpose of useContext hook?",
      options: [
        "To manage state",
        "To subscribe to context changes",
        "To handle side effects",
        "To optimize performance"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is React Router used for?",
      options: [
        "Making API calls",
        "Managing state",
        "Handling navigation in React applications",
        "Creating components"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "What is the purpose of key prop in lists?",
      options: [
        "To style list items",
        "To help React identify which items have changed",
        "To make lists sortable",
        "To make lists searchable"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "What is a controlled component?",
      options: [
        "A component with no state",
        "A component where form data is controlled by React",
        "A component with multiple states",
        "A component with no props"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "What is the purpose of useRef hook?",
      options: [
        "To manage state",
        "To create mutable values that persist across renders",
        "To handle routing",
        "To make API calls"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "What is prop drilling?",
      options: [
        "A React feature",
        "Passing props through multiple levels of components",
        "A type of component",
        "A routing technique"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What is the purpose of React.memo?",
      options: [
        "To create memoized values",
        "To optimize performance by preventing unnecessary renders",
        "To handle memory management",
        "To create refs"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "What is the difference between state and props?",
      options: [
        "There is no difference",
        "Props are immutable, state can be updated",
        "State is immutable, props can be updated",
        "Both can be updated freely"
      ],
      correctAnswer: 1
    }
  ],
  'SQL': [
    {
      id: 1,
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Query Language",
        "System Query Language"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which SQL command is used to extract data from a database?",
      options: [
        "EXTRACT",
        "GET",
        "SELECT",
        "OPEN"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Which SQL clause is used to filter records?",
      options: [
        "WHERE",
        "HAVING",
        "FILTER",
        "CONDITION"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "How do you insert a new record into a table?",
      options: [
        "ADD INTO table_name VALUES ()",
        "INSERT INTO table_name VALUES ()",
        "INSERT VALUES INTO table_name",
        "PUT INTO table_name VALUES ()"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Which command is used to update data in a database?",
      options: [
        "MODIFY",
        "SAVE",
        "UPDATE",
        "EDIT"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is the correct way to select all columns from a table?",
      options: [
        "SELECT [*] FROM table",
        "SELECT ALL FROM table",
        "SELECT * FROM table",
        "SELECT %.% FROM table"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "Which SQL function is used to count records?",
      options: [
        "COUNT()",
        "SUM()",
        "NUMBER()",
        "TOTAL()"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "What is a PRIMARY KEY?",
      options: [
        "The first column in a table",
        "A unique identifier for each record",
        "The most important data in a table",
        "A key that opens the database"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "Which SQL command is used to delete data from a database?",
      options: [
        "REMOVE",
        "DELETE",
        "ERASE",
        "DROP"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is a FOREIGN KEY?",
      options: [
        "A key from a different database",
        "A key that references a PRIMARY KEY in another table",
        "A non-primary key",
        "A key used in other countries"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "Which SQL command is used to create a new table?",
      options: [
        "BUILD TABLE",
        "GENERATE TABLE",
        "CREATE TABLE",
        "MAKE TABLE"
      ],
      correctAnswer: 2
    },
    {
      id: 12,
      question: "What is the purpose of JOIN in SQL?",
      options: [
        "To join two databases",
        "To combine rows from two or more tables",
        "To join two columns",
        "To connect to the database"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "Which SQL operator is used to search for a pattern?",
      options: [
        "FIND",
        "SEARCH",
        "LIKE",
        "MATCH"
      ],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "What is the difference between HAVING and WHERE?",
      options: [
        "No difference",
        "HAVING is used with GROUP BY, WHERE is used for row filtering",
        "WHERE is used with GROUP BY, HAVING is used for row filtering",
        "HAVING is faster than WHERE"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "Which SQL function returns the current date?",
      options: [
        "DATE()",
        "GETDATE()",
        "NOW()",
        "CURRENT_DATE()"
      ],
      correctAnswer: 2
    }
  ],
  'TypeScript': [
    {
      id: 1,
      question: "What is TypeScript?",
      options: [
        "A new programming language",
        "A superset of JavaScript that adds static typing",
        "A JavaScript framework",
        "A JavaScript compiler"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "How do you declare a variable with a specific type in TypeScript?",
      options: [
        "let x: number = 5",
        "let x as number = 5",
        "let x = number(5)",
        "let x = 5:number"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What is an interface in TypeScript?",
      options: [
        "A class that can't be instantiated",
        "A contract that defines the structure of an object",
        "A type of function",
        "A module system"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the 'any' type in TypeScript?",
      options: [
        "A type that can only hold numbers",
        "A type that can hold any value",
        "A type that can only hold strings",
        "A type that can only hold arrays"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is a Union Type in TypeScript?",
      options: [
        "A type that combines multiple types into one",
        "A type that only allows one value",
        "A type that represents a union of classes",
        "A type that represents a database union"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      question: "What is the purpose of the 'readonly' modifier?",
      options: [
        "To make a property visible only within a class",
        "To prevent a property from being modified after initialization",
        "To make a property optional",
        "To make a property nullable"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "What is a Generic in TypeScript?",
      options: [
        "A type that can only be used once",
        "A placeholder for a type that will be specified later",
        "A type that can't be changed",
        "A type that only works with numbers"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is an Enum in TypeScript?",
      options: [
        "A type for numbers only",
        "A collection of related values",
        "A type for strings only",
        "A type for functions"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is the 'never' type in TypeScript?",
      options: [
        "A type that can hold any value",
        "A type that represents values that never occur",
        "A type that can only hold null",
        "A type that can only hold undefined"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is Type Inference in TypeScript?",
      options: [
        "Manually specifying types",
        "TypeScript's ability to automatically determine types",
        "Converting types at runtime",
        "Importing types from other files"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "What is a Type Assertion in TypeScript?",
      options: [
        "Automatically converting types",
        "Telling the compiler to treat a value as a specific type",
        "Creating new types",
        "Combining multiple types"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "What is the purpose of 'declare' keyword?",
      options: [
        "To create a new variable",
        "To tell TypeScript that a variable exists elsewhere",
        "To declare a function",
        "To create a new type"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "What is a Tuple type in TypeScript?",
      options: [
        "An array with fixed number of elements of known types",
        "A type that can only hold numbers",
        "A type that can only hold strings",
        "An array with unlimited elements"
      ],
      correctAnswer: 0
    },
    {
      id: 14,
      question: "What is an Index Signature in TypeScript?",
      options: [
        "A way to sort arrays",
        "A way to define the type of properties in an object",
        "A way to index into arrays",
        "A way to create new indexes"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "What is the difference between 'interface' and 'type'?",
      options: [
        "They are exactly the same",
        "Interfaces can be extended, types cannot",
        "Types can be extended, interfaces cannot",
        "Interfaces are slower than types"
      ],
      correctAnswer: 1
    }
  ],
  'Your Topic Name': [
    {
      id: 1,
      question: "Your question here?",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      correctAnswer: 0  // Index of the correct option (0-3)
    },
    // Add more questions...
  ]
};

export default function QuizSection({ topicId }: QuizSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!topicId) {
    // Get all questions from all topics
    const allQuestions = Object.values(quizzesByTopic).flat();
    
    // Shuffle and take first 10 questions (or however many you want)
    const shuffledQuestions = allQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Random Practice Quiz</h2>
        {!quizComplete ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
              </p>
              <p className="text-gray-600">
                Score: {score}/{shuffledQuestions.length}
              </p>
            </div>
            <p className="text-lg font-medium">{shuffledQuestions[currentQuestionIndex].question}</p>
            <div className="space-y-2">
              {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(index)}
                  className={`w-full text-left p-3 rounded ${
                    selectedAnswer === null
                      ? 'hover:bg-gray-100 bg-gray-50'
                      : showResult
                      ? index === shuffledQuestions[currentQuestionIndex].correctAnswer
                        ? 'bg-green-100 border-green-500'
                        : index === selectedAnswer
                        ? 'bg-red-100 border-red-500'
                        : 'bg-gray-50'
                      : selectedAnswer === index
                      ? 'bg-blue-100'
                      : 'bg-gray-50'
                  }`}
                  disabled={showResult}
                >
                  {option}
                </button>
              ))}
            </div>
            {!showResult ? (
              <button
                onClick={() => {
                  if (selectedAnswer !== null) {
                    setShowResult(true);
                    if (selectedAnswer === shuffledQuestions[currentQuestionIndex].correctAnswer) {
                      setScore(score + 1);
                    }
                  }
                }}
                disabled={selectedAnswer === null}
                className={`mt-4 px-4 py-2 rounded ${
                  selectedAnswer === null
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={() => {
                  if (currentQuestionIndex < shuffledQuestions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setSelectedAnswer(null);
                    setShowResult(false);
                  } else {
                    setQuizComplete(true);
                  }
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            )}
          </div>
        ) : (
          <div>
            <p className="text-lg mb-4">
              Quiz Complete! Your score: {score} out of {shuffledQuestions.length}
            </p>
            <p className="text-lg mb-4">
              Percentage: {Math.round((score / shuffledQuestions.length) * 100)}%
            </p>
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setScore(0);
                setQuizComplete(false);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Another Quiz
            </button>
          </div>
        )}
      </div>
    );
  }

  if (!topicId || !quizzesByTopic[topicId]) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Practice Quiz</h2>
        <p className="text-gray-600">Select a topic to view its quiz questions.</p>
      </div>
    );
  }

  const questions = quizzesByTopic[topicId];
  const currentQuiz = questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
      if (selectedAnswer === currentQuiz.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-lg mb-4">
          Your score: {score} out of {questions.length}
        </p>
        <p className="text-lg mb-4">
          Percentage: {Math.round((score / questions.length) * 100)}%
        </p>
        <button
          onClick={restartQuiz}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Practice Quiz - {topicId}</h2>
        <p className="text-gray-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-lg font-medium">{currentQuiz.question}</p>
        <div className="space-y-2">
          {currentQuiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && setSelectedAnswer(index)}
              className={`w-full text-left p-3 rounded ${
                selectedAnswer === null
                  ? 'hover:bg-gray-100 bg-gray-50'
                  : showResult
                  ? index === currentQuiz.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : index === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50'
                  : selectedAnswer === index
                  ? 'bg-blue-100'
                  : 'bg-gray-50'
              }`}
              disabled={showResult}
            >
              {option}
            </button>
          ))}
        </div>
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`mt-4 px-4 py-2 rounded ${
              selectedAnswer === null
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
} 