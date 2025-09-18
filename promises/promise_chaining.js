const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // STEP 1
console.log(promise);

promise
  .then(function(orderId) {
      console.log("Order ID:", orderId);
      return orderId;
  })
  .then(function(orderId) {
      return proceedToPayment(orderId);
  })
  .then(function(paymentInfo) {
      console.log(paymentInfo);
  })
  .catch(function(err) {
      console.log(err.message);
  });

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if (!validCart(cart)) {
            const err = new Error("Cart not valid");
            reject(err);
            return; // stop execution
        }

        const orderId = "123";
        if (orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 2000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment successful for order " + orderId);
    });
}

function validCart(cart) {
    return true; //  now the cart is valid
}
