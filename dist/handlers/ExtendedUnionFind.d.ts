import UnionFind from "union-find";
export type SetIdentifier = number;
declare class ExtendedUnionFind {
    unionFind: UnionFind;
    constructor(count: number);
    make(): SetIdentifier;
    find(v: SetIdentifier): SetIdentifier;
    union(s: SetIdentifier, t: SetIdentifier): number;
}
export { ExtendedUnionFind };
