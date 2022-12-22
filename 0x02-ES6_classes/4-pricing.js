import Currency from './3-currency';

export default class Pricing {
  constructors(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    this._currency = `${this.name} (${this.code})`;
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    this._currency = `${this.name} (${this.code})`;
    return `${this._amount} ${this._currency}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
