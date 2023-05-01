import {
  InputSymbol,
  State,
  StateId,
  Transitions,
} from "../definitions/Automata";

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

function parseGraphToAutomata(graph: Graph, stateIdPrefix?: string) {
  let states: State[] = [];
  let initialState: StateId = "";
  let acceptanceStates: StateId[] = [];
  let alphabet: InputSymbol[] = [];
  const transitions: Transitions = {};

  const stateIdMapping: { [stateId: StateId]: StateId } = {};

  graph.nodes.forEach((node) => {
    const parsedStateId = stateIdPrefix ? stateIdPrefix + node.id : node.id;
    stateIdMapping[node.id] = parsedStateId;

    if (node.isInitial) initialState = parsedStateId;
    if (node.isAcceptance) acceptanceStates.push(parsedStateId);

    states.push({ id: parsedStateId, label: node.label });
  });

  graph.edges.forEach((edge) => {
    if (!alphabet.includes(edge.label)) alphabet.push(edge.label);

    const sourceStateId = stateIdMapping[edge.source];
    const targetStateId = stateIdMapping[edge.target];

    if (!transitions[sourceStateId]) transitions[sourceStateId] = {};
    if (!transitions[sourceStateId][edge.label])
      transitions[sourceStateId][edge.label] = [];

    transitions[sourceStateId][edge.label].push({
      id: edge.id,
      target: targetStateId,
    });
  });

  return {
    states,
    alphabet,
    transitions,
    initialState,
    acceptanceStates,
  };
}

export { parseGraphToAutomata };
