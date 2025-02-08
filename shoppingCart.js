// shoppingCart.js
const PriceAPI = require('./priceAPI');  // Assuming priceAPI is in the same directory

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add product to the cart
  async addProduct(productName, quantity) {
    const price = await PriceAPI.getProductPrice(productName);
    if (price !== null) {
      this.items.push({ productName, quantity, price });
    }
  }

  // Calculate the subtotal of all items in the cart
  calculateSubtotal() {
    const subtotal = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return parseFloat(subtotal.toFixed(2));  // Return as number with 2 decimal places
  }

  // Calculate tax (12.5% of subtotal)
  calculateTax() {
    const tax = this.calculateSubtotal() * 0.125;
    return parseFloat(tax.toFixed(2));  // Return as number with 2 decimal places
  }

  // Calculate the total (subtotal + tax)
  calculateTotal() {
    const total = this.calculateSubtotal() + this.calculateTax();
    return parseFloat(total.toFixed(2));  // Return as number with 2 decimal places
  }

  // Optional: Get cart state (for debugging or further testing)
  getCartState() {
    return {
      items: this.items,
      subtotal: this.calculateSubtotal(),
      tax: this.calculateTax(),
      total: this.calculateTotal(),
    };
  }
}

module.exports = ShoppingCart;  // Ensure this line is included to export the class
