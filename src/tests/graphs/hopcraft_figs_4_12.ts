// src: Hopcroft:2001 - Figure 4.8

const hopcraft_figs_4_12 = {
  nodes: [
    {
      id: "node-1",
      isInitial: true,
      isAcceptance: false,
      label: "a",
    },
    {
      id: "node-2",
      isInitial: false,
      isAcceptance: false,
      label: "b",
    },
    {
      id: "node-3",
      isInitial: false,
      isAcceptance: true,
      label: "c",
    },
    {
      id: "node-4",
      isInitial: false,
      isAcceptance: false,
      label: "d",
    },
    {
      id: "node-5",
      isInitial: false,
      isAcceptance: false,
      label: "e",
    },
    {
      id: "node-6",
      isInitial: false,
      isAcceptance: false,
      label: "f",
    },
    {
      id: "node-7",
      isInitial: false,
      isAcceptance: false,
      label: "g",
    },
    {
      id: "node-8",
      isInitial: false,
      isAcceptance: false,
      label: "h",
    },
  ],
  edges: [
    {
      id: "edge-0.82281972940230811669087718624",
      source: "node-1",
      target: "node-2",
      label: "0",
    },
    {
      id: "edge-0.175497913898115641669087723691",
      source: "node-1",
      target: "node-6",
      label: "1",
    },
    {
      id: "edge-0.46088356324837321669087728114",
      source: "node-2",
      target: "node-3",
      label: "1",
    },
    {
      id: "edge-0.67831444214827741669087731644",
      source: "node-2",
      target: "node-7",
      label: "0",
    },
    {
      id: "edge-0.58372727651520771669087736413",
      source: "node-3",
      target: "node-3",
      label: "1",
    },
    {
      id: "edge-0.62807614728922091669087740280",
      source: "node-3",
      target: "node-8",
      label: "0",
    },
    {
      id: "edge-0.121976633846266221669087748321",
      source: "node-4",
      target: "node-3",
      label: "0",
    },
    {
      id: "edge-0.91880981101533751669087751707",
      source: "node-4",
      target: "node-7",
      label: "1",
    },
    {
      id: "edge-0.75608196365680171669087759304",
      source: "node-5",
      target: "node-1",
      label: "0",
    },
    {
      id: "edge-0.077469733275534081669087763642",
      source: "node-5",
      target: "node-6",
      label: "1",
    },
    {
      id: "edge-0.050378903161462541669087767039",
      source: "node-6",
      target: "node-7",
      label: "1",
    },
    {
      id: "edge-0.466004179836366771669087781088",
      source: "node-6",
      target: "node-3",
      label: "0",
    },
    {
      id: "edge-0.87829333924207531669087787573",
      source: "node-7",
      target: "node-7",
      label: "0",
    },
    {
      id: "edge-0.82303491475244521669087792504",
      source: "node-7",
      target: "node-5",
      label: "1",
    },
    {
      id: "edge-0.83279584690124381669087798506",
      source: "node-8",
      target: "node-3",
      label: "1",
    },
    {
      id: "edge-0.15642692872628251669087808642",
      source: "node-8",
      target: "node-7",
      label: "0",
    },
  ],
};

export { hopcraft_figs_4_12 };
