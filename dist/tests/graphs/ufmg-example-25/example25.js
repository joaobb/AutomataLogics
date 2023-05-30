"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example25 = void 0;
var example25 = {
    nodes: [
        {
            id: "node-1",
            isInitial: true,
            isAcceptance: true,
            label: "q1",
        },
        {
            id: "node-2",
            isInitial: false,
            isAcceptance: false,
            label: "q2",
        },
        {
            id: "node-3",
            isInitial: false,
            isAcceptance: false,
            label: "q3",
        },
    ],
    edges: [
        {
            id: "edge-0.97091974289541931682907893353",
            source: "node-1",
            target: "node-2",
            label: "b",
        },
        {
            id: "edge-0.229897052917871881682907897268",
            source: "node-2",
            target: "node-2",
            label: "a",
        },
        {
            id: "edge-0.237451314280863631682907900318",
            source: "node-2",
            target: "node-3",
            label: "a",
        },
        {
            id: "edge-0.179598590317682441682907903219",
            source: "node-2",
            target: "node-3",
            label: "b",
        },
        {
            id: "edge-0.39424567943018341682907906985",
            source: "node-3",
            target: "node-1",
            label: "a",
        },
        {
            id: "edge-0.93851717996205751682907911635",
            source: "node-1",
            target: "node-3",
            label: "ε",
        },
    ],
};
exports.example25 = example25;
