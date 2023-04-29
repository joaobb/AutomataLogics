import Automata from "./models/Automata";
import { parseGraphToAutomata } from "./parsers/graphToAutomata";

import { lawrance2Epslon } from "./tests/graphs/lawrance";

import { tutorialsPoint } from "./tests/graphs/tutorialsPoint";
import { tutorialsPoint_EQ } from "./tests/graphs/tutorialsPoint_EQ";

import { hopcraft_figs_4_12 } from "./tests/graphs/hopcraft_figs_4_12";
import { hopcraft_figs_4_12_EQ } from "./tests/graphs/hopcraft_figs_4_12_EQ";

import { nesoAcademy1 } from "./tests/graphs/nesoAcademy1";
import { nesoAcademy1_EQ } from "./tests/graphs/nesoAcademy1_EQ";

import { testEquivalenceHCK } from "./handlers/CheckEquivalenceHCK";

const parsedAutomataA1Graph = parseGraphToAutomata(hopcraft_figs_4_12);
const parsedAutomataA2Graph = parseGraphToAutomata(hopcraft_figs_4_12_EQ);

const automata1 = new Automata(
  parsedAutomataA1Graph.states,
  parsedAutomataA1Graph.alphabet,
  parsedAutomataA1Graph.transitions,
  parsedAutomataA1Graph.initialState,
  parsedAutomataA1Graph.acceptanceStates
);

const automata2 = new Automata(
  parsedAutomataA2Graph.states,
  parsedAutomataA2Graph.alphabet,
  parsedAutomataA2Graph.transitions,
  parsedAutomataA2Graph.initialState,
  parsedAutomataA2Graph.acceptanceStates
);

console.log(testEquivalenceHCK(automata1, automata2));
