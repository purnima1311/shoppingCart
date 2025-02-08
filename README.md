Shopping Cart Assignment
A simple shopping cart system built using JavaScript and Axios to fetch product prices from a mock API. The cart allows adding products, calculating subtotal, tax, and total, and handling scenarios when products are not found.

Table of Contents
Project Overview
Features
Technologies Used
Installation
Usage
Tests
Contributing
License
Project Overview
This project implements a shopping cart system that:

Adds products to the cart.
Calculates the subtotal based on product prices.
Applies a tax calculation (12.5% of the subtotal).
Calculates the total including tax.
Handles errors when products are not found.
Features
Add Product: Users can add products with a specific quantity to the shopping cart.
Calculate Subtotal: The cart automatically calculates the subtotal based on the prices of added products.
Tax Calculation: A tax of 12.5% is applied to the subtotal to compute the total.
Error Handling: If a product is not found in the price API, an error message is displayed.
Unit Tests: The application includes tests using Jest to verify the correct functionality of adding products, calculating totals, and handling errors.
Technologies Used
JavaScript: Core language for building the logic.
Axios: To make API calls and fetch product prices.
Jest: For testing the functionality of the shopping cart.
Node.js: To run the application and tests.
Installation
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/shopping-cart-assignment.git
Navigate to the project directory:
bash
Copy
Edit
cd shopping-cart-assignment
Install dependencies:
bash
Copy
Edit
npm install
Usage
Start by adding products to the cart with the addProduct function:

javascript
Copy
Edit
const cart = new ShoppingCart();
cart.addProduct('productName', quantity);
To view the current cart state, use:

javascript
Copy
Edit
console.log(cart.getCartState());
The cart will return an object with the following details:

items: A list of products added to the cart with quantity and price.
subtotal: The sum of product prices.
tax: The 12.5% tax applied to the subtotal.
total: The total amount after adding the tax.
Tests
To run the tests, use:

bash
Copy
Edit
npm test
This will run the Jest testing framework, which includes tests for adding products, calculating totals, and handling product errors.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit (git commit -am 'Add feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License
This project is open-source and available under the MIT License. See the LICENSE file for more details.