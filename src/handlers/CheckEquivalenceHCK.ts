import {
  Alphabet,
  IAutomata,
  InputSymbol,
  StateId,
} from "../definitions/Automata";
import { setsAreEqual } from "../utils/set";
import { ExtendedUnionFind } from "./ExtendedUnionFind";
import { BidirectionalSetKeyedMap } from "./BidirectionalSetKeyedMap";
import { StatesUnionFind } from "./StatesUnionFind";
import { EPSILON_KEY } from "../constants/automata";

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
  return setsAreEqual(
    new Set(clearAlphabet(a1Alphabet)),
    new Set(clearAlphabet(a2Alphabet))
  );
}

function testEquivalenceHCK(a1: IAutomata, a2: IAutomata): TestEquivalence {
  if (!sameAlphabet(a1.alphabet, a2.alphabet)) {
    return {
      equivalent: false,
      reason: { rejector: "Alphabets are different" },
    };
  }

  // Checks if both states on the step are either acceptance or not
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

  const stateUnionFind = new StatesUnionFind(
    a1.states.length + a2.states.length
  );

  const unionFind = new ExtendedUnionFind(a1.states.length + a2.states.length);
  const unionFindStateIdMap = new BidirectionalSetKeyedMap<StateId, number>();

  function getTargetsByStateGroup(stateGroup: StateId[], symbol: InputSymbol) {
    return (
      stateGroup
        .map((state) =>
          transitionsUnion[state][symbol]?.map(
            (transition) => transition.target
          )
        )
        .flat() || []
    ).filter(Boolean);
  }

  const alphabet = a1.alphabet;
  const acceptanceStatesUnion = [
    ...a1.acceptanceStates,
    ...a2.acceptanceStates,
  ];
  // δ(p, a) = δi(p, a) for p ∈ Qi, i ∈ {1, 2}.
  const transitionsUnion = { ...a1.transitions, ...a2.transitions };

  const a1InitialStateAsArray = [a1.initialState];
  const a2InitialStateAsArray = [a2.initialState];

  // ---- START OF HKe ALGORITHM

  stateUnionFind.make(a1InitialStateAsArray);
  stateUnionFind.make(a2InitialStateAsArray);

  const resolutionStack: ResolutionItem[] = [];

  stateUnionFind.union(a1InitialStateAsArray, a2InitialStateAsArray);

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
      console.log(symbol, stateGroupP, stateGroupQ);

      const pTargetsUFIdentifier = stateUnionFind.find(
        getTargetsByStateGroup(stateGroupP, symbol)
      );

      const qTargetsUFIdentifier = stateUnionFind.find(
        getTargetsByStateGroup(stateGroupQ, symbol)
      );

      if (pTargetsUFIdentifier !== qTargetsUFIdentifier) {
        stateUnionFind.union(pTargetsUFIdentifier, qTargetsUFIdentifier);
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
