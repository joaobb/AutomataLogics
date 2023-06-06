"use strict";
// src: http://www2.lawrence.edu/fast/GREGGJ/CMSC515/chapt01/Nondeterminism.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.lawrance2Epsilon = void 0;
var lawrance2Epsilon = {
    nodes: [
        {
            id: "node-1",
            isInitial: true,
            isAcceptance: false,
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
        {
            id: "node-4",
            isInitial: false,
            isAcceptance: false,
            label: "q4",
        },
        {
            id: "node-5",
            isInitial: false,
            isAcceptance: false,
            label: "q5",
        },
        {
            id: "node-6",
            isInitial: false,
            isAcceptance: false,
            label: "q6",
        },
        {
            id: "node-7",
            isInitial: false,
            isAcceptance: false,
            label: "q7",
        },
        {
            id: "node-8",
            isInitial: false,
            isAcceptance: true,
            label: "q8",
        },
    ],
    edges: [
        {
            id: "edge-0.91544789325069061681864728963",
            source: "node-1",
            target: "node-1",
            label: "0",
        },
        {
            id: "edge-0.69134041539172461681864739281",
            source: "node-1",
            target: "node-1",
            label: "1",
        },
        {
            id: "edge-0.82416063936665361681864743213",
            source: "node-1",
            target: "node-2",
            label: "ε",
        },
        {
            id: "edge-0.27674664783888451681864747852",
            source: "node-2",
            target: "node-1",
            label: "0",
        },
        {
            id: "edge-0.02200514894233031681864752665",
            source: "node-2",
            target: "node-3",
            label: "1",
        },
        {
            id: "edge-0.351819646271940731681864757247",
            source: "node-3",
            target: "node-3",
            label: "1",
        },
        {
            id: "edge-0.108062299017861911681864760013",
            source: "node-3",
            target: "node-4",
            label: "0",
        },
        {
            id: "edge-0.46147130285472991681864767081",
            source: "node-4",
            target: "node-8",
            label: "1",
        },
        {
            id: "edge-0.80713880524800131681864769579",
            source: "node-8",
            target: "node-8",
            label: "1",
        },
        {
            id: "edge-0.083744726118840871681864772765",
            source: "node-8",
            target: "node-8",
            label: "0",
        },
        {
            id: "edge-0.130750296012318131681864776898",
            source: "node-7",
            target: "node-8",
            label: "0",
        },
        {
            id: "edge-0.27475600800039681681864781201",
            source: "node-7",
            target: "node-1",
            label: "1",
        },
        {
            id: "edge-0.80858727256612721681864785566",
            source: "node-6",
            target: "node-7",
            label: "1",
        },
        {
            id: "edge-0.60579729999193391681864789982",
            source: "node-6",
            target: "node-6",
            label: "0",
        },
        {
            id: "edge-0.98901077023400991681864793075",
            source: "node-5",
            target: "node-6",
            label: "0",
        },
        {
            id: "edge-0.66380796573711921681864797465",
            source: "node-1",
            target: "node-5",
            label: "ε",
        },
        {
            id: "edge-0.070009502197649681681864801266",
            source: "node-5",
            target: "node-1",
            label: "1",
        },
        {
            id: "edge-0.5998094238133641681864810817",
            source: "node-4",
            target: "node-1",
            label: "0",
        },
    ],
};
exports.lawrance2Epsilon = lawrance2Epsilon;
