// @ts-ignore
import UnionFind from "union-find";

type SetIdentifier = number;

class ExtendedUnionFind {
  unionFind: UnionFind;

  constructor(count: number) {
    this.unionFind = new UnionFind(count);
  }

  make(): SetIdentifier {
    return this.unionFind.makeSet();
  }

  find(v: SetIdentifier): SetIdentifier {
    let setIdentifier = this.unionFind.find(v);

    if (!setIdentifier) {
      setIdentifier = this.make();
    }

    return setIdentifier;
  }

  union(s: SetIdentifier, t: SetIdentifier) {
    return this.unionFind.link(s, t);
  }
}

export { ExtendedUnionFind };
