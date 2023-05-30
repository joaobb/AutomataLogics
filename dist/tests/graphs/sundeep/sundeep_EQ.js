"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sundeep_EQ = void 0;
var sundeep_EQ = {
    nodes: [
        {
            id: "q3",
            isInitial: true,
            isAcceptance: false,
            label: "q3",
        },
        {
            id: "q4",
            isInitial: false,
            isAcceptance: true,
            label: "q4",
        },
        {
            id: "q5",
            isInitial: false,
            isAcceptance: false,
            label: "q5",
        },
    ],
    edges: [
        {
            id: "edge-0.99316054617984831669086924144",
            source: "q3",
            target: "q3",
            label: "0",
        },
        {
            id: "edge-0.084351414287355381669086926328",
            source: "q3",
            target: "q4",
            label: "1",
        },
        {
            id: "edge-0.13938686625879361669086928748",
            source: "q4",
            target: "q4",
            label: "0",
        },
        {
            id: "edge-0.72834486340072481669086930604",
            source: "q4",
            target: "q5",
            label: "1",
        },
        {
            id: "edge-0.277839168429977251669086933925",
            source: "q5",
            target: "q5",
            label: "0",
        },
        {
            id: "edge-0.58870141761489081669086935708",
            source: "q5",
            target: "q4",
            label: "1",
        },
    ],
};
exports.sundeep_EQ = sundeep_EQ;
