// app.js
const cart = new ShoppingCart();

// Adding products to the cart
cart.addProduct("cornflakes", 2);  // Add 2 cornflakes
cart.addProduct("weetabix", 1);    // Add 1 weetabix

// Display the cart state
console.log(cart.getCartState());
