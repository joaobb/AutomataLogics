declare module "union-find" {
  type SetIdentifier = number;

  export default class UnionFind {
    constructor(numVertices: number);

    /*
     * Returns the number of vertices in the forest
     */
    length: number;

    /*
     * Creates a new vertex
     * Returns An integer id for the new vertex
     */
    makeSet(): SetIdentifier;
    /*
     * Returns an identifier representing the connected component of any
     * given vertex
     * Returns An integer id representing the connected component of v
     */
    find(v: SetIdentifier): SetIdentifier;
    /*
     * Links a pair of connected components together
     * s and t are both vertices
     */
    link(s: SetIdentifier, t: SetIdentifier): SetIdentifier;
  }
}
