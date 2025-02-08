const ShoppingCart = require('./shoppingCart');
const PriceAPI = require('./priceAPI');  // Import PriceAPI for mocking

// Mock the PriceAPI module
jest.mock('./priceAPI', () => ({
  getProductPrice: jest.fn(),
}));

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
    PriceAPI.getProductPrice.mockClear();  // Clear previous mocks before each test
  });

  test('addProduct should add items to the cart and calculate totals', async () => {
    // Mock prices for cornflakes and weetabix
    PriceAPI.getProductPrice.mockImplementation((productName) => {
      if (productName === 'cornflakes') return Promise.resolve(2.52);
      if (productName === 'weetabix') return Promise.resolve(9.98);
      return Promise.resolve(null);
    });

    // Add products to the cart
    await cart.addProduct('cornflakes', 1);
    await cart.addProduct('cornflakes', 1);
    await cart.addProduct('weetabix', 1);

    // Test subtotal calculation
    expect(cart.calculateSubtotal()).toBe(15.02);  // Expected: 2.52 * 2 + 9.98

    // Test tax calculation (12.5% of subtotal)
    expect(cart.calculateTax()).toBe(1.88);  // Expected: 12.5% of 15.02

    // Test total calculation
    expect(cart.calculateTotal()).toBe(16.90);  // Expected: 15.02 + 1.88
  });

  test('getCartState should calculate totals correctly', async () => {
    // Mock price for weetabix
    PriceAPI.getProductPrice.mockResolvedValue(9.98);

    // Add products to the cart
    await cart.addProduct('weetabix', 2);

    // Retrieve and validate the cart state
    const state = cart.getCartState();
    expect(state.subtotal).toBe(19.96);  // 9.98 * 2 = 19.96
    expect(state.tax).toBe(2.50);        // 12.5% of 19.96 = 2.495 (rounded to 2.50)
    expect(state.total).toBe(22.46);     // 19.96 + 2.50 = 22.46
  });
});
