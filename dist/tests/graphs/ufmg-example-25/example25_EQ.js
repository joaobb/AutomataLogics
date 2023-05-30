"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example25_EQ = void 0;
var example25_EQ = {
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
            isAcceptance: true,
            label: "q6",
        },
    ],
    edges: [
        {
            id: "edge-0.69943881450647671682908244765",
            source: "node-1",
            target: "node-1",
            label: "a",
        },
        {
            id: "edge-0.42530187109457861682908249006",
            source: "node-1",
            target: "node-4",
            label: "b",
        },
        {
            id: "edge-0.877956419803631682908251458",
            source: "node-4",
            target: "node-2",
            label: "b",
        },
        {
            id: "edge-0.92149822775966861682908254045",
            source: "node-5",
            target: "node-2",
            label: "b",
        },
        {
            id: "edge-0.91965769244442331682908256399",
            source: "node-4",
            target: "node-5",
            label: "a",
        },
        {
            id: "edge-0.93576537772549281682908258940",
            source: "node-2",
            target: "node-1",
            label: "a",
        },
        {
            id: "edge-0.65699716508978431682908277052",
            source: "node-2",
            target: "node-3",
            label: "b",
        },
        {
            id: "edge-0.02598932436690361682908282248",
            source: "node-3",
            target: "node-3",
            label: "a",
        },
        {
            id: "edge-0.43326839827421581682908283847",
            source: "node-3",
            target: "node-3",
            label: "b",
        },
        {
            id: "edge-0.66931483293151021682908286906",
            source: "node-6",
            target: "node-6",
            label: "a",
        },
        {
            id: "edge-0.7354984851469341682908288538",
            source: "node-6",
            target: "node-5",
            label: "b",
        },
        {
            id: "edge-0.43211883006513661682908291283",
            source: "node-5",
            target: "node-6",
            label: "a",
        },
    ],
};
exports.example25_EQ = example25_EQ;
