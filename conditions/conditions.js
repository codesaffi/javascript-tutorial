// In JavaScript, conditional statements allow your program to make decisions and execute different blocks of code based on specific conditions. The most common conditionals in JavaScript are if, else if, else, and switch. Let’s go through each of them in depth.



// 1. if Statement
// The if statement is the most basic form of conditional. It allows you to execute a block of code only if a specific condition is true.

Syntax:
// if (condition) {
//    code to be executed if the condition is true
// }

Example:

{
let myAge = 20;

if (myAge >= 18) {
  console.log("You are eligible to vote.");
}
}

// Here, if the variable age is greater than or equal to 18, the message "You are eligible to vote" is logged to the console. If the condition is false, this block is skipped.



// 2. else Statement
// The else statement is used to specify a block of code that executes if the condition in the if statement is false.

Syntax:
// if (condition) {
//    code to be executed if the condition is true
// } else {
//    code to be executed if the condition is false
// }

Example:

{
let age2 = 15;

if (age2 >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not old enough to vote.");
}
}

// Here, if age is less than 18, the second message, "You are not old enough to vote," will be printed.



// 3. else if Statement
// When there are multiple conditions to check, you can use else if to handle additional conditions.

Syntax:
// if (condition1) {
//    code to be executed if condition1 is true
// } else if (condition2) {
//    code to be executed if condition2 is true
// } else {
//    code to be executed if neither condition1 nor condition2 is true
// }

Example:

{
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
}

// Here, multiple conditions are checked. The program outputs the grade based on the score value.



// 4. switch Statement
// The switch statement is used when you want to compare a variable or expression to multiple values. It’s an alternative to else if when dealing with many possible conditions.

Syntax:
// switch(expression) {
//   case value1:
//      code to be executed if expression === value1
//     break;
//   case value2:
//      code to be executed if expression === value2
//     break;
//   default:
//      code to be executed if expression does not match any case
// }
Example:

{
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
}

// Here, the switch compares day with different case values. If day is 3, it prints "Wednesday."



// 5. Ternary Operator
// The ternary operator is a shorthand for if-else. It’s particularly useful for concise conditions.

Syntax:

// condition ? expressionIfTrue : expressionIfFalse;

Example:
{
let age3 = 20;
let canVote = (age3 >= 18) ? "Yes" : "No";
console.log(canVote);  // Output: "Yes"
}

// Here, the ternary operator checks if age is 18 or more, and assigns "Yes" or "No" accordingly.



// 6. Truthy and Falsy Values
// In JavaScript, some values are inherently "truthy" or "falsy". This is important because conditionals don’t just work with true or false—they also work with truthy or falsy values.

// Falsy Values:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
// Any value not in this list is considered truthy.

Example:
{
let value = "";

if (value) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");  // Output: "This is falsy"
}
}



// 7. Nested Conditionals
// You can nest conditionals within other conditionals, though it can make the code harder to read if not structured properly.

Example:

{
let age4 = 22;
let hasID = true;

if (age4 >= 18) {
  if (hasID) {
    console.log("You can enter the club.");
  } else {
    console.log("You need an ID to enter.");
  }
} else {
  console.log("You are too young to enter.");
}
}

// Here, the outer if checks if age is 18 or more, and the inner if checks if the person has an ID.



// 8. Logical Operators
// You can combine conditions using logical operators:

// && (AND): All conditions must be true.
// || (OR): At least one condition must be true.
// ! (NOT): Inverts the truthiness of a condition.

Example:

{
let age5 = 25;
let hasTicket = true;

if (age5 >= 18 && hasTicket) {
  console.log("You can attend the concert.");
} else {
  console.log("You cannot attend the concert.");
}
}





// combine  concept

{
let userType = "";
let isLoggedIn = 1;

if (isLoggedIn) {
  if (userType === "admin") {
    console.log("Welcome, Admin.");
  } else if (userType === "editor") {
    console.log("Welcome, Editor.");
  } else {
    console.log("Welcome, Guest.");
  }
} else {
  console.log("Please log in.");
}
}