export default class CurrencyExchange {
  // eslint-disable-next-line no-unused-vars
  static async getExchange(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.name);
      }
      return response.json();
    } catch(error) {
      return error;
    }
  }
}