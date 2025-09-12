//rest - array
function addMumber(a,b,c,...other){
    console.log(other)
    return a+b+c
}
const result = addMumber(2,2,4,6,5,24,4)
console.log(result)

//spread - array

let names = ["viha", "smitu"]
function getNames(name1, name2, names3)
{
 console.log(name1,name2,names3)
}
getNames(...all)

//=========================================

//object - rest

let allStudents ={
    name: "viha",
    age: 21,
    hobbies: ["singing", "music"]
}

// const {age, name} = allStudents
// console.log(name) //destructuring concept

const {age, ...rest} = allStudents
console.log(rest)


//spraed object
var newStudent ={
    ...allStudents, // upar vadu j lidhu
    age:"29" //overwrite the value
}

console.log(newStudent)

//========================================

const arr1 = [1,2,3]
const arr2 = [4,5]
const combined = [...arr1, ...arr2]
console.log(combined)

//Copying Arrays
const original = [10,20,30]
const copy = [...original]
copy.push(40)
console.log(original)// [10, 20, 30]
console.log(copy)// [10, 20, 30, 40]

//With Strings-Spreads each character.
const word = "viha"
const letter = [...word]
console.log(letter)// ['V', 'i', 'h', 'a']

//With Objects
const obj1 = { name: "Viha", age: 21 };
const obj2 = { city: "Anand", age: 22 };

const merged = { ...obj1, ...obj2 };
console.log(merged);
// { name: "Viha", age: 22, city: "Anand" }

//In Function Calls
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // 6


//rest

//In Functions (Rest Parameters)
function rest(...numbers){
    return numbers.reduce((acc,n) => acc+n, 0)
}
console.log(sum(1,2,34,5))

//array destructuring

const [first, second, ...restt] = [10,20,30,40,69]
console.log(first)
console.log(second)
console.log(restt)

//object(destructuring)

const person = {name: "viha", age:21, city: "anand"}
console.log(names, ...other) = person
console.log(name) //// "Viha"
console.log(other)//// { age: 21, city: "Anand"}

//both

function multiply(multiplyer, ...no){
    return no.map(n = n * multiplyer)
}

const values = [1,2,3]
console.log(multiply(2, ...values))

//..values → spread array into function arguments.
// ...nums → rest parameter collects arguments into array.
//==============================================

```js
function multiply(multiplier, ...nums) { ... }
```

// * The parameter `...nums` is a **rest parameter**.
// * Meaning: “collect all arguments after the first one into an array called `nums`.”

// So if you called it like:

// ```js
// multiply(2, 1, 2, 3);
// ```

// Inside function →

// * `multiplier = 2`
// * `nums = [1, 2, 3]`

// ---

// ## Step 2: Function call

// ```js
// multiply(2, ...values)
// ```

// Here:

// * `values = [1, 2, 3]`
// * `...values` is **spread** → it takes `[1,2,3]` and expands it into separate arguments:

//   ```
//   multiply(2, 1, 2, 3)
//   ```

// ---

// ## Step 3: Matching

// Now combine both rules:

// * `2` → goes into `multiplier`
// * `1, 2, 3` → are collected by `...nums` into `[1, 2, 3]`

// So inside the function:

// ```js
// multiplier = 2
// nums = [1, 2, 3]
// ```

// ---

// ## Step 4: Execution

// ```js
// nums.map(n => n * multiplier);
// // [1*2, 2*2, 3*2] = [2, 4, 6]
// ```

// ---

// ##  Why one is spread and the other is rest?

// * `...values` → **spread**, because it’s on the **call side (RHS)**. It unpacks an array into arguments.
// * `...nums` → **rest**, because it’s in the **parameter list (LHS)**. It collects arguments into an array.


// * **Spread** is used when calling a function, making an array, or object → it **unpacks**.
// * **Rest** is used when defining a function or destructuring → it **packs leftovers**.



