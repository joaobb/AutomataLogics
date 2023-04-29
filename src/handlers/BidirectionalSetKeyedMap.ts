import { SetKeyedMap } from "./SetKeyedMap";

class BidirectionalSetKeyedMap<K, V> {
  private setKeyedMap = new SetKeyedMap<K, V>();
  private valueMap: any = {};

  set(key: K[], value: V) {
    this.setKeyedMap.set(key, value);
    this.valueMap[value] = key;
  }

  get(key: K[]) {
    return this.setKeyedMap.get(key);
  }

  getByValue(value: V) {
    return this.valueMap[value];
  }

  entries() {
    return this.setKeyedMap.entries();
  }

  has(key: K[]) {
    return this.setKeyedMap.has(key);
  }

  delete(key: K[]) {
    this.setKeyedMap.delete(key);
  }

  toString() {
    return this.setKeyedMap.toString();
  }
}

export { BidirectionalSetKeyedMap };
