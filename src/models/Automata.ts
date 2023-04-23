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
      firstStep.push(...this._getEpsilonClosure(this.initialState));
    }

    return word.split("").reduce(
      (path: Transition[][], symbol) => {
        const lastStep = path.at(-1);
        if (!lastStep) return path;

        const currentStep: Transition[] = [];

        lastStep.forEach((transition) => {
          const newStep = this.transitions[transition.target][symbol];

          if (newStep) {
            if (this.hasEpslonTransitions) {
              const extraTransitions =
                this._handlePossibleEpsilonTransitions(newStep);

              if (extraTransitions.length) {
                newStep.push(...extraTransitions);
              }
            }

            currentStep.push(...newStep);
          }
        });

        return [...path, uniqBy(currentStep, "id")];
      },
      [firstStep]
    );
  }

  private _handlePossibleEpsilonTransitions(transitions: Transition[]) {
    const statesWithEpsilonTransitions = transitions.reduce(
      (states: StateId[], transition) => {
        if (this.transitions[transition.target].hasOwnProperty(EPSILON_KEY))
          states.push(transition.target);

        return states;
      },

      []
    );
    const epsilonClosure: Transition[] = [];

    if (statesWithEpsilonTransitions.length) {
      epsilonClosure.push(
        ...this._getEpsilonClosure(statesWithEpsilonTransitions)
      );
    }

    return epsilonClosure;
  }

  private _getEpsilonClosure(states: StateId | StateId[]): any[] {
    if (!Array.isArray(states)) states = [states];

    return states
      .map((state) => {
        const epsilonStep = this.transitions[state][EPSILON_KEY];
        if (!epsilonStep) return [];

        return [
          ...epsilonStep,
          ...this._getEpsilonClosure(epsilonStep.map((step) => step.target)),
        ];
      })
      .flat();
  }
}

export default Automata;
