export default class Currency {
  constructor(code, name) {
  // if (typeof code !== 'string') throw typeError('Code must be a string');
  // if (typeof name !== 'name') throw TypeError('Name must be a string');

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
