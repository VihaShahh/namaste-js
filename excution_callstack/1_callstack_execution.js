let n = 2
function square(n){
    return n*n
}
let square2 = square(n)
let square4 = square(4)
console.log(square2, square4)

//step1 - global execution context

//in memory/creation phase
//n = undefined
//square = function ref
//square2 = undefined
//square4 = undefined

//step2 - global execution context

// var n = 2;

// Assigns 2 to n.

// function square(num) { ... }

// Function is already stored, nothing new here.

//  Step 3: var square2 = square(n);

// Expression square(n) is called → so function square is pushed on Call Stack.

//  Call Stack now:

// | square() |
// | Global   |


// Inside square(num):

// num = 2

// ans = 2 * 2 = 4

// return 4

// Function returns 4.

//  Call Stack after return:

// | Global |


// Value 4 is assigned to square2.

//  Step 4: var square4 = square(4);

// Function square(4) is called → function pushed on Call Stack again.

//  Call Stack now:

// | square() |
// | Global   |


// Inside square(num):

// num = 4

// ans = 4 * 4 = 16

// return 16

// Function returns 16.

//  Call Stack after return:

// | Global |


// Value 16 is assigned to square4.

//  Step 5: End of script

// Nothing else to execute.

// Call Stack is empty.

//  Final values in memory:

// n = 2

// square2 = 4

// square4 = 16