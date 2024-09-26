// In JavaScript, loops are used to execute a block of code repeatedly until a certain condition is met. There are several types of loops in JavaScript, from traditional loops to modern iterations introduced in ES6. Let’s dive deep into each loop, covering both old and modern approaches.

// 1. for Loop (Traditional)
// The for loop is one of the most commonly used loops and is typically used when you know the number of iterations in advance.

// Syntax:

// for (initialization; condition; increment/decrement) {
//  code to be executed
// }

// Example:

for (let i = 0; i < 5; i++) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
}

// Initialization: This is executed once before the loop starts (e.g., let i = 0).
// Condition: The loop runs as long as the condition is true (e.g., i < 5).
// Increment/Decrement: This is executed after each iteration (e.g., i++).



// 2. while Loop
// The while loop is used when you don’t know how many times a loop should run and the condition is evaluated before entering the loop.

// Syntax:

// while (condition) {
//  code to be executed
// }

// Example:

let i = 0;

while (i < 5) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
  i++;
}

// In this example, the loop will run as long as i is less than 5.



// 3. do...while Loop
// The do...while loop is similar to the while loop, but it guarantees that the code inside the loop will execute at least once, even if the condition is false initially.

// Syntax:

// do {
//    code to be executed
// } while (condition);

// Example:

let x = 0;

do {
  console.log(x);  // Output: 0, 1, 2, 3, 4
  x++;
} while (x < 5);



// 4. for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object (or the indices of an array). This is mainly used for objects but can be used with arrays as well (though it's not recommended for arrays in modern JavaScript).

// Syntax:

// for (let property in object) {
//   code to be executed
// }

// Example (with objects):

const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);  
  // Output: 
  // name: John
  // age: 30
  // city: New York
}

// Example (with arrays, not recommended for arrays):

let arr = [1, 2, 3, 4];

for (let index in arr) {
  console.log(index);   // Output: 0, 1, 2, 3 (array indices)
}

// Though possible, using for...in for arrays is discouraged because it iterates over indices and not values.




// 5. for...of Loop (Modern)
// Introduced in ES6, the for...of loop is designed for iterating over iterable objects like arrays, strings, maps, sets, and more. This is the preferred modern way to iterate over arrays.

// Syntax:

// for (let variable of iterable) {
//   code to be executed
// }

// Example (with arrays):

let arr2 = [1, 2, 3, 4];

for (let value of arr2) {
  console.log(value);  // Output: 1, 2, 3, 4
}

// Example (with strings):

let str = "Hello";

for (let char of str) {
  console.log(char);  // Output: H, e, l, l, o
}

// The for...of loop is a powerful and clean way to iterate over iterable objects. It directly gives you the value of each element, unlike for...in, which gives you the index (or property).




// 6. break and continue
// break: Exits the loop entirely.
// continue: Skips the current iteration and moves to the next.


// Example with break:

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;  // Exits the loop when i is 3
  }
  console.log(i);  // Output: 0, 1, 2
}


// Example with continue:

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;  // Skips the iteration when i is 3
  }
  console.log(i);  // Output: 0, 1, 2, 4
}



// 7. Iterating Over Objects
// Objects are not directly iterable, so you cannot use for...of to loop over them. However, you can use Object.keys(), Object.values(), and Object.entries() to iterate over objects.

// Object.keys(): Returns an array of the object’s keys.
// Object.values(): Returns an array of the object’s values.
// Object.entries(): Returns an array of key-value pairs.


Example:

{
const person2 = { name: "Alice", age: 25, city: "Paris" };

// Using Object.keys()
for (let key of Object.keys(person2)) {
  console.log(key);  // Output: name, age, city
}

// Using Object.values()
for (let value of Object.values(person2)) {
  console.log(value);  // Output: Alice, 25, Paris
}

// Using Object.entries()
for (let [key, value] of Object.entries(person2)) {
  console.log(`${key}: ${value}`);
  // Output: 
  // name: Alice
  // age: 25
  // city: Paris
}
}


// 8. Looping Through Maps and Sets (Modern Iterables)
// Map and Set are modern JavaScript collections that are iterable by default.


// Example (with Map):

let map = new Map();
map.set("name", "John");
map.set("age", 30);

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
  // Output: 
  // name: John
  // age: 30
}


// Example (with Set):

let set = new Set([1, 2, 3, 4, 5]);

for (let value of set) {
  console.log(value);  // Output: 1, 2, 3, 4, 5
}
