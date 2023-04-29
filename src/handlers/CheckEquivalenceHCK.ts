import {
  Alphabet,
  IAutomata,
  InputSymbol,
  StateId,
} from "../definitions/Automata";
import { setsAreEqual } from "../utils/set";
import { ExtendedUnionFind } from "./ExtendedUnionFind";
import { BidirectionalSetKeyedMap } from "./BidirectionalSetKeyedMap";

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

function sameAlphabet(a1Alphabet: Alphabet, a2Alphabet: Alphabet) {
  return setsAreEqual(new Set(a1Alphabet), new Set(a2Alphabet));
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

  unionFindStateIdMap.set(a1InitialStateAsArray, unionFind.make());
  unionFindStateIdMap.set(a2InitialStateAsArray, unionFind.make());

  const resolutionStack: ResolutionItem[] = [];

  const a1InitialStateUnionFindId = unionFindStateIdMap.get(
    a1InitialStateAsArray
  );
  const a2InitialStateUnionFindId = unionFindStateIdMap.get(
    a2InitialStateAsArray
  );

  if (!(a1InitialStateUnionFindId && a2InitialStateUnionFindId))
    throw new Error();

  unionFind.union(a1InitialStateUnionFindId, a2InitialStateUnionFindId);

  resolutionStack.push({
    a1: a1InitialStateAsArray,
    a2: a2InitialStateAsArray,
  });

  while (resolutionStack.length) {
    const { a1: stateGroupP, a2: stateGroupQ } = resolutionStack.pop()!;

    const stepValidityCheck = checkIsValidStep(stateGroupP, stateGroupQ);
    if (!stepValidityCheck.isValid) {
      return {
        equivalent: false,
        reason: {
          rejector: stepValidityCheck.rejector,
        },
      };
    }

    alphabet.forEach((symbol) => {
      const stateGroupPTargets = getTargetsByStateGroup(stateGroupP, symbol);

      if (!unionFindStateIdMap.has(stateGroupPTargets))
        unionFindStateIdMap.set(stateGroupPTargets, unionFind.make());
      let pTarget = unionFindStateIdMap.get(stateGroupPTargets)!;
      const pTargetParent = unionFind.find(pTarget);

      const stateGroupQTargets = getTargetsByStateGroup(stateGroupQ, symbol);

      if (!unionFindStateIdMap.has(stateGroupQTargets))
        unionFindStateIdMap.set(stateGroupQTargets, unionFind.make());
      let qTarget = unionFindStateIdMap.get(stateGroupQTargets)!;
      const qTargetParent = unionFind.find(qTarget);

      if (pTargetParent !== qTargetParent) {
        unionFind.union(pTargetParent, qTargetParent);
        resolutionStack.push({
          a1: unionFindStateIdMap.getByValue(pTargetParent),
          a2: unionFindStateIdMap.getByValue(qTargetParent),
        });
      }
    });
  }

  return { equivalent: true };
}

export { testEquivalenceHCK };
