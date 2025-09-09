//1. Object Destructuring
const { Children } = require("react");

const person = { name1: "viha" , age: 22}
const {name1, age} = person;
console.log(name1) //viha
console.log(age) //22

//1. Rename variables
const { name2: fullName, age: years} = person;
console.log(fullName) //viha
console.log(years) //22
//You can change variable names while destructuring.

//2. default values
const { name3, gender = "female"} = person;
console.log(name3) 
console.log(years)

//nested object destructuring
const student = {
    name: "meera",
    marks: {
        math : 90, science: 98
    }
}
const { name, marks : {math, science}} = student;
console.log(name) // meera
console.log(math) //90
console.log(science) //98

//=========================================================
// 4. Partial destructuring

// You don’t need to take all keys:

// const { age} = person;
// console.log(age) //22

//=============================================================
//2. Array Destructuring

const nos = [1,2,3]
const [a,b,c] = nos;
console.log(a) //1
console.log(b) //2
console.log(c) //3

//skip elements
const [x, ,y] = nos;
console.log(x) //1
console.log(y) //

//defalt value
const [p,q, r =4] = [7,8];
console.log(p) //7
console.log(q) //8
console.log(r) //4

// Swapping variables (super useful )
let s= 6, t= 1
[s,t] = [t,s]
console.log(s) //1
console.log(t) //6

//nested array
const arr = [1, [2,3], 4]
const [i, [j,k], l] = arr;
console.log(i) //1
console.log(j) //2
console.log(k) //3

//Rest operator with arrays

const [first, ...rest] = [10,20,30,40]
console.log(first)//10
console.log(rest) //[20,30,40]

// const personn = { name: "Viha", age: 21 };
// const { genderr } = personn;
// console.log(genderr); // undefined

// //but
// const { genderr = "Female" } = personn;
// console.log(genderr); // "Female"
//======================================================

const nums = [1, 2, 3];
const [xm, ym, z, w] = nums;
console.log(xm, ym, z, w); 
//1 2 3 undefined

//mixing objects + arrays

const data = [
   { id: 1, name: "Viha" },
  { id: 2, name: "Pari" }
]
const [, {nameq}] = data;
console.log(nameq) //pari
// here data is an array:

// [
//   { id: 1, name: "Viha" },   // index 0
//   { id: 2, name: "Pari" }    // index 1
// ]


// Destructuring pattern:

// [ , { name } ]


// First position , → skip index 0 ({ id:1, name:"Viha" })

// Second position { name } → look at index 1 ({ id:2, name:"Pari" })

// From that object, extract the property name

// So:

// name = "Pari";
//==================================

const users = [
  { id: 1, name: "Viha" },
  { id: 2, name: "Pari" }
];
const [ { name: firstUser}, {name: secondUser}] = users;
console.log(firstUser)//viha
console.log(secondUser)//pari

// const [, { id, name }] = data;
// console.log(id, name); // 2 "Pari"

//====================

const [a1, b1, c1] = [1];
console.log(a1, b1, c1);
//1 undefined undefined


//Destructuring in function parameters

function display ({name, age}){
    console.log(name, age)
}
display({ name: "viha", age: 22}) //viha 22

// display({ name: "viha"}) //viha undefined

// Without destructuring, you’d write:

function display1(person){
    console.log(person.name, person.age)
}

//====================================

const company = { name: "TechCo", location: { city: "Delhi", country: "India" } };
const { location: { city, country } } = company;

console.log(city);    // "Delhi"
console.log(country); // "India"

//===================
// const users = [
//   { id: 1, name: "Viha" },
//   { id: 2, name: "Pari" }
// ];
// const [ { id: firstId, name: firstName }, { id: secondId, name: secondName } ] = users;

// console.log(firstId, firstName);   // 1 "Viha"
// console.log(secondId, secondName); // 2 "Pari"

// //or shorter way
// const [ { id, name }, { id: id2, name: name2 } ] = users;

// console.log(id, name);   // 1 "Viha"
// console.log(id2, name2); // 2 "Pari"

//Tip: For arrays with many objects, instead of destructuring manually, it’s often better to map over the array:

users.forEach(
    ({id, name}) =>{
console.log(name, age)    }
)