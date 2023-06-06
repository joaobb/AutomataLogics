"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var hopcroft_figs_4_8_1 = __importDefault(require("./tests/graphs/hopcroft_figs_4_8"));
// import { lawrance2Epsilon } from "./tests/graphs/lawrance";
// import nesoAcademy from "./tests/graphs/nesoAcademy";
// import sundeep from "./tests/graphs/sundeep";
// import ufmgExample25 from "./tests/graphs/ufmg-example-25";
var parsedAutomataA1Graph = (0, index_1.parseGraphToAutomata)(hopcroft_figs_4_8_1.default.a1, "a1-");
var parsedAutomataA2Graph = (0, index_1.parseGraphToAutomata)(hopcroft_figs_4_8_1.default.a2, "a2-");
var automata1 = new index_1.Automata(parsedAutomataA1Graph.states, parsedAutomataA1Graph.alphabet, parsedAutomataA1Graph.transitions, parsedAutomataA1Graph.initialState, parsedAutomataA1Graph.acceptanceStates);
var automata2 = new index_1.Automata(parsedAutomataA2Graph.states, parsedAutomataA2Graph.alphabet, parsedAutomataA2Graph.transitions, parsedAutomataA2Graph.initialState, parsedAutomataA2Graph.acceptanceStates);
console.log((0, index_1.testEquivalenceHCK)(automata1, automata2));
