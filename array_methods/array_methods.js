// 🔹 Core Array Methods in JavaScript

// Arrays in JS come with built-in methods that make it easier to manipulate and process data.

// We’ll cover:

// 👉 Transformation: map(), flatMap()
// 👉 Filtering: filter()
// 👉 Reduction: reduce(), reduceRight()
// 👉 Iteration: forEach()
// 👉 Searching: find(), findIndex(), indexOf(), lastIndexOf(), includes()
// 👉 Sorting & Reordering: sort(), reverse()
// 👉 Adding/Removing: push(), pop(), shift(), unshift(), splice(), slice()
// 👉 Combining: concat(), join(), flat()
// 👉 Utilities: every(), some(), from(), isArray(), fill(), copyWithin(), keys(), values(),

//map

let num = [1,3,4,6]
let square = num.map((n) => n*n)
console.log(square)

//==============================

//filter- 
let nos = [1,2,3,4]
let even = nos.filter((n) => n%2 == 0)
console.log(even)

let users = [
    {name: "smitu" , active: true},
    {name: "kuku", active: false},
]
let activeUSers = users.filter((u) =>u.active)
//================================

//reduce

let nums = [1,2,3,4]
let sum = nums.reduce((acc, val) => acc + val, 0)
console.log(sum) //10

const cart = [
    { item: "apple", price: 200},
    { item: "banana", price: 100}
]

const total = cart.reduce((acc, p) => acc +p.price, 0)

console.log(total) //300
//==============================

const numss = [5, 9, 2, 15, 3];
const max = numss.reduce((acc, val) => acc> val ? acc : val)

// Initial state: acc = 5

// Step	Current n	acc BEFORE	Compare	Return	acc AFTER
// 1	9	5	5 > 9 ? no	9	9
// 2	2	9	9 > 2 ? yes	9	9
// 3	15	9	9 > 15 ? no	15	15
// 4	3	15	15 > 3 ? yes	15	15

// Result: max = 15


// 👉 If the first element is `5`, why doesn’t `reduce()` compare `5 > 5` at the beginning?

// ---

// ### Here’s why 👇

// When you **don’t give an `initialValue`** to `reduce()`:

// * JavaScript takes the **first element** of the array as the initial `acc` (accumulator).
// * Iteration starts from the **second element** (`index 1`).

// So in your case:

// ```js
// const nums = [5, 9, 2, 15, 3];
// const max = nums.reduce((acc, n) => acc > n ? acc : n);
// ```

// 1. `acc = 5` (first element, index 0)
// 2. Iteration starts at index `1` (`n = 9`).
//    That’s why the first comparison is `5 > 9`.

// ---

// ### If you DO give an initialValue

// Example:

// ```js
// const nums = [5, 9, 2, 15, 3];
// const max = nums.reduce((acc, n) => acc > n ? acc : n, 0);
// ```

// * Now `acc = 0` initially.
// * Iteration starts from index `0` (`n = 5`).
// * First comparison will be `0 > 5`.

// ---

// ✅ **Rule of Thumb**:

// * No initial value → `acc = arr[0]`, loop starts at index 1.
// * With initial value → `acc = initialValue`, loop starts at index 0.

//==============================
//que: how many times each fruits appears

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count  = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {})


// ```js
// acc[fruit] = (acc[fruit] || 0) + 1;
// ```

// is the **heart** of the frequency counter. Let’s break it down slowly.

// ---

// ### 🧩 What’s happening?

// 1. `acc` is an **object** that starts as `{}` (empty).
// 2. Each fruit string (like `"apple"`) becomes a **key** in that object.
// 3. We want to count how many times each fruit appears → so we keep increasing the number stored at that key.

// ---

// ### ⚡ Break it down:

// Take `"apple"` as an example:

// * First time we see `"apple"`:

//   ```js
//   acc["apple"] = (acc["apple"] || 0) + 1;
//   ```

//   👉 `acc["apple"]` doesn’t exist yet → `undefined`
//   👉 `(undefined || 0)` = `0` (because `||` picks the first truthy value, and `undefined` is falsy).
//   👉 So: `acc["apple"] = 0 + 1 = 1`

// ---

// * Second time we see `"apple"`:
//   👉 Now `acc["apple"]` is `1`.
//   👉 `(1 || 0) = 1`
//   👉 `acc["apple"] = 1 + 1 = 2`

// ---

// * Third time we see `"apple"`:
//   👉 Now `acc["apple"]` is `2`.
//   👉 `(2 || 0) = 2`
//   👉 `acc["apple"] = 2 + 1 = 3`

// ---

// ### 🔄 Step-by-step for the whole array

// ```js
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// ```

// \| Step | fruit   | acc BEFORE               | Expression `(acc[fruit] || 0) + 1` | acc AFTER                         |
// \|------|---------|--------------------------|------------------------------------|-----------------------------------|
// \| 1    | apple   | {}                       | (undefined || 0) + 1 = 1          | { apple: 1 }                      |
// \| 2    | banana  | { apple: 1 }             | (undefined || 0) + 1 = 1          | { apple: 1, banana: 1 }           |
// \| 3    | apple   | { apple: 1, banana: 1 }  | (1 || 0) + 1 = 2                   | { apple: 2, banana: 1 }           |
// \| 4    | orange  | { apple: 2, banana: 1 }  | (undefined || 0) + 1 = 1          | { apple: 2, banana: 1, orange: 1 }|
// \| 5    | banana  | { … }                    | (1 || 0) + 1 = 2                   | { apple: 2, banana: 2, orange: 1 }|
// \| 6    | apple   | { … }                    | (2 || 0) + 1 = 3                   | { apple: 3, banana: 2, orange: 1 }|

// 👉 Final Result:

// ```js
// { apple: 3, banana: 2, orange: 1 }
// ```

// ---

// ### 🔑 The trick:

// * `(acc[fruit] || 0)` means →
//   *if the fruit count exists, use it; otherwise, start with 0*
// * `+ 1` means → increment the count.


// Step 2: The role of ||

// The || operator means "OR, take the first truthy value".
// So:

// (acc[fruit] || 0)


// If acc[fruit] already has a value (like 2), it will use that.

// If acc[fruit] is undefined (fruit not counted yet), it will use 0.

// This avoids errors when the fruit appears for the first time.

// Step 3: Add + 1

// After we get the existing count (or 0 if not present), we add 1.

// First time seeing "apple" → (undefined || 0) + 1 = 0 + 1 = 1

// Next time "apple" → (1 || 0) + 1 = 1 + 1 = 2

// Again "apple" → (2 || 0) + 1 = 2 + 1 = 3

// ✅ So the || 0 ensures we start from 0 when the fruit is new.

// Without || 0, the first time it sees "apple", it would try undefined + 1 → NaN ❌.
//=======================================
//Average score (one pass) bdha no 
const students = [
    { name: "viha" , age: 22},
    { name: "Meera", score: 90 }
]
let totall = students.reduce((acc, val) =>  acc + val.score,0)

let avg = totall / students.length;
console.log(avg) //85













