// Array inside object
const data = { scores: [90,10,30]}
const {scores : [first, second]} = data;
console.log(first, second) // 90,19

//------------------------------
// Object inside array
const arr = [{city: "pune",  country: "india"}, {city: "paris", country: "france"}]
const [{city, country}] = arr;
console.log(city, country)//pune India

// ###  Step by Step:

// 1. `arr` is an **array of objects**:

// ```js
// [
//   { city: "pune",  country: "india" },   // index 0
//   { city: "paris", country: "france" }   // index 1
// ]
// ```

// 2. Destructuring pattern:

// ```js
// [{ city, country }]
// ```

// * The outer `[ ... ]` means: **look at the array**.
// * Inside the first slot `{ city, country }` means: **take the object at index 0 and extract its properties `city` and `country`.**

// 3. Index mapping:

// * `arr[0] = { city: "pune", country: "india" }`
// * So:

//   * `city = "pune"`
//   * `country = "india"`

// ---

// ### Output:
// pune india


// ### Why not "paris france" too?

// Because you only told JS:
// *"Give me the first object’s properties (`arr[0]`)."*


// ###If you want both objects:

// Option 1 – Destructure both:

// ```js
// const [ { city: city1, country: country1 }, { city: city2, country: country2 } ] = arr;

// console.log(city1, country1); // pune india
// console.log(city2, country2); // paris france
// ```

// Option 2 – Use a loop:

// ```js
// arr.forEach(({ city, country }) => {
//   console.log(city, country);
// });
// ```

// * Your code only destructures the **first object** in the array.
// * To get the others, either add more slots in destructuring OR loop through the array.

const data1 = [{ id: 1, scores: [10, 20] }, { id: 2, scores: [30, 40] }];
const [{ id: id1, scores: [s1, s2] }, { id: id2, scores: [s3, s4] }] = data1;
console.log(id1, s1, s2, id2, s3, s4);


//Function parameter destructuring (object)
function printUser({name,age}){
    console.log(name,age)
}
printUser({name: "viha", age: 22})

//Function parameter destructuring (array)

function sum([a,b]){
    return a+b;
}
console.log(sum[5,10])

const arr9 = [1, [2, 3], 4];
const [firstt, [, third], fourth] = arr9;
console.log(firstt, third, fourth);
//===========================
const viha = [{ id:1 }, { id:2 }, { id:3 }];
const [smitu, ...rest] = viha;
console.log(smitu, rest);

//=====================================================

const response ={
    data: {
        user: {name: "viha", age: 21},
        posts: [{id:1}, {id:2}]
    }
}
const {data : { user: {name4, age3}, posts: [firstid]}} = response;

console.log(name4, age3, firstid.id)



// 1. `response.data.user` → `{ name: "Viha", age: 21 }`

//    * Destructured into variables: `name = "Viha"`, `age = 21`

// 2. `response.data.posts` → `[ { id:1 }, { id:2 } ]`

//    * Array of objects, `[firstPost]` → takes **first element** → `{ id: 1 }`
//    * So `firstPost = { id: 1 }` (it’s an **object**)

// ---

// ### Why `.id` is needed

// * `firstPost` **itself is an object**:

// ```js
// firstPost = { id: 1 }
// ```

// * If you do:

// ```js
// console.log(firstPost);
// ```

//  Output:

// ```
// { id: 1 }
// ```

// * But we usually want the **value inside the object** (here `id = 1`), so we do:

// ```js
// console.log(firstPost.id);

// ### Alternative: Destructure `id` directly from the array element

// You can also write:

// ```js
// const { data: { user: { name, age }, posts: [ { id: firstPostId } ] } } = response;
// console.log(name, age, firstPostId);
// ```

// * Now you **don’t need `.id`** because `firstPostId = 1` directly
//    Output:

// ```
// Viha 21 1
// ```

// ---

//  **Summary:**

// * `firstPost` = **object** → need `.id` to access the value
// * Or destructure it directly during assignment → cleaner


