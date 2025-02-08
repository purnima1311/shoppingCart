const axios = require('axios');

const BASE_URL = 'http://localhost:3001/products';

class PriceAPI {
  static async getProductPrice(productName) {
    try {
      const response = await axios.get(`${BASE_URL}/${productName}`);
      return response.data.price;
    } catch (error) {
      console.error(`Error fetching price for ${productName}:`, error.message);
      return null;
    }
  }
}

module.exports = PriceAPI;