let no = 3.14 // int but data type Number
let n1 = 4  // float but data type Number

console.log(typeof  no );
console.log(typeof NaN);// number
//===============================================

let str = "Hello Viha!";
var name = 'ChatGPT';
let greet = `hi ${name}`
console.log(greet); // hi ChatGPT
//===================================================

let isValid = true
let isLoggedIn = false;

console.log(typeof isValid); // "boolean"

// Boolean(0) → false
// Boolean("0") → true (non-empty string is true)

//===================================================

let x
console.log(x); // undefine

//=========================================================

let n = null
console.log(typeof n);// "object" (a known JS bug)

//=========================================================

let ar = [1,3,"viha", true, [1,3,7]]
console.log(ar[1]); //3
console.log(ar[4][2]); // 7

ar.push(100) // end ma add thay
console.log(ar.length); //6

// to check if a variable is array or not:
Array.isArray(ar)
ar instanceof Array

//iteration
for( let i=0; i< ar.length; i++){
    console.log(ar[i]);
}

for(let i of ar){
    console.log(i);
}

//foreach pan pan details aa bdhu array vada module ma

//=========================================================

let obj = {
  name : "viha",
  age : 21,
  isStudent : true
};

console.log(obj.name); //"viha"

//add property
obj.city = "anand";

console.log(obj.city);// "anand"
//=========================================================

let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"

let sym = Symbol("id");
console.log(typeof sym); // "symbol"

//=========================================================


let students = [
    {
        name: "viha",
        age: 70,
    },
    {
        name: "smitu",
        age: 70,
    }
]
console.log(students[1].name);

//iteration

students.forEach((i)=>{
    console.log(`${i.name} is ${i.age}`);
})

for( let i of students){
    console.log(i.age);
}

//map returns new array

let names = students.map(i=> i.name)
    console.log(names);

let adult = students.filter(s => s.age > 20)
console.log(adult);

let adultt = students.find(s => s.name == "viha")
console.log(adultt);

students.sort((a,b) => a.age - b.age) // sort by the age ascending

// destructure

let { name , age} = students[0];
console.log(name, age);

// in details questions and all in that detailed module