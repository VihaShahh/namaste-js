// A Promise is like a placeholder object for a future value that will be available later.

// Think of a promise as:

// “I promise to give you a value later — either success (fulfilled) or failure (rejected).”
const promiseRef = createOrder(cart)
.then(function(orderId){
    proceedToPayment(orderId)
    .then(function(paymentInfo){
        showOrderSummary(paymentInfo)
        .then(function(balance){
            updateWalletBalance(balance);
        })
    })
})

// Example of a Promise
// const promiseRef = createOrder(cart);


// Here:

// createOrder now returns a Promise object immediately.

// At first, the promise is in a Pending state (undefined result).

// When order creation finishes, the promise changes state to Fulfilled and gets the orderId.

// We can attach callbacks using .then():

// promiseRef.then(function (orderId) {
//   proceedToPayment(orderId);
// });


// This avoids inversion of control — you attach your callback to the promise instead of handing your function to another function.

// Promise:

// You attach callbacks to the promise object.

// Guarantees the callback runs exactly once when data is ready.

// Handles asynchronous operations cleanly.

// Allows chaining → avoids pyramid of doom.

//====================================================================================
//Using arrow functions:


createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(balance => updateWalletBalance(balance))
  .catch(error => handleError(error));
  
// 1. Step by Step Execution
// Step 1: createOrder(cart)

// This function starts executing (asynchronously).

// It immediately returns a Promise object (in pending state).

// After some time:

// If order creation succeeds → Promise resolves with orderId.

// If it fails → Promise rejects with an error → jumps to .catch().

// Step 2: First .then(orderId => proceedToPayment(orderId))

// If createOrder was fulfilled:

// The value (orderId) is passed into this .then() function.

// That function calls proceedToPayment(orderId) and returns another Promise.

// If createOrder was rejected:

// This .then() is skipped, and control jumps to .catch().

// Step 3: Second .then(paymentInfo => showOrderSummary(paymentInfo))

// Waits for proceedToPayment’s Promise to resolve.

// When payment succeeds:

// The resolved value (paymentInfo) is passed in.

// showOrderSummary(paymentInfo) is executed.

// Returns another Promise.

// If payment fails (rejected):

// Skips this .then() and jumps to .catch().

// Step 4: Third .then(balance => updateWalletBalance(balance))

// Waits for showOrderSummary’s Promise to resolve.

// Takes the resolved value (balance).

// Runs updateWalletBalance(balance).

// Step 5: .catch(error => handleError(error))

// If any of the Promises in the chain (createOrder, proceedToPayment, showOrderSummary, updateWalletBalance) gets rejected:

// Control jumps directly here.

// handleError(error) executes once.

// After .catch(), the chain ends unless another .then() is attached.

// 2. Visual Flow

//  Success Path:

// createOrder(cart) → (orderId)
//         ↓
// proceedToPayment(orderId) → (paymentInfo)
//         ↓
// showOrderSummary(paymentInfo) → (balance)
//         ↓
// updateWalletBalance(balance)


//  Failure Path:

// If ANY step fails →
//         ↓
// .catch(error => handleError(error))

// 3. Important Notes

// Each .then() returns a new promise, which is why chaining works.

// If you don’t return inside .then(), the next .then() will get undefined.

// .catch() at the end makes it easier → one place to handle all errors.