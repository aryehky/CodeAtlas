'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const RandomQuiz = dynamic(() => import('./RandomQuiz'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Random Practice Quiz</h2>
      <p>Loading questions...</p>
    </div>
  ),
});

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizSectionProps {
  topicId?: string;
}

export const quizzesByTopic: Record<string, Question[]> = {
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
      question: "What is object destructuring used for?",
      options: [
        "To delete object properties",
        "To extract object properties into variables",
        "To combine objects",
        "To copy objects"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What is the shorthand property syntax in objects?",
      options: [
        "When property name matches variable name, you can omit the value",
        "When property value is undefined",
        "When property name is a string",
        "When property value is null"
      ],
      correctAnswer: 0
    },
    {
      id: 15,
      question: "What's the difference between arrow functions and regular functions regarding 'this'?",
      options: [
        "Arrow functions have their own 'this'",
        "Arrow functions inherit 'this' from surrounding context",
        "Arrow functions don't have 'this'",
        "Regular functions don't have 'this'"
      ],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "What is a factory function?",
      options: [
        "A function that creates objects",
        "A function that deletes objects",
        "A function that modifies objects",
        "A function that compares objects"
      ],
      correctAnswer: 0
    },
    {
      id: 17,
      question: "What is the purpose of getters and setters?",
      options: [
        "To make properties private",
        "To intercept property access and assignment",
        "To delete properties",
        "To rename properties"
      ],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "Which array method would you use to transform each element?",
      options: [
        "filter()",
        "reduce()",
        "map()",
        "forEach()"
      ],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "What does the reduce() method do?",
      options: [
        "Removes elements from array",
        "Combines array elements into single value",
        "Filters array elements",
        "Maps array elements"
      ],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "What's the difference between forEach and map?",
      options: [
        "forEach is faster",
        "map creates a new array, forEach doesn't",
        "forEach can modify elements, map can't",
        "There is no difference"
      ],
      correctAnswer: 1
    },
    {
      id: 21,
      question: "What is a higher-order function?",
      options: [
        "A function that takes long to execute",
        "A function that accepts or returns functions",
        "A function with many parameters",
        "A function that uses recursion"
      ],
      correctAnswer: 1
    },
    {
      id: 22,
      question: "When should you use the break statement?",
      options: [
        "To skip one iteration",
        "To exit a loop early",
        "To start a loop",
        "To pause a loop"
      ],
      correctAnswer: 1
    },
    {
      id: 23,
      question: "What is the purpose of the spread operator (...)?",
      options: [
        "To delete array elements",
        "To expand elements into individual items",
        "To sort arrays",
        "To filter arrays"
      ],
      correctAnswer: 1
    },
    {
      id: 24,
      question: "What does Array.fill() do?",
      options: [
        "Sorts the array",
        "Removes elements",
        "Fills array with a static value",
        "Joins array elements"
      ],
      correctAnswer: 2
    },
    {
      id: 25,
      question: "How can you check if a number is even using modulo?",
      options: [
        "num / 2",
        "num % 2 === 0",
        "num * 2",
        "num - 2"
      ],
      correctAnswer: 1
    },
    {
      id: 26,
      question: "What is short-circuit evaluation?",
      options: [
        "A way to optimize code",
        "Using && and || for conditional logic",
        "A way to terminate loops",
        "A way to catch errors"
      ],
      correctAnswer: 1
    },
    {
      id: 27,
      question: "What is the purpose of optional chaining (?.)?",
      options: [
        "To create optional parameters",
        "To safely access nested properties",
        "To make properties optional",
        "To chain function calls"
      ],
      correctAnswer: 1
    },
    {
      id: 28,
      question: "How do you swap variables using array destructuring?",
      options: [
        "Using a temporary variable",
        "[a, b] = [b, a]",
        "swap(a, b)",
        "a.swap(b)"
      ],
      correctAnswer: 1
    },
    {
      id: 29,
      question: "What does Array.from() with a mapping function do?",
      options: [
        "Copies an array",
        "Creates an array from another object",
        "Generates a range of numbers",
        "Converts array to object"
      ],
      correctAnswer: 2
    },
    {
      id: 30,
      question: "What's the difference between for...of and for...in?",
      options: [
        "No difference",
        "for...of for arrays, for...in for object properties",
        "for...in for arrays, for...of for object properties",
        "They're interchangeable"
      ],
      correctAnswer: 1
    },
    {
      id: 31,
      question: "What does Promise.all() do?",
      options: [
        "Cancels all promises",
        "Runs promises sequentially",
        "Runs promises in parallel and waits for all to complete",
        "Rejects all promises"
      ],
      correctAnswer: 2
    },
    {
      id: 32,
      question: "How can you create an array with a range of numbers?",
      options: [
        "range(1, 5)",
        "Array.range(5)",
        "Array.from({length: 5}, (_, i) => i + 1)",
        "new Array(1..5)"
      ],
      correctAnswer: 2
    },
    {
      id: 33,
      question: "Which loop should you use to iterate over object properties?",
      options: [
        "for...of",
        "for...in",
        "forEach",
        "while"
      ],
      correctAnswer: 1
    },
    {
      id: 34,
      question: "What will `[1, 2, 3].map(x => x * 2)` return?",
      options: [
        "[1, 2, 3]",
        "[2, 4, 6]",
        "undefined",
        "6"
      ],
      correctAnswer: 1
    },
    {
      id: 35,
      question: "How would you sum all numbers in an array [1, 2, 3, 4]?",
      options: [
        "array.sum()",
        "array.reduce((a, b) => a + b, 0)",
        "array.forEach(sum += x)",
        "array.total()"
      ],
      correctAnswer: 1
    },
    {
      id: 36,
      question: "What's the output of `['a', 'b', 'c'].join('-')`?",
      options: [
        "abc",
        "a-b-c",
        "['a'-'b'-'c']",
        "a,b,c"
      ],
      correctAnswer: 1
    },
    {
      id: 37,
      question: "How do you create an array of 5 zeros using Array.fill()?",
      options: [
        "Array(5).fill(0)",
        "new Array.fill(0, 5)",
        "[].fill(0, 5)",
        "Array.fill(0).length(5)"
      ],
      correctAnswer: 0
    },
    {
      id: 38,
      question: "What's wrong with this loop: `for(let i = 0; i < 5; i--)`?",
      options: [
        "Syntax error",
        "Nothing wrong",
        "Will run infinitely",
        "i cannot be decremented"
      ],
      correctAnswer: 2
    },
    {
      id: 39,
      question: "How do you check if ANY array element is greater than 5?",
      options: [
        "array.includes(x > 5)",
        "array.some(x => x > 5)",
        "array.filter(x => x > 5)",
        "array.find(x => x > 5)"
      ],
      correctAnswer: 1
    },
    {
      id: 40,
      question: "What does `array.every(x => x > 0)` check?",
      options: [
        "If array contains 0",
        "If all elements are positive",
        "If any element is positive",
        "If array is empty"
      ],
      correctAnswer: 1
    },
    {
      id: 41,
      question: "How do you find the first even number in an array?",
      options: [
        "array.filter(x => x % 2 === 0)",
        "array.find(x => x % 2 === 0)",
        "array.some(x => x % 2 === 0)",
        "array.includes(x => x % 2 === 0)"
      ],
      correctAnswer: 1
    },
    {
      id: 42,
      question: "What's the difference between break and continue in loops?",
      options: [
        "No difference",
        "break exits loop, continue skips iteration",
        "continue exits loop, break skips iteration",
        "They both exit the loop"
      ],
      correctAnswer: 1
    },
    {
      id: 43,
      question: "What is the .length property used for in arrays?",
      options: [
        "To change array size",
        "To get number of elements in array",
        "To get last element",
        "To add new elements"
      ],
      correctAnswer: 1
    },
    {
      id: 44,
      question: "What's the difference between null and undefined?",
      options: [
        "They are the same",
        "null is assigned, undefined is default empty value",
        "undefined is assigned, null is default empty value",
        "null is for numbers, undefined for strings"
      ],
      correctAnswer: 1
    },
    {
      id: 45,
      question: "What will `Math.floor(5.95)` return?",
      options: [
        "6",
        "5",
        "5.95",
        "5.9"
      ],
      correctAnswer: 1
    },
    {
      id: 46,
      question: "Which operator is used for string interpolation in template literals?",
      options: [
        "{variable}",
        "#{variable}",
        "${variable}",
        "@{variable}"
      ],
      correctAnswer: 2
    },
    {
      id: 47,
      question: "What's the difference between let and const?",
      options: [
        "No difference",
        "let is block-scoped, const is function-scoped",
        "const cannot be reassigned, let can be",
        "let cannot be reassigned, const can be"
      ],
      correctAnswer: 2
    },
    {
      id: 48,
      question: "What will `365 % 7` return?",
      options: [
        "52",
        "1",
        "7",
        "0"
      ],
      correctAnswer: 1
    },
    {
      id: 49,
      question: "What's the scope of a variable declared with var?",
      options: [
        "Block scope",
        "Function scope",
        "Module scope",
        "No scope"
      ],
      correctAnswer: 1
    },
    {
      id: 50,
      question: "Which method is used to add elements to the end of an array?",
      options: [
        "append()",
        "push()",
        "add()",
        "insert()"
      ],
      correctAnswer: 1
    },
    {
      id: 51,
      question: "What does the logical NOT operator (!) do?",
      options: [
        "Adds numbers",
        "Concatenates strings",
        "Inverts boolean values",
        "Compares values"
      ],
      correctAnswer: 2
    },
    {
      id: 52,
      question: "What's the result of `'5' + 2` in JavaScript?",
      options: [
        "7",
        "'52'",
        "52",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      id: 53,
      question: "Which values are considered falsy in JavaScript?",
      options: [
        "Only false",
        "false, 0, '', null, undefined, NaN",
        "false and 0 only",
        "false, null, and undefined only"
      ],
      correctAnswer: 1
    },
    {
      id: 54,
      question: "What's the purpose of the switch statement?",
      options: [
        "To declare variables",
        "To create loops",
        "To handle multiple conditions for a single value",
        "To define functions"
      ],
      correctAnswer: 2
    },
    {
      id: 55,
      question: "How do you write a multi-line comment in JavaScript?",
      options: [
        "// comment //",
        "/* comment */",
        "# comment #",
        "<!-- comment -->"
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
    },
    {
      id: 16,
      question: "What is a functional component in React?",
      options: [
        "A regular JavaScript function",
        "A function that returns React elements",
        "A class that extends React.Component",
        "A component with functions only"
      ],
      correctAnswer: 1
    },
    {
      id: 17,
      question: "When should you use the useState hook?",
      options: [
        "Only in class components",
        "To manage state in functional components",
        "To create new components",
        "To handle routing"
      ],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "What is the purpose of useEffect?",
      options: [
        "To create side effects",
        "To handle component lifecycle and side effects",
        "To affect other components",
        "To create global state"
      ],
      correctAnswer: 1
    },
    {
      id: 19,
      question: "What's the difference between props and state?",
      options: [
        "Props are internal, state is external",
        "Props are mutable, state is immutable",
        "Props are passed from parent, state is managed internally",
        "There is no difference"
      ],
      correctAnswer: 2
    },
    {
      id: 20,
      question: "Why do we need keys in lists?",
      options: [
        "For styling purposes",
        "To make lists look better",
        "To help React identify changed items",
        "Keys are optional"
      ],
      correctAnswer: 2
    },
    {
      id: 21,
      question: "What is conditional rendering?",
      options: [
        "Rendering based on conditions",
        "Rendering all conditions",
        "A type of CSS",
        "A React component"
      ],
      correctAnswer: 0
    },
    {
      id: 22,
      question: "When should you use a class component instead of a functional component?",
      options: [
        "Always",
        "Never",
        "When you need error boundaries",
        "When you have state"
      ],
      correctAnswer: 2
    },
    {
      id: 23,
      question: "What is the virtual DOM?",
      options: [
        "A copy of the real DOM",
        "A faster version of DOM",
        "React's representation of UI",
        "A browser feature"
      ],
      correctAnswer: 2
    },
    {
      id: 24,
      question: "How do you handle forms in React?",
      options: [
        "Using only HTML forms",
        "Using controlled components",
        "Forms aren't used in React",
        "Using jQuery"
      ],
      correctAnswer: 1
    },
    {
      id: 25,
      question: "What is prop drilling?",
      options: [
        "A React feature",
        "Passing props through multiple levels",
        "Creating new props",
        "Removing props"
      ],
      correctAnswer: 1
    },
    {
      id: 26,
      question: "What is the Context API used for?",
      options: [
        "Styling components",
        "Managing global state",
        "Creating components",
        "Handling events"
      ],
      correctAnswer: 1
    },
    {
      id: 27,
      question: "What is a pure component?",
      options: [
        "A component without state",
        "A component that only renders once",
        "A component that only re-renders if props/state change",
        "A component without props"
      ],
      correctAnswer: 2
    },
    {
      id: 28,
      question: "What is the purpose of React.memo?",
      options: [
        "To add memory to components",
        "To prevent unnecessary re-renders",
        "To memorize component data",
        "To improve loading speed"
      ],
      correctAnswer: 1
    },
    {
      id: 29,
      question: "What are React Hooks rules?",
      options: [
        "Can be used anywhere",
        "Must be used at top level of component",
        "Can be used in loops",
        "Can be used conditionally"
      ],
      correctAnswer: 1
    },
    {
      id: 30,
      question: "What is the useCallback hook used for?",
      options: [
        "To cache functions",
        "To call functions",
        "To create callbacks",
        "To handle events"
      ],
      correctAnswer: 0
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
      question: "Which SQL statement is used to extract data from a database?",
      options: [
        "GET",
        "EXTRACT",
        "SELECT",
        "OPEN"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is a primary key?",
      options: [
        "The first column in a table",
        "A unique identifier for each record",
        "The most important data in a table",
        "A key that opens the database"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which SQL keyword is used to sort the result-set?",
      options: [
        "SORT BY",
        "ORDER BY",
        "ARRANGE BY",
        "ORGANIZE BY"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of the JOIN clause in SQL?",
      options: [
        "To join two strings together",
        "To combine rows from two or more tables",
        "To join two databases",
        "To connect to the database"
      ],
      correctAnswer: 1
    }
  ],
  'POSTGRESQL': [
    {
      id: 1,
      question: "What type of database is PostgreSQL?",
      options: [
        "NoSQL Database",
        "Object-Relational Database",
        "Key-Value Store",
        "Document Database"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which of these is a PostgreSQL-specific data type?",
      options: [
        "VARCHAR",
        "INTEGER",
        "JSONB",
        "DATE"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is PostGIS?",
      options: [
        "A PostgreSQL backup tool",
        "A spatial database extender for PostgreSQL",
        "A GUI for PostgreSQL",
        "A PostgreSQL query optimizer"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is a unique feature of PostgreSQL compared to standard SQL?",
      options: [
        "Basic SELECT queries",
        "Table joins",
        "Table inheritance",
        "INSERT statements"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Which concurrency control does PostgreSQL use?",
      options: [
        "MVCC (Multi-Version Concurrency Control)",
        "Simple locking",
        "Single version control",
        "No concurrency control"
      ],
      correctAnswer: 0
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
  ],
  'JEST': [
    {
      id: 1,
      question: "What is Jest primarily used for?",
      options: [
        "Database management",
        "JavaScript testing",
        "State management",
        "API development"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which function is used to group related test cases in Jest?",
      options: [
        "group()",
        "suite()",
        "describe()",
        "collection()"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the correct way to write a test case in Jest?",
      options: [
        "it('should work', function() {})",
        "test('should work', () => {})",
        "assert('should work', () => {})",
        "spec('should work', () => {})"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which matcher is used to check exact equality in Jest?",
      options: [
        "toEqual()",
        "toBe()",
        "toMatch()",
        "toStrictEqual()"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "How do you create a mock function in Jest?",
      options: [
        "mock.fn()",
        "jest.mock()",
        "jest.fn()",
        "new Mock()"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is the purpose of beforeEach() in Jest?",
      options: [
        "To run code after each test",
        "To run code before all tests",
        "To run code before each test",
        "To skip the next test"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "How do you test asynchronous code in Jest?",
      options: [
        "Use async/await or return a promise",
        "Use setTimeout",
        "Use setInterval",
        "Use callbacks"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "What command runs Jest in watch mode?",
      options: [
        "jest --watchAll",
        "jest --monitor",
        "jest --observe",
        "jest --live"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "What is snapshot testing in Jest?",
      options: [
        "Taking screenshots of components",
        "Saving the current state of tests",
        "Comparing UI components with saved versions",
        "Testing database snapshots"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "How do you mock an entire module in Jest?",
      options: [
        "mock('./module')",
        "jest.mock('./module')",
        "mock.module('./module')",
        "jest.mockModule('./module')"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "What is the purpose of expect.assertions() in Jest?",
      options: [
        "To verify the number of assertions in a test",
        "To create new assertions",
        "To disable assertions",
        "To count total assertions in all tests"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      question: "How do you test if a function was called in Jest?",
      options: [
        "expect(fn).toBeCalled()",
        "expect(fn).toHaveBeenCalled()",
        "expect(fn).wasCalled()",
        "expect(fn).called()"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "What is the purpose of jest.spyOn()?",
      options: [
        "To create a new mock function",
        "To track calls to an object's methods",
        "To spy on other test files",
        "To monitor test performance"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "How do you run a single test file in Jest?",
      options: [
        "jest filename.test.js",
        "jest run filename.test.js",
        "jest --file filename.test.js",
        "jest --only filename.test.js"
      ],
      correctAnswer: 0
    },
    {
      id: 15,
      question: "What does the --coverage flag do in Jest?",
      options: [
        "Increases test coverage automatically",
        "Shows which parts of code are tested",
        "Covers all possible test scenarios",
        "Covers only important tests"
      ],
      correctAnswer: 1
    }
  ],
  'CYPRESS': [
    {
      id: 1,
      question: "What type of testing framework is Cypress?",
      options: [
        "Unit testing only",
        "End-to-end testing",
        "API testing only",
        "Performance testing"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which command is used to select elements in Cypress?",
      options: [
        "cy.find()",
        "cy.select()",
        "cy.get()",
        "cy.query()"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "How do you make assertions in Cypress?",
      options: [
        "assert()",
        "expect()",
        "should()",
        "test()"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What is the recommended way to select elements for testing in Cypress?",
      options: [
        "Using class names",
        "Using IDs",
        "Using data-cy attributes",
        "Using element tags"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "How do you wait for an API request in Cypress?",
      options: [
        "cy.wait('@alias')",
        "cy.waitFor('api')",
        "cy.pause()",
        "cy.delay()"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      question: "What command is used to type text into an input field?",
      options: [
        "cy.input()",
        "cy.enter()",
        "cy.type()",
        "cy.write()"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "How do you intercept network requests in Cypress?",
      options: [
        "cy.intercept()",
        "cy.network()",
        "cy.mock()",
        "cy.stub()"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "What command opens the Cypress Test Runner?",
      options: [
        "cypress start",
        "cypress open",
        "cypress run",
        "cypress launch"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "How do you load fixture data in Cypress?",
      options: [
        "cy.load('fixture')",
        "cy.fixture()",
        "cy.data()",
        "cy.import()"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is the purpose of cy.within()?",
      options: [
        "To set a timeout",
        "To scope commands to within an element",
        "To test within a timeframe",
        "To test within a component"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "How do you visit a URL in Cypress?",
      options: [
        "cy.goto()",
        "cy.navigate()",
        "cy.visit()",
        "cy.open()"
      ],
      correctAnswer: 2
    },
    {
      id: 12,
      question: "What is the default command timeout in Cypress?",
      options: [
        "2000ms",
        "4000ms",
        "6000ms",
        "8000ms"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "How do you create custom commands in Cypress?",
      options: [
        "Cypress.addCommand()",
        "Cypress.Commands.add()",
        "cy.createCommand()",
        "cy.extend()"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What does cy.contains() do?",
      options: [
        "Checks if an element exists",
        "Finds element by text content",
        "Contains a specific attribute",
        "Checks if element contains children"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "How do you run Cypress tests headlessly?",
      options: [
        "cypress --headless",
        "cypress run",
        "cypress test",
        "cypress ci"
      ],
      correctAnswer: 1
    }
  ],
  'OAUTH': [
    {
      id: 1,
      question: "What is OAuth 2.0 primarily used for?",
      options: [
        "User authentication only",
        "Authorization and delegated access",
        "Password encryption",
        "Database security"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which OAuth 2.0 flow is recommended for web applications?",
      options: [
        "Implicit Flow",
        "Authorization Code Flow",
        "Password Flow",
        "Client Credentials Flow"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the purpose of the 'state' parameter in OAuth?",
      options: [
        "To store user data",
        "To prevent CSRF attacks",
        "To track authorization status",
        "To encrypt tokens"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is PKCE used for in OAuth?",
      options: [
        "Token encryption",
        "User authentication",
        "Secure code exchange for public clients",
        "Database access"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Which grant type should be used for machine-to-machine authentication?",
      options: [
        "Authorization Code",
        "Implicit",
        "Client Credentials",
        "Password"
      ],
      correctAnswer: 2
    }
  ],
  'JWT': [
    {
      id: 1,
      question: "What are the three parts of a JWT?",
      options: [
        "Header, Body, Signature",
        "Header, Payload, Signature",
        "Header, Content, Verification",
        "Token, Data, Signature"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is the purpose of JWT signing?",
      options: [
        "To encrypt the data",
        "To verify token integrity",
        "To compress the token",
        "To format the data"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Where should you store JWTs in a web application?",
      options: [
        "Local Storage",
        "HTTP-only Cookies",
        "Session Storage",
        "JavaScript variables"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is a common security issue with JWTs?",
      options: [
        "They're too short",
        "They can't be encrypted",
        "They can't be invalidated easily",
        "They're too slow"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What should you include in a JWT payload?",
      options: [
        "Sensitive user data",
        "Passwords",
        "Essential claims only",
        "Database credentials"
      ],
      correctAnswer: 2
    }
  ],
  'SECUREDB': [
    {
      id: 1,
      question: "What is SQL injection?",
      options: [
        "A database backup method",
        "A way to optimize queries",
        "A type of security attack",
        "A database design pattern"
      ],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "How can you prevent SQL injection?",
      options: [
        "Use more indexes",
        "Use parameterized queries",
        "Use faster queries",
        "Use better hardware"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the principle of least privilege?",
      options: [
        "Give users all permissions",
        "Give users minimum required permissions",
        "Remove all permissions",
        "Share all permissions"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is encryption at rest?",
      options: [
        "Encrypting data during transfer",
        "Encrypting stored data",
        "Encrypting backups",
        "Encrypting queries"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Which is a best practice for database security?",
      options: [
        "Store passwords in plain text",
        "Use default database settings",
        "Regular security audits",
        "Share database credentials"
      ],
      correctAnswer: 2
    }
  ],
  'CHARTJS': [
    {
      id: 1,
      question: "What type of HTML element does Chart.js use for rendering?",
      options: [
        "SVG",
        "Canvas",
        "Div",
        "WebGL"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which method is used to create a new chart in Chart.js?",
      options: [
        "new Graph()",
        "new Chart()",
        "createChart()",
        "Chart.create()"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the correct way to specify a chart type in Chart.js?",
      options: [
        "chartType: 'bar'",
        "style: 'bar'",
        "type: 'bar'",
        "graph: 'bar'"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "How do you update data in an existing Chart.js chart?",
      options: [
        "chart.refresh()",
        "chart.update()",
        "chart.redraw()",
        "chart.render()"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Which property is used to configure chart animations?",
      options: [
        "animate",
        "transition",
        "animation",
        "motion"
      ],
      correctAnswer: 2
    }
  ],
  'D3': [
    {
      id: 1,
      question: "What does D3 stand for?",
      options: [
        "Data-Driven Development",
        "Data-Driven Documents",
        "Document-Driven Data",
        "Dynamic Data Documents"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which method is used to select elements in D3?",
      options: [
        "querySelector()",
        "find()",
        "select()",
        "get()"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the purpose of d3.scale?",
      options: [
        "To resize the SVG",
        "To map data values to visual properties",
        "To scale the webpage",
        "To change font sizes"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which D3 method is used for data binding?",
      options: [
        "bind()",
        "connect()",
        "data()",
        "join()"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What is the purpose of d3.enter()?",
      options: [
        "To exit a selection",
        "To create new elements for data",
        "To enter a new page",
        "To start an animation"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which D3 method is used to create smooth transitions?",
      options: [
        "animate()",
        "transition()",
        "tween()",
        "motion()"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "What type of element does D3 typically use for visualizations?",
      options: [
        "Canvas",
        "SVG",
        "Div",
        "Image"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "How do you handle events in D3?",
      options: [
        "addEventListener()",
        "on()",
        "handle()",
        "event()"
      ],
      correctAnswer: 1
    }
  ],
  'JAVASCRIPT': [
    {
      id: 1,
      question: "What is object destructuring used for?",
      options: [
        "To delete object properties",
        "To extract object properties into variables",
        "To combine objects",
        "To copy objects"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is the shorthand property syntax in objects?",
      options: [
        "When property name matches variable name, you can omit the value",
        "When property value is undefined",
        "When property name is a string",
        "When property value is null"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What's the difference between arrow functions and regular functions regarding 'this'?",
      options: [
        "Arrow functions have their own 'this'",
        "Arrow functions inherit 'this' from surrounding context",
        "Arrow functions don't have 'this'",
        "Regular functions don't have 'this'"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is a factory function?",
      options: [
        "A function that creates objects",
        "A function that deletes objects",
        "A function that modifies objects",
        "A function that compares objects"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "What is the purpose of getters and setters?",
      options: [
        "To make properties private",
        "To intercept property access and assignment",
        "To delete properties",
        "To rename properties"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which array method would you use to transform each element?",
      options: [
        "filter()",
        "reduce()",
        "map()",
        "forEach()"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What does the reduce() method do?",
      options: [
        "Removes elements from array",
        "Combines array elements into single value",
        "Filters array elements",
        "Maps array elements"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What's the difference between forEach and map?",
      options: [
        "forEach is faster",
        "map creates a new array, forEach doesn't",
        "forEach can modify elements, map can't",
        "There is no difference"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is a higher-order function?",
      options: [
        "A function that takes long to execute",
        "A function that accepts or returns functions",
        "A function with many parameters",
        "A function that uses recursion"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "When should you use the break statement?",
      options: [
        "To skip one iteration",
        "To exit a loop early",
        "To start a loop",
        "To pause a loop"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "What is the purpose of the spread operator (...)?",
      options: [
        "To delete array elements",
        "To expand elements into individual items",
        "To sort arrays",
        "To filter arrays"
      ],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "What does Array.fill() do?",
      options: [
        "Sorts the array",
        "Removes elements",
        "Fills array with a static value",
        "Joins array elements"
      ],
      correctAnswer: 2
    },
    {
      id: 13,
      question: "How can you check if a number is even using modulo?",
      options: [
        "num / 2",
        "num % 2 === 0",
        "num * 2",
        "num - 2"
      ],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "What is short-circuit evaluation?",
      options: [
        "A way to optimize code",
        "Using && and || for conditional logic",
        "A way to terminate loops",
        "A way to catch errors"
      ],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "What is the purpose of optional chaining (?.)?",
      options: [
        "To create optional parameters",
        "To safely access nested properties",
        "To make properties optional",
        "To chain function calls"
      ],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "How do you swap variables using array destructuring?",
      options: [
        "Using a temporary variable",
        "[a, b] = [b, a]",
        "swap(a, b)",
        "a.swap(b)"
      ],
      correctAnswer: 1
    },
    {
      id: 17,
      question: "What does Array.from() with a mapping function do?",
      options: [
        "Copies an array",
        "Creates an array from another object",
        "Generates a range of numbers",
        "Converts array to object"
      ],
      correctAnswer: 2
    },
    {
      id: 18,
      question: "What's the difference between for...of and for...in?",
      options: [
        "No difference",
        "for...of for arrays, for...in for object properties",
        "for...in for arrays, for...of for object properties",
        "They're interchangeable"
      ],
      correctAnswer: 1
    },
    {
      id: 19,
      question: "What does Promise.all() do?",
      options: [
        "Cancels all promises",
        "Runs promises sequentially",
        "Runs promises in parallel and waits for all to complete",
        "Rejects all promises"
      ],
      correctAnswer: 2
    },
    {
      id: 20,
      question: "How can you create an array with a range of numbers?",
      options: [
        "range(1, 5)",
        "Array.range(5)",
        "Array.from({length: 5}, (_, i) => i + 1)",
        "new Array(1..5)"
      ],
      correctAnswer: 2
    },
    {
      id: 33,
      question: "Which loop should you use to iterate over object properties?",
      options: [
        "for...of",
        "for...in",
        "forEach",
        "while"
      ],
      correctAnswer: 1
    },
    {
      id: 34,
      question: "What will `[1, 2, 3].map(x => x * 2)` return?",
      options: [
        "[1, 2, 3]",
        "[2, 4, 6]",
        "undefined",
        "6"
      ],
      correctAnswer: 1
    },
    {
      id: 35,
      question: "How would you sum all numbers in an array [1, 2, 3, 4]?",
      options: [
        "array.sum()",
        "array.reduce((a, b) => a + b, 0)",
        "array.forEach(sum += x)",
        "array.total()"
      ],
      correctAnswer: 1
    },
    {
      id: 36,
      question: "What's the output of `['a', 'b', 'c'].join('-')`?",
      options: [
        "abc",
        "a-b-c",
        "['a'-'b'-'c']",
        "a,b,c"
      ],
      correctAnswer: 1
    },
    {
      id: 37,
      question: "How do you create an array of 5 zeros using Array.fill()?",
      options: [
        "Array(5).fill(0)",
        "new Array.fill(0, 5)",
        "[].fill(0, 5)",
        "Array.fill(0).length(5)"
      ],
      correctAnswer: 0
    },
    {
      id: 38,
      question: "What's wrong with this loop: `for(let i = 0; i < 5; i--)`?",
      options: [
        "Syntax error",
        "Nothing wrong",
        "Will run infinitely",
        "i cannot be decremented"
      ],
      correctAnswer: 2
    },
    {
      id: 39,
      question: "How do you check if ANY array element is greater than 5?",
      options: [
        "array.includes(x > 5)",
        "array.some(x => x > 5)",
        "array.filter(x => x > 5)",
        "array.find(x => x > 5)"
      ],
      correctAnswer: 1
    },
    {
      id: 40,
      question: "What does `array.every(x => x > 0)` check?",
      options: [
        "If array contains 0",
        "If all elements are positive",
        "If any element is positive",
        "If array is empty"
      ],
      correctAnswer: 1
    },
    {
      id: 41,
      question: "How do you find the first even number in an array?",
      options: [
        "array.filter(x => x % 2 === 0)",
        "array.find(x => x % 2 === 0)",
        "array.some(x => x % 2 === 0)",
        "array.includes(x => x % 2 === 0)"
      ],
      correctAnswer: 1
    },
    {
      id: 42,
      question: "What's the difference between break and continue in loops?",
      options: [
        "No difference",
        "break exits loop, continue skips iteration",
        "continue exits loop, break skips iteration",
        "They both exit the loop"
      ],
      correctAnswer: 1
    },
    {
      id: 43,
      question: "What is the .length property used for in arrays?",
      options: [
        "To change array size",
        "To get number of elements in array",
        "To get last element",
        "To add new elements"
      ],
      correctAnswer: 1
    },
    {
      id: 44,
      question: "What's the difference between null and undefined?",
      options: [
        "They are the same",
        "null is assigned, undefined is default empty value",
        "undefined is assigned, null is default empty value",
        "null is for numbers, undefined for strings"
      ],
      correctAnswer: 1
    },
    {
      id: 45,
      question: "What will `Math.floor(5.95)` return?",
      options: [
        "6",
        "5",
        "5.95",
        "5.9"
      ],
      correctAnswer: 1
    },
    {
      id: 46,
      question: "Which operator is used for string interpolation in template literals?",
      options: [
        "{variable}",
        "#{variable}",
        "${variable}",
        "@{variable}"
      ],
      correctAnswer: 2
    },
    {
      id: 47,
      question: "What's the difference between let and const?",
      options: [
        "No difference",
        "let is block-scoped, const is function-scoped",
        "const cannot be reassigned, let can be",
        "let cannot be reassigned, const can be"
      ],
      correctAnswer: 2
    },
    {
      id: 48,
      question: "What will `365 % 7` return?",
      options: [
        "52",
        "1",
        "7",
        "0"
      ],
      correctAnswer: 1
    },
    {
      id: 49,
      question: "What's the scope of a variable declared with var?",
      options: [
        "Block scope",
        "Function scope",
        "Module scope",
        "No scope"
      ],
      correctAnswer: 1
    },
    {
      id: 50,
      question: "Which method is used to add elements to the end of an array?",
      options: [
        "append()",
        "push()",
        "add()",
        "insert()"
      ],
      correctAnswer: 1
    },
    {
      id: 51,
      question: "What does the logical NOT operator (!) do?",
      options: [
        "Adds numbers",
        "Concatenates strings",
        "Inverts boolean values",
        "Compares values"
      ],
      correctAnswer: 2
    },
    {
      id: 52,
      question: "What's the result of `'5' + 2` in JavaScript?",
      options: [
        "7",
        "'52'",
        "52",
        "Error"
      ],
      correctAnswer: 1
    },
    {
      id: 53,
      question: "Which values are considered falsy in JavaScript?",
      options: [
        "Only false",
        "false, 0, '', null, undefined, NaN",
        "false and 0 only",
        "false, null, and undefined only"
      ],
      correctAnswer: 1
    },
    {
      id: 54,
      question: "What's the purpose of the switch statement?",
      options: [
        "To declare variables",
        "To create loops",
        "To handle multiple conditions for a single value",
        "To define functions"
      ],
      correctAnswer: 2
    },
    {
      id: 55,
      question: "How do you write a multi-line comment in JavaScript?",
      options: [
        "// comment //",
        "/* comment */",
        "# comment #",
        "<!-- comment -->"
      ],
      correctAnswer: 1
    }
  ],
  'REACT': [
    {
      id: 1,
      question: "What is a functional component in React?",
      options: [
        "A regular JavaScript function",
        "A function that returns React elements",
        "A class that extends React.Component",
        "A component with functions only"
      ],
      correctAnswer: 1
    },
    // ... (previous React questions)
  ],
  'FIREBASE': [
    {
      id: 1,
      question: "What is Firebase?",
      options: [
        "A database only",
        "A cloud platform with various development tools",
        "A testing framework",
        "A programming language"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is Firestore?",
      options: [
        "A file storage service",
        "A NoSQL document database",
        "A hosting service",
        "An authentication service"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "How do you listen to real-time updates in Firestore?",
      options: [
        "Using setInterval",
        "Using onSnapshot()",
        "Using fetch()",
        "Using async/await"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is Firebase Authentication used for?",
      options: [
        "Database queries",
        "User sign-in and management",
        "File storage",
        "Hosting websites"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is Firebase Cloud Functions?",
      options: [
        "Client-side functions",
        "Serverless functions that run in response to events",
        "Database functions",
        "Authentication functions"
      ],
      correctAnswer: 1
    }
  ],
  'NEXTJS': [
    {
      id: 1,
      question: "What is Next.js?",
      options: [
        "A database",
        "A React framework for production",
        "A testing library",
        "A CSS framework"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is the purpose of getStaticProps?",
      options: [
        "To handle client-side data fetching",
        "To fetch data at build time",
        "To handle routing",
        "To manage state"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is server-side rendering in Next.js?",
      options: [
        "Rendering on the client",
        "Rendering pages on the server for each request",
        "Static rendering",
        "No rendering"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the purpose of the pages directory in Next.js?",
      options: [
        "To store images",
        "To define routes automatically",
        "To store styles",
        "To store components"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of _app.js in Next.js?",
      options: [
        "To store API routes",
        "To initialize pages and maintain state",
        "To define components",
        "To store utilities"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "How do you handle API routes in Next.js?",
      options: [
        "Using external servers",
        "Creating handlers in pages/api directory",
        "Using middleware",
        "Using databases directly"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "What is Next.js Image component used for?",
      options: [
        "Decorative purposes only",
        "Automatic image optimization",
        "Image storage",
        "Image editing"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is the purpose of getServerSideProps?",
      options: [
        "Client-side data fetching",
        "Server-side rendering at request time",
        "Static site generation",
        "API route handling"
      ],
      correctAnswer: 1
    }
  ]
};

export default function QuizSection({ topicId }: QuizSectionProps) {
  // Add these debug logs
  console.log('Current topicId:', topicId);
  console.log('Available topics:', Object.keys(quizzesByTopic));
  console.log('Questions for current topic:', quizzesByTopic[topicId || '']);

  if (!topicId) {
    return <RandomQuiz />;
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

  // Use useEffect to generate random questions on client-side only
  useEffect(() => {
    if (!topicId) {
      const allQuestions = Object.values(quizzesByTopic).flat();
      const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
      setRandomQuestions(shuffled);
    }
  }, [topicId]);

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