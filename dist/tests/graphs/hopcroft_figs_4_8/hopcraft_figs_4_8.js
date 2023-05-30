"use strict";
// src: Hopcroft:2001 - Figure 4.8
Object.defineProperty(exports, "__esModule", { value: true });
exports.hopcroft_figs_4_8 = void 0;
var hopcroft_figs_4_8 = {
    nodes: [
        {
            id: "q1",
            isInitial: true,
            isAcceptance: false,
            label: "q1",
        },
        {
            id: "q2",
            isInitial: false,
            isAcceptance: false,
            label: "q2",
        },
        {
            id: "q3",
            isInitial: false,
            isAcceptance: true,
            label: "q3",
        },
        {
            id: "q4",
            isInitial: false,
            isAcceptance: false,
            label: "q4",
        },
        {
            id: "q5",
            isInitial: false,
            isAcceptance: false,
            label: "q5",
        },
        {
            id: "q6",
            isInitial: false,
            isAcceptance: false,
            label: "q6",
        },
        {
            id: "q7",
            isInitial: false,
            isAcceptance: false,
            label: "q7",
        },
        {
            id: "q8",
            isInitial: false,
            isAcceptance: false,
            label: "q8",
        },
    ],
    edges: [
        {
            id: "edge-0.162715317499224851682736567538",
            source: "q1",
            target: "q2",
            label: "0",
        },
        {
            id: "edge-0.71668789845383631682736573237",
            source: "q1",
            target: "q6",
            label: "1",
        },
        {
            id: "edge-0.6532132895224451682736578972",
            source: "q2",
            target: "q3",
            label: "1",
        },
        {
            id: "edge-0.241457960364865661682736581956",
            source: "q3",
            target: "q3",
            label: "1",
        },
        {
            id: "edge-0.77373234787196951682736584804",
            source: "q3",
            target: "q1",
            label: "0",
        },
        {
            id: "edge-0.130919796532754871682736590038",
            source: "q4",
            target: "q3",
            label: "0",
        },
        {
            id: "edge-0.76469995282915091682736593956",
            source: "q4",
            target: "q7",
            label: "1",
        },
        {
            id: "edge-0.02285276707204621682736600753",
            source: "q5",
            target: "q6",
            label: "1",
        },
        {
            id: "edge-0.978756217557781682736604087",
            source: "q5",
            target: "q8",
            label: "0",
        },
        {
            id: "edge-0.21698412711398651682736609303",
            source: "q7",
            target: "q5",
            label: "1",
        },
        {
            id: "edge-0.09290788825302921682736614269",
            source: "q7",
            target: "q7",
            label: "0",
        },
        {
            id: "edge-0.097259071017805621682736619255",
            source: "q6",
            target: "q3",
            label: "0",
        },
        {
            id: "edge-0.48962503041025721682736624189",
            source: "q6",
            target: "q7",
            label: "1",
        },
        {
            id: "edge-0.63549134464544351682736644920",
            source: "q8",
            target: "q3",
            label: "1",
        },
        {
            id: "edge-0.98885883522265041682736651653",
            source: "q8",
            target: "q7",
            label: "0",
        },
        {
            id: "edge-0.30760873165314751682736892911",
            source: "q2",
            target: "q7",
            label: "0",
        },
    ],
};
exports.hopcroft_figs_4_8 = hopcroft_figs_4_8;
