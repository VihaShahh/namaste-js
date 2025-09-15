let name = "viha"
name = "viha2"

let age = 20
if(true){
    age = 22
    console.log("inside if block", age) //22
}
console.log("outside if block", age) //20

console.log(a)// ReferenceError: Cannot access 'a' before initialization
let a = 10

//=======================================================

const pi = 3.14;
pi = 3;// error

const person = { name: "Viha" };
person.name = "Shah";  // Allowed
person = { name: "ChatGPT" }; // error

//============================================================

var city = "Anand";
city = "Vadodara"; 
var city = "Ahmedabad"; 

console.log(name); // its give undefined, not ReferenceError! like let, const
var name3 = "Viha";
//==================================
function test() {
  var x = 1;
  let y = 2;
  const z = 3;

  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("Inner block:", x, y, z);//100 200 300
  }

  console.log("Outside block:", x, y, z);//100 2 3
}
test();
