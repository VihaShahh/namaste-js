function createOrder(cart) {
  return new Promise(function(resolve, reject) {
    if (!validateCart(cart)) {
      return reject("Cart is not valid");
    }
    const orderId = "123445";
    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });
}

function proceedToPayment(orderId) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({ status: "success", orderId: orderId });
    }, 2000);
  });
}

function validateCart(cart) {
  return cart && cart.length > 0;
}

// Mock consumer functions
function showOrderSummary(paymentInfo) {
  console.log("Showing order summary:", paymentInfo);
  return "Order Summary Done";
}

function updateWalletBalance(balance) {
  console.log("Updating wallet balance:", balance);
  return "Wallet Balance Updated";
}

function handleError(error) {
  console.error("Error occurred:", error);
}

// Consumer
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(balance => updateWalletBalance(balance))
  .catch(error => handleError(error));


// //Inside proceedToPayment you wrote:

// resolve("payment for orderId", orderId)


// In JavaScript, a function only takes one value when resolving/rejecting a promise.
// So here, only "payment for orderId" will be passed, and orderId will be ignored.

// but When we call

// resolve({ status: "success", orderId: orderId });


//This is not passing two values into resolve.
// It’s passing one single value: an object.
// This is one object with two properties:

// status: "success"

// orderId: orderId

// When the promise resolves, the consumer (.then) will receive this entire object as a single value.

// Why use an object?

// If you want to send multiple pieces of data, wrap them in an object (or array).

// Promises can only resolve with one value, but that value can be a container holding multiple values.

// resolve(x, y) →  wrong, only x is kept

// resolve({a: x, b: y}) → correct, one object passed with two fields