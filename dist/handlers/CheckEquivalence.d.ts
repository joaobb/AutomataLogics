import { IAutomata } from "../definitions/Automata";
type TestEquivalence = {
    equivalent: boolean;
    reason?: {
        rejector: string;
        witness?: string;
    };
};
declare function testEquivalence(a1: IAutomata, a2: IAutomata): TestEquivalence;
export { testEquivalence };
