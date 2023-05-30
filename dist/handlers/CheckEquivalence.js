"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEquivalence = void 0;
var set_1 = require("../utils/set");
function sameAlphabet(a1Alphabet, a2Alphabet) {
    return (0, set_1.setsAreEqual)(new Set(a1Alphabet), new Set(a2Alphabet));
}
function testEquivalence(a1, a2) {
    if (!sameAlphabet(a1.alphabet, a2.alphabet)) {
        console.log(a1.alphabet, a2.alphabet);
        return {
            equivalent: false,
            reason: { rejector: '"Alphabets are different"' },
        };
    }
    // Solver queue
    var resolutionQueue = [
        { a1: a1.initialState, a2: a2.initialState },
    ];
    // let witness = "";
    // const alphabet = a1.alphabet;
    // Checks if both states on the step are either acceptance or not
    // function isStepValid(a1StateId: StateId, a2StateId: StateId) {
    //   // Is a valid group if both or none are acceptance states
    //   const a1Accepts = a1.acceptanceStates.includes(a1StateId);
    //   const a2Accepts = a2.acceptanceStates.includes(a2StateId);
    //   return {
    //     isValid: a1Accepts === a2Accepts,
    //     rejector: !a1Accepts ? "a1" : "a2",
    //   };
    // }
    while (resolutionQueue.length) {
        var step = resolutionQueue.shift();
        var a1StepTransitions = a1.transitions[step.a1];
        var a2StepTransitions = a2.transitions[step.a2];
        // alphabet.forEach((key) => {
        //   const a1Target = a1StepTransitions[key].map((state) => state.target);
        //   const a2Target = a2StepTransitions[key].map((state) => state.target);
        //
        //   const stepValidityCheck = isStepValid(a1Target, a2Target);
        // });
        console.log(a1StepTransitions, a2StepTransitions);
    }
    return { equivalent: true };
}
exports.testEquivalence = testEquivalence;
