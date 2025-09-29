// 1. .map() — Transform each element
// What it does:

// Takes an array → returns a new array with the results of applying a function to each element.

const nos = [1,2,3,4,5]
const square = nos.map( n => n*2)
console.log(square) //[2,4,6,8,10]

const labeled = arr.map((x) => `Number: ${x}`);
console.log(labeled);
// ["Number: 5", "Number: 1", "Number: 3", "Number: 2", "Number: 6"]

const users = [
  { name: "Viha", age: 22 },
  { name: "Chinmay", age: 23 },
  { name: "Siddh", age: 40 }
];

const names = users.map((user) => user.name);
console.log(names); // ["Viha", "Chinmay", "Siddh"]

//==========================================
//  .filter() — Select elements that meet a condition
// What it does:

// Takes an array → returns a new array with only the elements that pass a test.

const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter( n => n % 2 == 0)
console.log(even) //[2,4,6]

const users2 = [
  { name: "Viha", age: 22 },
  { name: "Chinmay", age: 23 },
  { name: "Siddh", age: 40 }
];
const adults = users2.filters((u) => u.age >=18);
console.log(adults)

// [
//   { name: "Viha", age: 22 },
//   { name: "Chinmay", age: 23 },
//   { name: "Siddh", age: 40 }
// ]

// Note: If you want to check if users are adults (age >= 18) and get a boolean array, use .map() instead:
// const adults = users2.map((u) => u.age >=18);
// console.log(adults)

//Because your callback doesn’t return the user object, it returns a boolean (true or false).

// .map() is for transforming elements, not for filtering.

// So it transformed each user object → into true

//=====================================================
// .reduce()kes all elements of an array and reduces them into a single value (number, object, string, array… anything).

const arr = [5, 1, 3, 2, 6];
const sum = arr.reduce((acc, val) => acc + val, 0)
console.log(sum) //17

const product = arr.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 180

//Find max
const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
console.log(max); // 6

const users26 = [
  { name: "Viha", age: 22 },
  { name: "Chinmay", age: 23 },
  { name: "Ankit", age: 23 },
  { name: "Siddh", age: 40 }
];

const report = users26.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(report); // {22: 1, 23: 2, 40: 1}

// We call reduce with {}, so accumulator acc starts as an empty object:

// acc = {}

// Step 2: First user { name: "Viha", age: 22 }

// Look at curr.age = 22

// Check: does acc[22] exist? →  No

// So we set acc[22] = 1

// Now:

// acc = {22: 1}

// Step 3: Second user { name: "Chinmay", age: 23 }

// Look at curr.age = 23

// Check: does acc[23] exist? →  No

// So we set acc[23] = 1

// Now:

// acc = {22: 1, 23: 1}

// Step 4: Third user { name: "Ankit", age: 23 }

// Look at curr.age = 23

// Check: does acc[23] exist? → Yes, it’s 1

// So we do acc[23]++ → acc[23] = 2

// Now:

// acc = {22: 1, 23: 2}

// Step 5: Fourth user { name: "Siddh", age: 40 }

// Look at curr.age = 40

// Check: does acc[40] exist? →  No

// So we set acc[40] = 1

// Now:

// acc = {22: 1, 23: 2, 40: 1}


// Final Output:

// {22: 1, 23: 2, 40: 1}

// Why does it look like this?

// The object keys (22, 23, 40) are the unique ages.

// The object values (1, 2, 1) are the counts of how many times each age appeared.

//What does acc[22] = 1 actually do?

// Objects in JavaScript are key-value stores.

// acc[22] = 1 means: "Add a property to object acc with key "22" and value 1."

// That’s exactly like:

// acc = { "22": 1 }


// In JavaScript object keys are always strings, so 22 becomes "22" internally.=========================================================
const users5 = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const output = users5
  .filter((user) => user.age < 30)   // step 1: filter
  .map((user) => user.firstName);    // step 2: transform

console.log(output); // ["Alok", "Ashish", "Ankit"]


// Step 1 — .filter()
// users.filter((user) => user.age < 30)


// This goes through users one by one and keeps only those that satisfy user.age < 30.

// Iteration:

// { firstName: "Alok", age: 23 } → 23 < 30 →  keep

// { firstName: "Ashish", age: 29 } → 29 < 30 →  keep

// { firstName: "Ankit", age: 29 } → 29 < 30 →  keep

// { firstName: "Pranav", age: 50 } → 50 < 30 →  discard

// Result of .filter():

// [
//   { firstName: "Alok", lastName: "Raj", age: 23 },
//   { firstName: "Ashish", lastName: "Kumar", age: 29 },
//   { firstName: "Ankit", lastName: "Roy", age: 29 }
// ]

// Step 2 — .map()

// Now .map() runs on the filtered array.

// .map((user) => user.firstName)


// It takes each element of the filtered array and transforms it to user.firstName.

// Iteration:

// { firstName: "Alok", ... } → "Alok"

// { firstName: "Ashish", ... } → "Ashish"

// { firstName: "Ankit", ... } → "Ankit"

// Result of .map():

// ["Alok", "Ashish", "Ankit"]

// Execution Flow Visualization
// users → .filter() → filtered array → .map() → mapped array


// Chaining happens naturally because .filter() returns an array, and .map() works on arrays.

// Quick Analogy

// Think of it as a factory pipeline:

// Filter step: removes items that don’t meet a condition.

// Map step: changes each remaining item.

// No “AND” or “OR” needed — each step simply works on the output of the previous step