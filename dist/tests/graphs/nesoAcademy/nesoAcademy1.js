"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nesoAcademy1 = void 0;
var nesoAcademy1 = {
    nodes: [
        {
            id: "q1",
            isInitial: true,
            isAcceptance: true,
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
            isAcceptance: false,
            label: "q3",
        },
    ],
    edges: [
        {
            id: "edge-0.46966312510311091669081429635",
            source: "q1",
            target: "q1",
            label: "c",
        },
        {
            id: "edge-0.70776474631227581669081433534",
            source: "q1",
            target: "q2",
            label: "d",
        },
        {
            id: "edge-0.127822629036648651669081438555",
            source: "q2",
            target: "q1",
            label: "d",
        },
        {
            id: "edge-0.23416539210825451669081441779",
            source: "q2",
            target: "q3",
            label: "c",
        },
        {
            id: "edge-0.48047344400217121669081445106",
            source: "q3",
            target: "q2",
            label: "c",
        },
        {
            id: "edge-0.96501168234894811669081448782",
            source: "q3",
            target: "q3",
            label: "d",
        },
    ],
};
exports.nesoAcademy1 = nesoAcademy1;
