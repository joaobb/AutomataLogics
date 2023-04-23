type StateId = string;
type TransitionId = string;

interface State {
  id: StateId;
  label: string;
}

type InputSymbol = string;
type Alphabet = InputSymbol[];

interface Transition {
  id?: TransitionId;
  target: StateId;
}

interface Transitions {
  [sourceStateId: StateId]: {
    [inputSymbol: InputSymbol]: Transition[];
  };
}

interface IAutomata {
  states: State[];
  alphabet: Alphabet;
  transitions: Transitions;
  initialState: StateId;
  acceptanceStates: StateId[];
}

export {
  StateId,
  TransitionId,
  State,
  Alphabet,
  InputSymbol,
  Transitions,
  Transition,
  IAutomata,
};
