"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGraphToAutomata = exports.testEquivalenceHCK = exports.Automata = void 0;
var Automata_1 = __importDefault(require("./models/Automata"));
exports.Automata = Automata_1.default;
var CheckEquivalenceHCK_1 = require("./handlers/CheckEquivalenceHCK");
Object.defineProperty(exports, "testEquivalenceHCK", { enumerable: true, get: function () { return CheckEquivalenceHCK_1.testEquivalenceHCK; } });
var graphToAutomata_1 = require("./parsers/graphToAutomata");
Object.defineProperty(exports, "parseGraphToAutomata", { enumerable: true, get: function () { return graphToAutomata_1.parseGraphToAutomata; } });
