export default class Building {
  constructor(sqft) {
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find(name => typeof superProto[name] === 'function' && !proto.hasOwnProperty(name));
    if (missing) throw new TypeError(`${this.constructor.name} needs to implement ${missing}`);

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
