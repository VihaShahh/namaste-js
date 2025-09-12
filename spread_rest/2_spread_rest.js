function sum(...numbers){
    console.log(numbers)
}
sum(1,2,4,5)
//// numbers = [1, 2, 3, 4]  (packed) rest

//spread

const  letters = ["viha"]
letters.push("rajan")
const all = [...letters]
console.log(letters, all)
//[ 'viha', 'rajan' ] [ 'viha', 'rajan' ]


// letter = ["viha"]
// After letter.push("rajan") → ["viha", "rajan"]

// split = [...letter] spreads the array into a new array copy:
// → split = ["viha", "rajan"]

// In the string case, "Viha" got split into characters because strings are iterables of characters.

// "Viha" → 'V', 'i', 'h', 'a'

// In the array case, ["viha", "rajan"] is already an array of strings.

// Spreading an array just copies elements, it doesn’t break strings inside.

// So ...["viha", "rajan"] → "viha", "rajan"

// ...string → splits into characters (because string is iterable character by character).

// ...array → spreads only array elements, not what’s inside the elements.

//rest
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

//spread
const arr1 = [1, 2];
const arr2 = [...arr1]; // copy
console.log(arr2); // [1, 2]

const a = [1, 2], b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]


//rest
const user = { name: "Viha", age: 21, city: "Anand" };

const { name, ...others } = user;
console.log(name);   // "Viha"
console.log(others); // { age: 21, city: "Anand" }
