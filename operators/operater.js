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