import getUniqueElements from "lodash.uniq";

import { EPSILON_KEY } from "../constants/automata";
import {
  Alphabet,
  IAutomata,
  InputSymbol,
  StateId,
  Transitions,
} from "../definitions/Automata";
import { setsAreEqual } from "../utils/set";
import { StatesUnionFind } from "./StatesUnionFind";
import Automata from "../models/Automata";

type TestEquivalence = {
  equivalent: boolean;
  reason?: {
    rejector: string;
    witness?: string;
  };
};

type ResolutionItem = {
  a1: StateId[];
  a2: StateId[];
};

// Removes Epsilon from alphabet for testing equivalence
function clearAlphabet(alphabet: Alphabet) {
  return alphabet.filter((symbol) => symbol !== EPSILON_KEY);
}

function sameAlphabet(a1Alphabet: Alphabet, a2Alphabet: Alphabet) {
  return setsAreEqual(new Set(a1Alphabet), new Set(a2Alphabet));
}

function testEquivalenceHCK(a1: IAutomata, a2: IAutomata): TestEquivalence {
  if (!sameAlphabet(clearAlphabet(a1.alphabet), clearAlphabet(a2.alphabet))) {
    return {
      equivalent: false,
      reason: { rejector: "Alphabets are different" },
    };
  }

  if (!a1.initialState || !a2.initialState) {
    return {
      equivalent: false,
      reason: { rejector: "Initial state not set" },
    };
  }

  const hasEpsilonSymbol = [...a1.alphabet, ...a2.alphabet].includes(
    EPSILON_KEY
  );

  // Checks if both states on the step are either acceptance or not.
  // ε(p) === ε(q) : ε(p) = 1 ⇔ ∃p′ ∈ p : ε(p′) = 1
  function checkIsValidStep(pStateId: StateId[], qStateId: StateId[]) {
    // Is a valid group if both or none are acceptance states

    const pAccepts = pStateId.some((state) =>
      acceptanceStatesUnion.includes(state)
    );
    const qAccepts = qStateId.some((state) =>
      acceptanceStatesUnion.includes(state)
    );

    return {
      isValid: pAccepts === qAccepts,
      rejector: !pAccepts ? "a1" : "a2",
    };
  }

  const statesUnionFind = new StatesUnionFind(
    a1.states.length + a2.states.length
  );

  function getTargetsByStateGroup(
    stateGroup: StateId[],
    symbol: InputSymbol
  ): StateId[] {
    const result: StateId[] = [];

    stateGroup.forEach((state) =>
      result.push(
        ...Automata.step(state, symbol, transitionsUnion, hasEpsilonSymbol).map(
          (transition) => transition.target
        )
      )
    );

    return getUniqueElements(result.filter(Boolean));
  }

  const alphabet = clearAlphabet(a1.alphabet);

  const acceptanceStatesUnion = [
    ...a1.acceptanceStates,
    ...a2.acceptanceStates,
  ];

  // δ(p, a) = δi(p, a) for p ∈ Qi, i ∈ {1, 2}.
  const transitionsUnion: Transitions = {
    ...a1.transitions,
    ...a2.transitions,
  };

  const a1InitialStateAsArray: StateId[] = [
    a1.initialState,
    ...Automata.getEpsilonClosure(a1.initialState, a1.transitions).map(
      (transition) => transition.target
    ),
  ];
  const a2InitialStateAsArray: StateId[] = [
    a2.initialState,
    ...Automata.getEpsilonClosure(a2.initialState, a2.transitions).map(
      (transition) => transition.target
    ),
  ];

  // ---- START OF HKe ALGORITHM

  statesUnionFind.make(a1InitialStateAsArray);
  statesUnionFind.make(a2InitialStateAsArray);

  const resolutionStack: ResolutionItem[] = [];

  statesUnionFind.union(a1InitialStateAsArray, a2InitialStateAsArray);

  resolutionStack.push({
    a1: a1InitialStateAsArray,
    a2: a2InitialStateAsArray,
  });

  while (resolutionStack.length) {
    const { a1: stateGroupP, a2: stateGroupQ } = resolutionStack.pop()!;

    const stepValidityCheck = checkIsValidStep(stateGroupP, stateGroupQ);
    if (!stepValidityCheck.isValid) {
      return {
        // TODO: Implement witness for rejector automata
        equivalent: false,
        reason: {
          rejector: stepValidityCheck.rejector,
        },
      };
    }

    alphabet.forEach((symbol) => {
      const pTargetsUFIdentifier = statesUnionFind.find(
        getTargetsByStateGroup(stateGroupP, symbol)
      );

      const qTargetsUFIdentifier = statesUnionFind.find(
        getTargetsByStateGroup(stateGroupQ, symbol)
      );

      if (
        !setsAreEqual(
          new Set(pTargetsUFIdentifier),
          new Set(qTargetsUFIdentifier)
        )
      ) {
        statesUnionFind.union(pTargetsUFIdentifier, qTargetsUFIdentifier);
        resolutionStack.push({
          a1: pTargetsUFIdentifier,
          a2: qTargetsUFIdentifier,
        });
      }
    });
  }

  return { equivalent: true };
}

export { testEquivalenceHCK };
