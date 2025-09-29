let nums = [3,5,6,2]
console.log(nums.find(n =>n > 4)) //5
//find method returns the first element that satisfies the condition.

console.log(nums.findIndex(n => n >4)) //1
//findIndex returns the first element that satisfies the condition.

//====================================
//some and every
console.log(nums.some(n => n >5)) //// true (at least one)

console.log(nums.every(n => n % 2 ==0)) //false(all even?)

let fruits = ["apple", "banana"]
console.log(fruits.includes("banana")) //true

//==========================================
//sort and reverse
let nums1 = [1,2,3,4]
nums1.sort((a,b) => b - a) // descending order
console.log(nums1) //[4,3,2,1]

//here sort() converts to string by default → use comparator:
//ascending order do (a,b) => a-b

nums1.reverse() 
console.log(nums1)//[1,2,3,4]
//=================================

//push(), pop(), shift(), unshift()
let arr = [1,2,3]
arr.push(4) // add at the end [1,2,3,4]
arr.pop() // remove from the end[1,2,3]
arr.shift() //remove from the start [2,3]
arr.unshift(0) //add at start [0,2,3]
arr.unshift(-1) //[-1,0,2,3]
//====================================== 

//slice()

//  Think: "copy / extract part of the array (without changing original)"

let arr7 = [10, 20, 30, 40, 50];

// slice(start, end) → copies elements from start index to end-1
console.log(arr7.slice(1, 3)); // [20, 30] (takes index 1 and 2, stops before 3)

// if end is not given, goes till last
console.log(arr7.slice(2)); // [30, 40, 50]

// original array NOT changed
console.log(arr7); // [10, 20, 30, 40, 50]

//============================================

//splice()
// It is used to remove, insert, or replace elements in an array.

// It changes (mutates) the original array.

// arr.splice(start, deleteCount, item1, item2, ...)

// start → index where you begin.

// deleteCount → how many elements to remove.

// item1, item2, ... (optional) → what to insert at that place.

// ### Example 1: **Remove**

```js
let arr = [10, 20, 30, 40, 50];

// remove 2 elements starting at index 1
arr.splice(1, 2);

console.log(arr); // [10, 40, 50]
```

//  Step by step:

// * Start at index `1` → that’s `20`.
// * Delete `2` elements → `20` and `30` are removed.
// * No new items inserted.

// Result → `[10, 40, 50]`

// ---

// ### Example 2: **Insert**

```js
let arr = [10, 40, 50];

// at index 1, remove 0 items, insert 99 and 88
arr.splice(1, 0, 99, 88);

console.log(arr); // [10, 99, 88, 40, 50]
```

//  Step by step:

// * Start at index `1`.
// * Delete `0` items.
// * Insert `99` and `88`.

// Result → `[10, 99, 88, 40, 50]`

// ---

// ### Example 3: **Replace**

```js
let arr = [10, 99, 88, 40, 50];

// at index 2, remove 1 element, insert 777
arr.splice(2, 1, 777);

console.log(arr); // [10, 99, 777, 40, 50]
```

// Step by step:

// * Start at index `2` → element is `88`.
// * Delete `1` item → removes `88`.
// * Insert `777` at that spot.

// Result → `[10, 99, 777, 40, 50]`

// ---

// ###  Summary (easy to remember)

// * `splice( start, deleteCount )` → just removes.
// * `splice( start, 0, newItems )` → just inserts.
// * `splice( start, deleteCount, newItems )` → removes and replaces.

//==========================================

//concat()
let a = [1,2], b= [3,4]
console.log(a.concat(b)) //[1,2,3,4]
//original arrays not changed
console.log(a) //[1,2]
console.log(b) //[3,4]

//====================================

//join()

let arr2 = [1,2,3]
console.log(arr2.join("-")) //1-2-3
//original array not changed
console.log(arr2) //[1,2,3]

//===========================================
//flat()
//  Think: "flatten nested arrays into one array"
// (It removes inner arrays and brings elements up)
let arr4 = [1, [2, 3], [4, [5, 6]]];

// flat(1) → flatten 1 level
console.log(arr4.flat(1)); 
// [1, 2, 3, 4, [5, 6]]

// flat(2) → flatten 2 levels
console.log(arr4.flat(2)); 
// [1, 2, 3, 4, 5, 6]

// By default flat() flattens 1 level deep.
// If you want all levels, use:

arr.flat(Infinity);

//===========================================================
// 2️ flatMap()

//  Think: "map first, then flatten 1 level"
// It’s like map() + flat(1) in one step.

let words = ["hello", "world"];

let mapped = words.map(word => word.split(""));
// [ ["h","e","l","l","o"], ["w","o","r","l","d"] ]

let flatMapped = words.flatMap(word => word.split(""));
// [ "h","e","l","l","o","w","o","r","l","d" ]


let numsa = [1, 2, 3];

let result = numsa.flatMap(n => [n, n * 2]);
console.log(result); 
// [1, 2, 2, 4, 3, 6]
