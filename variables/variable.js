// variable

// Imagine variables as boxes. You can store things in them (numbers, text, etc.), and later, you can open the box  and see what’s inside. Variables give a name to this "box" so you can use it when you need it.

// To make a box in JavaScript, you use special words like var, let, and const.

// A. var
// var was used in the old days of JavaScript to make a box (variable). Let’s look at an example:


var favoriteToy = "Lego";
console.log(favoriteToy); // Output: Lego

// We created a variable called favoriteToy and put "Lego" inside it.
// You can change what’s inside the box later.

favoriteToy = "Car";
console.log(favoriteToy); // Output: Car





// B. let
// let is like var, but it’s a newer and better way to make a box. Let’s see an example:

let favoriteFruit = "Apple";
console.log(favoriteFruit); // Output: Apple

// We made a box called favoriteFruit and put "Apple" inside it.
// Just like var, you can change what's inside.

favoriteFruit = "Banana";
console.log(favoriteFruit); // Output: Banana





// C. const
// const is a special kind of box. Once you put something in this box, you can’t change it! Think of it like a box with a lock.


const birthYear = 2010;
console.log(birthYear); // Output: 2010

// We made a box called birthYear and put 2010 inside it.
// If you try to change it, JavaScript won’t let you:


 // birthYear = 2011;  This will give an error: "Assignment to constant variable"




// Understanding Scope
// Scope refers to the visibility or accessibility of variables within different parts of your code. In JavaScript, we have two main types of scope:

// Global Scope: A variable declared outside any function or block. It can be accessed from anywhere in the code.
// Local Scope: A variable declared inside a function or block (like inside an if statement or a loop). It can only be accessed within that function or block.



let globalVariable = "I'm global!";

function checkScope() {
    let localVariable = "I'm local!";
    console.log(globalVariable); // Accessible
    console.log(localVariable);   // Accessible
}

checkScope();
console.log(globalVariable); // Accessible
// console.log(localVariable);   Error: localVariable is not defined




// The Problem with var
// The var keyword has function scope, which means that if you declare a variable with var inside a function, it cannot be accessed outside that function. However, if you declare it outside of a function, it becomes globally scoped.


function example() {
    var x = 10; // Function-scoped
}

// example();
// console.log(x); // Error: x is not defined




// In addition, if var is used inside a block (like in an if statement), it still exists outside that block. This can lead to unintended behavior:

if (true) {
    var y = "I exist outside this block!";
}
console.log(y); // Output: "I exist outside this block!"






// The Advantages of let and const
// Both let and const were introduced in ES6 (ECMAScript 2015) to address the shortcomings of var.

// let
// Block Scoped: A variable declared with let is only accessible within the nearest enclosing block (denoted by {}), whether it's a function, an if statement, or a loop.

if (true) {
    let z = "I exist only in this block!";
    console.log(z); // Output: "I exist only in this block!"
}
// console.log(z); // Error: z is not defined




// Use Case: Use let when you expect the value of the variable to change over time. For example, in loops or situations where the variable's value may be reassigned.

let score = 0;
for (let i = 0; i < 5; i++) {
    score += i; // Changing the score in each iteration
}
console.log(score); // Output: 10




// const
// Block Scoped: Just like let, const is also block-scoped.
// Constant Reference: When you declare a variable with const, it must be initialized at the time of declaration and cannot be reassigned. However, if the variable is an object or array, you can still modify its properties or elements.

const maxAttempts = 5;
// maxAttempts = 6; // Error: Assignment to constant variable

const user = { name: "Alice" };
user.name = "Bob"; // This is allowed because we're modifying the object, not the reference
console.log(user.name); // Output: "Bob"