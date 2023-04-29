class SetKeyedMap<K, V> {
  private _keysCache: { [key: string]: K[] } = {};
  private readonly mapInstance: Map<K[], V> = new Map();

  constructor() {
    this.mapInstance = new Map();
  }

  set(key: K[], value: V) {
    let mapKey = this._getCachedKey(key);

    if (!mapKey) {
      this._keysCache[this._parseKey(key)] = key;
      mapKey = key;
    }

    this.mapInstance.set(mapKey, value);
  }

  get(key: K[]) {
    const mapKey = this._getCachedKey(key);
    return this.mapInstance.get(mapKey);
  }

  entries() {
    return this.mapInstance.entries();
  }

  has(key: K[]) {
    return Boolean(this._getCachedKey(key));
  }

  delete(key: K[]) {
    this.mapInstance.delete(key);
  }

  private _parseKey(key: K[]) {
    return JSON.stringify(key.sort());
  }

  private _getCachedKey(key: K[]) {
    return this._keysCache[this._parseKey(key)];
  }

  toString() {
    return this.mapInstance;
  }
}

export { SetKeyedMap };
