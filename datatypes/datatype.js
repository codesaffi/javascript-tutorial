// 1. Primitive Types
// Primitive types are the most basic data types in JavaScript. They are immutable and represent a single value.


// A. String
// Description: Represents a sequence of characters used to store and manipulate text.
// Declaration: Strings can be declared using single quotes, double quotes, or backticks (for template literals).

let greeting = 'Hello, world!';
let name = "Alice";
let message = `Hello, ${name}`; // Using template literals


// B. Number
// Description: Represents both integer and floating-point numbers. JavaScript does not have distinct types for integers and floats; all numbers are of type Number.

let age = 25;          // Integer
let temperature = 36.6; // Floating-point
let price = 19.99;    // Float


// C. Boolean
// Description: Represents a logical entity and can have two values: true or false. Useful for conditional testing.

let isActive = true;
let isLoggedIn = false;


// D. Undefined
// Description: A variable that has been declared but has not yet been assigned a value is of type undefined.

let result; // result is declared but not initialized
console.log(result); // Output: undefined


// E. Null
// Description: Represents the intentional absence of any object value. It is an assignment value that can be assigned to a variable as a representation of no value.

let data = null; // Explicitly setting a variable to have no value


// F. Symbol
// Description: Introduced in ES6, a Symbol is a unique and immutable data type primarily used as object property keys. Each symbol value is unique, even if they have the same description.

const uniqueId = Symbol('id'); // Create a unique symbol



// 2. Reference Types
// Reference types are objects that can store collections of data and more complex entities. Unlike primitive types, reference types are mutable, meaning their content can be changed without changing their reference.

// A. Object
// Description: A collection of key-value pairs where keys are strings (or Symbols) and values can be of any type (including other objects). Objects can be created using object literals or the new Object() syntax.

let person = {
    name: 'Alice',
    age: 30,
    isActive: true
};


// B. Array
// Description: A special type of object used to store ordered collections. Arrays can hold values of any type and can be created using array literals or the new Array() syntax.

let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];


// C. Function
// Description: Functions in JavaScript are first-class objects and can be assigned to variables, passed as arguments, or returned from other functions. They can also be created using function declarations or function expressions.

function greet() {
    return 'Hello!';
}

const sayHello = function() {
    return 'Hi!';
};


// 3. Type Checking
// You can check the data type of a variable using the typeof operator:


console.log(typeof 'Hello');        // Output: "string"
console.log(typeof 42);             // Output: "number"
console.log(typeof true);           // Output: "boolean"
console.log(typeof null);           // Output: "object" (this is a known quirk)
console.log(typeof undefined);      // Output: "undefined"
console.log(typeof Symbol());       // Output: "symbol"
console.log(typeof {});             // Output: "object"
console.log(typeof []);             // Output: "object" (arrays are objects)
console.log(typeof function(){});   // Output: "function"

// 1. typeof null

console.log(typeof null); // Output: "object"

// Background: In JavaScript, null is a primitive value that represents the intentional absence of any object value. When you assign null to a variable, you are explicitly stating that the variable does not hold a valid object.

// The Quirk: When using the typeof operator on null, it returns "object". This behavior is considered a quirk or bug in JavaScript’s early implementation:

// In JavaScript, values are stored in a format that includes a type tag to identify the value type. The type tag for objects was set to 0, and for null, this tag was mistakenly set to 0 as well. As a result, typeof null returns "object".
// Implications: This behavior can lead to confusion for developers. To check if a value is null, it is best to use strict equality:

let value = null;
console.log(value === null); // true


// 2. typeof []

console.log(typeof []); // Output: "object"

// Background: In JavaScript, arrays are a special kind of object. They are used to store ordered collections of data. When you create an array, it is actually an object with some additional features, like a numeric index and methods for manipulating the array.

// Why "object"?: The typeof operator classifies arrays as objects because they are indeed objects under the hood. Here’s a breakdown of the reasons:

// Underlying Structure: Arrays in JavaScript are implemented as objects with special behavior. When you create an array, such as let arr = [], JavaScript internally treats it as an object where the keys are numeric indices (0, 1, 2, ...) and the values are the elements of the array.
// Inconsistent Type Checking: Because of this behavior, using typeof on an array returns "object" instead of a more specific type like "array".
// Checking for Arrays: To accurately check whether a variable is an array, you should use the Array.isArray() method:


let arr = [];
console.log(Array.isArray(arr)); // true

