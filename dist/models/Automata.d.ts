import { IAutomata, InputSymbol, State, StateId, Transition, Transitions } from "../definitions/Automata";
type Path = {
    key: InputSymbol;
    transitions: Transition[];
}[];
declare class Automata implements IAutomata {
    states: State[];
    alphabet: InputSymbol[];
    transitions: Transitions;
    initialState: StateId;
    acceptanceStates: StateId[];
    constructor(states: State[], alphabet: InputSymbol[], transitions: Transitions, initialState: StateId, acceptanceStates: StateId[]);
    testWord(word: string): {
        accepts: Boolean;
        reason?: string;
        path: Path;
    };
    get hasEpsilonTransitions(): boolean;
    private _walk;
    static step(stateId: StateId, symbol: InputSymbol, transitions: Transitions, hasEpsilonTransitions: Boolean): Transition[];
    static handlePossibleEpsilonTransitions(currentTransitions: Transition[], automataTransitions: Transitions): Transition[];
    static getEpsilonClosure(states: StateId | StateId[], transitions: Transitions): any[];
}
export default Automata;
