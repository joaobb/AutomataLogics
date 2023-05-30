declare class BidirectionalSetKeyedMap<K, V> {
    private setKeyedMap;
    private valueMap;
    set(key: K[], value: V): void;
    get(key: K[]): V | undefined;
    getByValue(value: V): K[];
    entries(): IterableIterator<[K[], V]>;
    has(key: K[]): boolean;
    delete(key: K[]): void;
    toString(): Map<K[], V>;
}
export { BidirectionalSetKeyedMap };
