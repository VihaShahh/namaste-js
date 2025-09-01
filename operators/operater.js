//Arithmetic Operators
let a = 10, b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1 (Remainder)
console.log(a ** b); // 10 ni 3 ghat //1000 (Exponentiation - ES6)

//here / gives the quotient, % gives the remainder.

//================================
//Assignment Operators
let x = 5;
x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 2; // 12 // atyre x = 6 hase 
x /= 3; // 4 //atyare x = 12
x %= 2; // 0 // x = 4 

//===================================

//Comparison Operators
console.log(5 == "5");  // true (checks value only)
console.log(5 === "5"); // false (strict: checks type + value)
console.log(5 != "5");  // false
console.log(5 !== "5"); // true
console.log(5 > 3);     // true
console.log(5 <= 5);    // true

//=====================================
//Logical Operators

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

console.log(0 || "Hello"); // "Hello" (0 is falsy, "Hello" is truthy)
console.log(0 && "Hello"); // 0 (stops at first falsy value)

//===============================
//ternary operator

// let result = condition ? valueIfTrue:  valueIffalse;

function checkno(num){
    return  num % 2 == 0?"even" :  "odd";
}
console.log(checkno(5))//odd

//======================================================

//for loop
for(let i =0; i<5; i++){
    console.log(i)// 0,1,2,3,4
}

//while loop
let i =0
while(i<3){
    console.log(i)
    i++
}

//do while loop
let j =0;
do{
    console.log(j)
    j++
}
while(j<3)
//diff is while checks condition first then runs the loop and do while runs the loop first then check the condition.


//============================================================================
//for... in loop

let student = {
    name: "smitu",
    age: 21,
}

for(let key in student){
    console.log(key, student[key])
}
// name smitu
// age 21
//for...in = for objects → iterates keys.

// To get the value, you must use bracket notation student[key] (not student.key, because that would only look for a property literally named "key").\
let arr1 = ["Apple", "Banana", "Cherry"];
arr1.extra = "Mango";

for (let index in arr1) {
  console.log(index, ":", arr1[index]);
}
// //0 : Apple
// 1 : Banana
// 2 : Cherry
// extra : Mango   (unexpected!)
//That’s why for...in is not safe for arrays.

//=============================================

let arr = [10,20,30]
for( let index in arr)
{
    console.log(index, arr[index])
}
//0 10
//1 20
//2 30
//Issue Even though the syntax works, for...in is not recommended for arrays and Order is not guaranteed & It’s meant for objects.

//for...of loop
for(let val of arr){
    console.log(val)
}
//10
//20
//30

//with strings
let str = "kuku"
for(let i of str){
    console.log(i) // k u k u
}

let map = new Map([
    ["name", "smitu"],
    ["age", 21]
])

for(let [key, val] of map){
    console.log(key, val)
}
// name smitu
// age 21
