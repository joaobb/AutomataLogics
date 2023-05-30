declare class SetKeyedMap<K, V> {
    private _keysCache;
    private readonly mapInstance;
    constructor();
    set(key: K[], value: V): void;
    get(key: K[]): V | undefined;
    entries(): IterableIterator<[K[], V]>;
    has(key: K[]): boolean;
    delete(key: K[]): void;
    private _parseKey;
    private _getCachedKey;
    toString(): Map<K[], V>;
}
export { SetKeyedMap };
