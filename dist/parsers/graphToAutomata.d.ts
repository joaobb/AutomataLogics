import { State, Transitions } from "../definitions/Automata";
type Graph = {
    nodes: {
        id: string;
        label: string;
        isInitial?: boolean;
        isAcceptance?: boolean;
    }[];
    edges: {
        id: string;
        source: string;
        target: string;
        label: string;
    }[];
};
declare function parseGraphToAutomata(graph: Graph, stateIdPrefix?: string): {
    states: State[];
    alphabet: string[];
    transitions: Transitions;
    initialState: string;
    acceptanceStates: string[];
};
export { parseGraphToAutomata };
