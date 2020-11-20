export default class CurrencyExchange {
  static async getExchange(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText TODO);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}