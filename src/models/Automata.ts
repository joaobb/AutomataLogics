import uniqBy from "lodash.uniqby";

import {
  IAutomata,
  InputSymbol,
  State,
  StateId,
  Transition,
  Transitions,
} from "../definitions/Automata";
import { EPSILON_KEY } from "../constants/automata";

type Path = {
  key: InputSymbol;
  transitions: Transition[];
}[];

class Automata implements IAutomata {
  states: State[];
  alphabet: InputSymbol[];
  transitions: Transitions;
  initialState: StateId;
  acceptanceStates: StateId[];

  constructor(
    states: State[],
    alphabet: InputSymbol[],
    transitions: Transitions,
    initialState: StateId,
    acceptanceStates: StateId[]
  ) {
    this.states = states || [];
    this.alphabet = alphabet || [];
    this.initialState = initialState;
    this.acceptanceStates = acceptanceStates || [];
    this.transitions = transitions || [];
  }

  testWord(word: string) {
    const invalidSymbols = word
      .split("")
      .filter((symbol) => !this.alphabet.includes(symbol));

    if (invalidSymbols.length)
      return {
        accepts: false,
        reason: `Unrecognized symbol(s) on word: ${invalidSymbols.join(", ")}`,
        path: [],
      };

    if (!this.initialState)
      return { accepts: false, reason: "No initial state set", path: [] };
    if (!this.acceptanceStates.length)
      return { accepts: false, reason: "No acceptance states set", path: [] };

    const steps: Path = this._walk(word);

    return {
      accepts: steps
        .at(-1)
        ?.transitions.some((step) =>
          this.acceptanceStates.includes(step.target)
        ),
      path: steps,
    };
  }

  get hasEpsilonTransitions() {
    return this.alphabet.includes(EPSILON_KEY);
  }

  private _walk(word: string): Path {
    const firstStep: Transition[] = [
      { id: undefined, target: this.initialState },
    ];

    if (this.hasEpsilonTransitions) {
      firstStep.push(
        ...Automata.getEpsilonClosure(this.initialState, this.transitions)
      );
    }

    return word.split("").reduce(
      (path: Path, symbol: InputSymbol) => {
        const lastStep = path.at(-1)?.transitions;
        if (!lastStep) return path;

        const currentStep: Transition[] = [];

        lastStep.forEach((transition) => {
          currentStep.push(
            ...Automata.step(
              transition.target,
              symbol,
              this.transitions,
              this.hasEpsilonTransitions
            )
          );
        });

        return [
          ...path,
          { key: symbol, transitions: uniqBy(currentStep, "id") },
        ];
      },
      [{ key: EPSILON_KEY, transitions: firstStep }]
    );
  }

  static step(
    stateId: StateId,
    symbol: InputSymbol,
    transitions: Transitions,
    hasEpsilonTransitions: Boolean
  ) {
    const target = transitions[stateId][symbol];

    if (target) {
      if (hasEpsilonTransitions) {
        const epsilonStep = Automata.handlePossibleEpsilonTransitions(
          target,
          transitions
        );

        if (epsilonStep.length) {
          target.push(...epsilonStep);
        }
      }
    }

    return target || [];
  }

  static handlePossibleEpsilonTransitions(
    currentTransitions: Transition[],
    automataTransitions: Transitions
  ) {
    const statesWithEpsilonTransitions = currentTransitions.reduce(
      (states: StateId[], transition) => {
        if (automataTransitions[transition.target]?.hasOwnProperty(EPSILON_KEY))
          states.push(transition.target);

        return states;
      },

      []
    );
    const epsilonClosure: Transition[] = [];

    if (statesWithEpsilonTransitions.length) {
      epsilonClosure.push(
        ...Automata.getEpsilonClosure(
          statesWithEpsilonTransitions,
          automataTransitions
        )
      );
    }

    return epsilonClosure;
  }

  static getEpsilonClosure(
    states: StateId | StateId[],
    transitions: Transitions
  ): any[] {
    if (!Array.isArray(states)) states = [states];

    return states
      .map((state) => {
        const epsilonStep = transitions[state]?.[EPSILON_KEY];
        if (!epsilonStep) return [];

        return [
          ...epsilonStep,
          ...Automata.getEpsilonClosure(
            epsilonStep.map((step) => step.target),
            transitions
          ),
        ];
      })
      .flat();
  }
}

export default Automata;
