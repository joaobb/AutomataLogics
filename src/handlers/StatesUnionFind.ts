import { ExtendedUnionFind, SetIdentifier } from "./ExtendedUnionFind";
import { BidirectionalSetKeyedMap } from "./BidirectionalSetKeyedMap";
import { StateId } from "../definitions/Automata";

class StatesUnionFind {
  private unionFind: ExtendedUnionFind;
  private readonly stateIdMapping: BidirectionalSetKeyedMap<StateId, number>;

  constructor(count: number) {
    this.unionFind = new ExtendedUnionFind(count);
    this.stateIdMapping = new BidirectionalSetKeyedMap<StateId, number>();
  }

  make(stateGroup: StateId[]): SetIdentifier {
    const setIdentifier = this.unionFind.make();
    this.stateIdMapping.set(stateGroup, setIdentifier);

    return setIdentifier;
  }

  union(stateGroup1: StateId[], stateGroup2: StateId[]): void {
    const stateGroup1Id = this.stateIdMapping.get(stateGroup1);
    const stateGroup2Id = this.stateIdMapping.get(stateGroup2);

    if (!(stateGroup1Id && stateGroup2Id))
      throw new Error("States not found on union find");

    this.unionFind.union(stateGroup1Id, stateGroup2Id);
  }

  find(stateGroup: StateId[]): StateId[] {
    let stateGroupId = this.stateIdMapping.get(stateGroup);

    if (!stateGroupId) {
      stateGroupId = this.unionFind.make();
      this.stateIdMapping.set(stateGroup, stateGroupId);
    }

    const a = this.unionFind.find(stateGroupId);

    return this.getStateBySetId(a);
  }

  getStateBySetId(setId: SetIdentifier): StateId[] {
    return this.stateIdMapping.getByValue(setId);
  }
}

export { StatesUnionFind };
