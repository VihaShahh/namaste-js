function a() {
  console.log(b); // 10
}
var b = 10;
a();
//a() doesn’t have b inside, so it looks to its parent (Global).

// Finds b = 10 in Global Execution Context (GEC).
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();

// =====================================

function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
console.log(b) //10 //first executed
a(); //then excecuted

//output: 
// 10
// 100

//c() has a local variable b = 100.

// Local variable takes precedence → Shadowing global b.

//===============================================
function a() {
  var b = 10;    // function scope, not global
  c();
  function c() {
    console.log(b); // accessible inside a()
  }
}
a();
console.log(b); // not accessible outside

var x = 5;

function test() {
  console.log(x); // ✅ 5 (can access global var)
}

test();
console.log(x); //  (global var is accessible everywhere)


//Example 3: let and const are Block Scoped
//==========================================

{
  let a = 20;
  const b = 30;
  console.log(a, b); //  20, 30
}

console.log(a); // ReferenceError
console.log(b); //  ReferenceError
//=================================
var a = 50;

function test() {
  var a = 100; // shadows global a
  console.log(a); //  100
}

test();
console.log(a); //  50

//===========================
if (true) {
  var x = 1;   // function/global scope
  let y = 2;   // block scope
  const z = 3; // block scope
  console.log(x, y, z); //  1 2 3
}

console.log(x); //  1 (var escaped the block)
console.log(y); //  ReferenceError
console.log(z); //  ReferenceError

//=================================
var globalVar = "I am global";

function outer() {
  var outerVar = "I am outer";

  function inner() {
    var innerVar = "I am inner";
    console.log(globalVar); // can access global
    console.log(outerVar);  //  can access outer
    console.log(innerVar);  //  can access own
  }

  inner();
  console.log(innerVar); //  ReferenceError
}

outer();

//Inner functions can always access parent/global variables (scope chain).

//Outer scope cannot access inner scope variables.
