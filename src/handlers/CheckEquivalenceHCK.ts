import UnionFind from "union-find";

import { Alphabet, IAutomata, StateId } from "../definitions/Automata";
import { setsAreEqual } from "../utils/set";

type TestEquivalence = {
  equivalent: boolean;
  reason?: {
    rejector: string;
    witness?: string;
  };
};

type ResolutionItem = {
  a1: StateId;
  a2: StateId;
};

function sameAlphabet(a1Alphabet: Alphabet, a2Alphabet: Alphabet) {
  return setsAreEqual(new Set(a1Alphabet), new Set(a2Alphabet));
}

function testEquivalenceHCK(a1: IAutomata, a2: IAutomata): TestEquivalence {
  if (!sameAlphabet(a1.alphabet, a2.alphabet)) {
    return {
      equivalent: false,
      reason: { rejector: '"Alphabets are different"' },
    };
  }

  // Checks if both states on the step are either acceptance or not
  function checkIsValidStep(pStateId: StateId, qStateId: StateId) {
    // Is a valid group if both or none are acceptance states

    const pAccepts = acceptanceStatesUnion.includes(pStateId);
    const qAccepts = acceptanceStatesUnion.includes(qStateId);

    return {
      isValid: pAccepts === qAccepts,
      rejector: !pAccepts ? "a1" : "a2",
    };
  }

  const unionFind = new UnionFind(a1.states.length + a2.states.length);
  const unionFindStateIdMap: any = {};
  function getStateByUnionFindId(unionFindId: number) {
    return Object.entries(unionFindStateIdMap).find(
      ([_, mappingUId]) => mappingUId === unionFindId
    )?.[0]!;
  }

  const alphabet = a1.alphabet;
  const statesUnion = [
    ...a1.states.map((state) => state.id),
    ...a2.states.map((state) => state.id),
  ];
  const acceptanceStatesUnion = [
    ...a1.acceptanceStates,
    ...a2.acceptanceStates,
  ];
  // δ(p, a) = δi(p, a) for p ∈ Qi, i ∈ {1, 2}.
  const transitionsUnion = { ...a1.transitions, ...a2.transitions };

  statesUnion.forEach((stateId: StateId) => {
    unionFindStateIdMap[stateId] = unionFind.makeSet();
  });

  const resolutionStack: ResolutionItem[] = [];

  unionFind.link(
    unionFindStateIdMap[a1.initialState],
    unionFindStateIdMap[a2.initialState]
  );

  resolutionStack.push({ a1: a1.initialState, a2: a2.initialState });

  while (resolutionStack.length) {
    const { a1: p, a2: q } = resolutionStack.pop()!;

    const stepValidityCheck = checkIsValidStep(p, q);
    if (!stepValidityCheck.isValid) {
      return {
        equivalent: false,
        reason: {
          rejector: stepValidityCheck.rejector,
        },
      };
    }

    alphabet.forEach((symbol) => {
      const pParent = unionFind.find(
        unionFindStateIdMap[transitionsUnion[p][symbol][0].target]
      );

      const qParent = unionFind.find(
        unionFindStateIdMap[transitionsUnion[q][symbol][0].target]
      );

      if (pParent !== qParent) {
        unionFind.link(pParent, qParent);
        resolutionStack.push({
          a1: getStateByUnionFindId(pParent),
          a2: getStateByUnionFindId(qParent),
        });
      }
    });
  }

  return { equivalent: true };
}

export { testEquivalenceHCK };
