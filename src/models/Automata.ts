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
    this.states = states;
    this.alphabet = alphabet;
    this.initialState = initialState;
    this.acceptanceStates = acceptanceStates;
    this.transitions = transitions;
  }

  testWord(word: string) {
    const invalidSymbols = word
      .split("")
      .filter((symbol) => !this.alphabet.includes(symbol));

    if (invalidSymbols.length)
      return {
        accepts: false,
        reason: `Unrecognized symbol(s) on word: ${invalidSymbols.join(", ")}`,
      };

    const steps: Transition[][] = this._walk(word);

    return {
      accepts: steps
        .at(-1)
        ?.some((step) => this.acceptanceStates.includes(step.target)),
      path: steps,
    };
  }

  get hasEpslonTransitions() {
    return this.alphabet.includes(EPSILON_KEY);
  }

  private _walk(word: string) {
    const firstStep: Transition[] = [
      { id: undefined, target: this.initialState },
    ];

    if (this.hasEpslonTransitions) {
      firstStep.push(
        ...Automata.getEpsilonClosure(this.initialState, this.transitions)
      );
    }

    return word.split("").reduce(
      (path: Transition[][], symbol) => {
        const lastStep = path.at(-1);
        if (!lastStep) return path;

        const currentStep: Transition[] = [];

        lastStep.forEach((transition) => {
          currentStep.push(
            ...Automata.step(
              transition.target,
              symbol,
              this.transitions,
              this.hasEpslonTransitions
            )
          );
        });

        return [...path, uniqBy(currentStep, "id")];
      },
      [firstStep]
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
        if (automataTransitions[transition.target].hasOwnProperty(EPSILON_KEY))
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
        const epsilonStep = transitions[state][EPSILON_KEY];
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
