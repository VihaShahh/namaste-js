
// //Shadowing = when a variable inside a block has the same name as a variable outside.
// The inner one overrides the outer one in that scope.
var a = 100;

{
  var a = 10;   // same 'a' as outside
  console.log(a); // 10
}

console.log(a);   // 10


// var is NOT block-scoped, only function-scoped.

// {} alone does not create a new scope for var.

// So var a = 10; is treated as if you wrote a = 10; in the global scope.

// That’s why it overwrites the outer a.
//==============================
var a = 50;

function test() {
  var a = 100;  // new variable, function-scoped
  console.log(a); // 100
}

test();
console.log(a); // 50
//=============================================

let b = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b); // 20 (inner b)
}

console.log(b); // 100 (outer b)
//============================================
const c = 100;
function x() {
  const c = 10;
  console.log(c); // 10 (inner)
}
x();
console.log(c); // 100 (outer)
//============================================================
let a = 20;
{
  var a = 30; // SyntaxError: Identifier 'a' has already been declared
}

//vs
var a = 20;
{
  let a = 30; //  valid, separate block scope
}
