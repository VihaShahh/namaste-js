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


