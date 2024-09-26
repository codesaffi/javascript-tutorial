// 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical calculations. Let’s look at each operator with examples.

// Addition (+)

let a = 10;
let b = 5;
let sum = a + b; // 15
console.log(sum); // Output: 15


// Subtraction (-)

let difference = a - b; // 5
console.log(difference); // Output: 5


// Multiplication (*)

let product = a * b; // 50
console.log(product); // Output: 50


// Division (/)

let quotient = a / b; // 2
console.log(quotient); // Output: 2


// Modulus (%)

let remainder = a % b; // 0 (10 divided by 5 has no remainder)
console.log(remainder); // Output: 0

// Exponentiation (**) (ES6)

let power = 2 ** 3; // 8 (2 raised to the power of 3)
console.log(power); // Output: 8



// 2. Assignment Operators
// These operators assign values to variables, often combining operations.


// Basic Assignment (=)

let score = 100; // Assigns 100 to score
console.log(score); // Output: 100


// Add and Assign (+=)

score += 50; // Equivalent to score = score + 50
console.log(score); // Output: 150


// Subtract and Assign (-=)

score -= 20; // Equivalent to score = score - 20
console.log(score); // Output: 130


// Multiply and Assign (*=)

score *= 2; // Equivalent to score = score * 2
console.log(score); // Output: 260


// Divide and Assign (/=)

score /= 10; // Equivalent to score = score / 10
console.log(score); // Output: 26


// 3. Comparison Operators
// These operators compare two values and return a Boolean value (true or false).

// Equal (==)

console.log(5 == '5'); // true (loose equality, type conversion occurs)


// Strict Equal (===)

console.log(5 === '5'); // false (strict equality, no type conversion)


// Not Equal (!=)

console.log(5 != '5'); // false (loose inequality)


// Strict Not Equal (!==)

console.log(5 !== '5'); // true (strict inequality)


// Greater Than (>)

console.log(10 > 5); // true


// Less Than (<)

console.log(10 < 5); // false


// Greater Than or Equal (>=)

console.log(5 >= 5); // true


// Less Than or Equal (<=)

console.log(5 <= 10); // true



// 4. Logical Operators
// Logical operators combine or negate Boolean values.


// Logical AND (&&)

let isAdult = true;
let hasTicket = false;
console.log(isAdult && hasTicket); // false (both must be true)


// Logical OR (||)

console.log(isAdult || hasTicket); // true (one must be true)


// Logical NOT (!)

console.log(!isAdult); // false (negates the value)



// 5. Unary Operators
// Unary operators operate on a single operand.


// Increment (++)

let count = 1;
count++; // Post-increment
console.log(count); // Output: 2


// Decrement (--)

count--; // Post-decrement
console.log(count); // Output: 1


// Unary Plus (+)

console.log(+ '5'); // Output: 5 (converts string to number)


// Unary Negation (-)

console.log(-5); // Output: -5




// 6. Ternary Operator
// A shorthand way of writing if...else statements.


let score2 = 75;
let result = (score >= 50) ? 'Pass' : 'Fail';
console.log(result); // Output: 'Pass'