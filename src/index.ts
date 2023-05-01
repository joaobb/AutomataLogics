import Automata from "./models/Automata";
import { parseGraphToAutomata } from "./parsers/graphToAutomata";

import { lawrance2Epslon } from "./tests/graphs/lawrance";

import hopcroft from "./tests/graphs/hopcroft_figs_4_8";
import nesoAcademy from "./tests/graphs/nesoAcademy";
import sundeep from "./tests/graphs/sundeep";
import ufmgExample25 from "./tests/graphs/ufmg-example-25";

import { testEquivalenceHCK } from "./handlers/CheckEquivalenceHCK";

const parsedAutomataA1Graph = parseGraphToAutomata(hopcroft.a2, "a1-");
const parsedAutomataA2Graph = parseGraphToAutomata(hopcroft.a1, "a2-");

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
