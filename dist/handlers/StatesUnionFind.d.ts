import { SetIdentifier } from "./ExtendedUnionFind";
import { StateId } from "../definitions/Automata";
declare class StatesUnionFind {
    private unionFind;
    private readonly stateIdMapping;
    constructor(count: number);
    make(stateGroup: StateId[]): SetIdentifier;
    union(stateGroup1: StateId[], stateGroup2: StateId[]): void;
    find(stateGroup: StateId[]): StateId[];
    getStateBySetId(setId: SetIdentifier): StateId[];
}
export { StatesUnionFind };
