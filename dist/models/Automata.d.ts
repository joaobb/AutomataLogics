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
        accepts: boolean;
        reason: string;
        path?: undefined;
    } | {
        accepts: boolean | undefined;
        path: Path;
        reason?: undefined;
    };
    get hasEpslonTransitions(): boolean;
    private _walk;
    static step(stateId: StateId, symbol: InputSymbol, transitions: Transitions, hasEpsilonTransitions: Boolean): Transition[];
    static handlePossibleEpsilonTransitions(currentTransitions: Transition[], automataTransitions: Transitions): Transition[];
    static getEpsilonClosure(states: StateId | StateId[], transitions: Transitions): any[];
}
export default Automata;
