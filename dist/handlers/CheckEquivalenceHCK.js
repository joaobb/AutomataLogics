"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEquivalenceHCK = void 0;
var lodash_uniq_1 = __importDefault(require("lodash.uniq"));
var automata_1 = require("../constants/automata");
var set_1 = require("../utils/set");
var StatesUnionFind_1 = require("./StatesUnionFind");
var Automata_1 = __importDefault(require("../models/Automata"));
// Removes Epsilon from alphabet for testing equivalence
function clearAlphabet(alphabet) {
    return alphabet.filter(function (symbol) { return symbol !== automata_1.EPSILON_KEY; });
}
function sameAlphabet(a1Alphabet, a2Alphabet) {
    return (0, set_1.setsAreEqual)(new Set(a1Alphabet), new Set(a2Alphabet));
}
function testEquivalenceHCK(a1, a2) {
    if (!sameAlphabet(clearAlphabet(a1.alphabet), clearAlphabet(a2.alphabet))) {
        return {
            equivalent: false,
            reason: { rejector: "Alphabets are different" },
        };
    }
    var hasEpsilonSymbol = __spreadArray(__spreadArray([], a1.alphabet, true), a2.alphabet, true).includes(automata_1.EPSILON_KEY);
    // Checks if both states on the step are either acceptance or not.
    // ε(p) === ε(q) : ε(p) = 1 ⇔ ∃p′ ∈ p : ε(p′) = 1
    function checkIsValidStep(pStateId, qStateId) {
        // Is a valid group if both or none are acceptance states
        var pAccepts = pStateId.some(function (state) {
            return acceptanceStatesUnion.includes(state);
        });
        var qAccepts = qStateId.some(function (state) {
            return acceptanceStatesUnion.includes(state);
        });
        return {
            isValid: pAccepts === qAccepts,
            rejector: !pAccepts ? "a1" : "a2",
        };
    }
    var statesUnionFind = new StatesUnionFind_1.StatesUnionFind(a1.states.length + a2.states.length);
    function getTargetsByStateGroup(stateGroup, symbol) {
        var result = [];
        stateGroup.forEach(function (state) {
            return result.push.apply(result, Automata_1.default.step(state, symbol, transitionsUnion, hasEpsilonSymbol).map(function (transition) { return transition.target; }));
        });
        return (0, lodash_uniq_1.default)(result.filter(Boolean));
    }
    var alphabet = clearAlphabet(a1.alphabet);
    var acceptanceStatesUnion = __spreadArray(__spreadArray([], a1.acceptanceStates, true), a2.acceptanceStates, true);
    // δ(p, a) = δi(p, a) for p ∈ Qi, i ∈ {1, 2}.
    var transitionsUnion = __assign(__assign({}, a1.transitions), a2.transitions);
    var a1InitialStateAsArray = __spreadArray([
        a1.initialState
    ], Automata_1.default.getEpsilonClosure(a1.initialState, a1.transitions).map(function (transition) { return transition.target; }), true);
    var a2InitialStateAsArray = __spreadArray([
        a2.initialState
    ], Automata_1.default.getEpsilonClosure(a2.initialState, a2.transitions).map(function (transition) { return transition.target; }), true);
    // ---- START OF HKe ALGORITHM
    statesUnionFind.make(a1InitialStateAsArray);
    statesUnionFind.make(a2InitialStateAsArray);
    var resolutionStack = [];
    statesUnionFind.union(a1InitialStateAsArray, a2InitialStateAsArray);
    resolutionStack.push({
        a1: a1InitialStateAsArray,
        a2: a2InitialStateAsArray,
    });
    var _loop_1 = function () {
        var _a = resolutionStack.pop(), stateGroupP = _a.a1, stateGroupQ = _a.a2;
        var stepValidityCheck = checkIsValidStep(stateGroupP, stateGroupQ);
        if (!stepValidityCheck.isValid) {
            return { value: {
                    // TODO: Implement witness for rejector automata
                    equivalent: false,
                    reason: {
                        rejector: stepValidityCheck.rejector,
                    },
                } };
        }
        alphabet.forEach(function (symbol) {
            var pTargetsUFIdentifier = statesUnionFind.find(getTargetsByStateGroup(stateGroupP, symbol));
            var qTargetsUFIdentifier = statesUnionFind.find(getTargetsByStateGroup(stateGroupQ, symbol));
            if (!(0, set_1.setsAreEqual)(new Set(pTargetsUFIdentifier), new Set(qTargetsUFIdentifier))) {
                statesUnionFind.union(pTargetsUFIdentifier, qTargetsUFIdentifier);
                resolutionStack.push({
                    a1: pTargetsUFIdentifier,
                    a2: qTargetsUFIdentifier,
                });
            }
        });
    };
    while (resolutionStack.length) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return { equivalent: true };
}
exports.testEquivalenceHCK = testEquivalenceHCK;
