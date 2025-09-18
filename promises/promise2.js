const cart = ["shoes", "pants", "smitu"]

//old callback way
createOrder(cart, function(orderId){
    proceedToPayment(orderId)
});
//here youre passing callback function to another function
//promise way

//createOrder takes two arguments:

// cart
// a callback function (function(orderId){...}).

// Once the order is created, createOrder calls your callback and gives it the orderId.

// That callback then calls proceedToPayment(orderId).

// Drawback: If you had many steps (create order → payment → summary → update DB), callbacks get nested deeply = callback hell.

const promise = createOrder(cart);
promise.then(function (orderId){
    proceedToPayment(orderId)
})
//here youre attaching callback function to another function
//promise way
//  const promise = createOrder(cart);

// Here you call createOrder(cart).

// Unlike the callback version, this function does not expect a callback.

// Instead, createOrder returns a Promise object.

// That promise represents a “future value” → in this case, the orderId once the order is successfully created.

// promise.then(function(orderId) {...})

// .then() is how you say:
// “When this promise gets resolved, run this function with the result.”

// The function you pass inside .then(...) is called the callback/handler.

// Whatever value the promise resolves with (orderId), gets passed into that function.
//
// promise = placeholder for the future result (the orderId).

// .then(callback) = “when the result is ready, call this callback with the result”.
//=================================
//in actual:

function createOrder(cart) {
  return new Promise(function(resolve, reject) {
    console.log("Creating order for:", cart);

    // simulate async operation (like contacting server)
    setTimeout(function() {
      // Let's say server generates an orderId
      const orderId = "ORD12345";
      resolve(orderId);   // this is the result
    }, 1000);
  });
}

const promise3 = createOrder(["shoes", "pants", "smitu"]);

promise3.then(function(orderId) {
  console.log("Order created with ID:", orderId);
  proceedToPayment(orderId);
});
// At the start, that promise is in the pending state because the async work (setTimeout) hasn’t finished yet.
//Yes these **two pieces are directly linked**. Let me show you how.

// ---

// ### Part 1 → Creating the promise

// ```js
// const promise = createOrder(["shoes", "pants", "smitu"]);
// ```

// * When you call `createOrder`, it **returns a Promise object**.
// * At the start, that promise is in the **pending** state because the async work (`setTimeout`) hasn’t finished yet.
// * After 1 second, inside the promise:

// ```js
// resolve(orderId);
// ```

// is called.
// That changes the promise’s state to **fulfilled** and attaches the value `"ORD12345"`.

// So now the promise becomes:

// ```
// Promise { 'ORD12345' }
// ```

// ---

// ### Part 2 → Consuming the promise

// ```js
// promise.then(function(orderId) {
//   console.log("Order created with ID:", orderId);
//   proceedToPayment(orderId);
// });
// ```

// * `.then()` **listens to the promise** created above.
// * When the promise resolves, it *automatically runs* the function you gave it.
// * The `orderId` you see in the function parameter comes from the `resolve(orderId)` in Part 1.

// ---

// ### How they are linked:

// 1. `createOrder` → returns a promise.
// 2. `resolve(orderId)` → passes the result into the promise.
// 3. `.then(function(orderId){...})` → receives that same result (`orderId`) and runs your code.

// ---

// ### Execution flow (step by step):

// 1. Call `createOrder(cart)` → returns a promise (pending).
// 2. 1 second later → `resolve("ORD12345")` is called.
// 3. Promise becomes fulfilled with value `"ORD12345"`.
// 4. `.then()` callback is triggered, with `orderId = "ORD12345"`.
// 5. Inside the callback →

//    ```js
//    console.log("Order created with ID:", orderId);
//    proceedToPayment(orderId);
//    ```

// ---

// So yes they are **chained together**:

// * **`resolve(orderId)`** → supplies the value
// * **`.then(function(orderId){...})`** → consumes the value

// ======================================

// callback style
doTask1(data, function(result1) {
  doTask2(result1, function(result2) {
    doTask3(result2, function(result3) {
      console.log("Done:", result3);
    });
  });
});

// promise style
doTask1(data)
  .then(result1 => doTask2(result1))
  .then(result2 => doTask3(result2))
  .then(result3 => console.log("Done:", result3))
  .catch(err => console.error(err));
