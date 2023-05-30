"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGraphToAutomata = void 0;
function parseGraphToAutomata(graph, stateIdPrefix) {
    var states = [];
    var initialState = "";
    var acceptanceStates = [];
    var alphabet = [];
    var transitions = {};
    var stateIdMapping = {};
    graph.nodes.forEach(function (node) {
        var parsedStateId = stateIdPrefix ? stateIdPrefix + node.id : node.id;
        stateIdMapping[node.id] = parsedStateId;
        if (node.isInitial)
            initialState = parsedStateId;
        if (node.isAcceptance)
            acceptanceStates.push(parsedStateId);
        states.push({ id: parsedStateId, label: node.label });
    });
    graph.edges.forEach(function (edge) {
        if (!alphabet.includes(edge.label))
            alphabet.push(edge.label);
        var sourceStateId = stateIdMapping[edge.source];
        var targetStateId = stateIdMapping[edge.target];
        if (!transitions[sourceStateId])
            transitions[sourceStateId] = {};
        if (!transitions[sourceStateId][edge.label])
            transitions[sourceStateId][edge.label] = [];
        transitions[sourceStateId][edge.label].push({
            id: edge.id,
            target: targetStateId,
        });
    });
    return {
        states: states,
        alphabet: alphabet,
        transitions: transitions,
        initialState: initialState,
        acceptanceStates: acceptanceStates,
    };
}
exports.parseGraphToAutomata = parseGraphToAutomata;
