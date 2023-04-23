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

function parseGraphToAutomata(graph: Graph) {
  let states: State[] = [];
  let initialState: StateId = "";
  let acceptanceStates: StateId[] = [];
  let alphabet: InputSymbol[] = [];
  const transitions: Transitions = {};

  graph.nodes.forEach((node) => {
    if (node.isInitial) initialState = node.id;
    if (node.isAcceptance) acceptanceStates.push(node.id);

    states.push({ id: node.id, label: node.label });
  });

  graph.edges.forEach((edge) => {
    if (!alphabet.includes(edge.label)) alphabet.push(edge.label);

    if (!transitions[edge.source]) transitions[edge.source] = {};
    if (!transitions[edge.source][edge.label])
      transitions[edge.source][edge.label] = [];

    transitions[edge.source][edge.label].push({
      id: edge.id,
      target: edge.target,
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
