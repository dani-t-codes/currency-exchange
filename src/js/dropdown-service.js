export default class DropdownExchange {
  static async getDropdown() {
    try {
      const call = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!call.ok) {
        throw Error(call.statusText);
      }
      return call.json();
    } catch(error) {
      return error.error_type;
    }
  }
}