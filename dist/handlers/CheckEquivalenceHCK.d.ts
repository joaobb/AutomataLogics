import { IAutomata } from "../definitions/Automata";
type TestEquivalence = {
    equivalent: boolean;
    reason?: {
        rejector: string;
        witness?: string;
    };
};
declare function testEquivalenceHCK(a1: IAutomata, a2: IAutomata): TestEquivalence;
export { testEquivalenceHCK };
