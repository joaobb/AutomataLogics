// src: Hopcroft:2001 - Figure 4.12, equivalent to figure 4.8
const hopcraft_figs_4_12_EQ = {
  nodes: [
    {
      id: "node-10",
      isInitial: true,
      isAcceptance: false,
      label: "a,e",
    },
    {
      id: "node-11",
      isInitial: false,
      isAcceptance: false,
      label: "g",
    },
    {
      id: "node-12",
      isInitial: false,
      isAcceptance: false,
      label: "b,h",
    },
    {
      id: "node-13",
      isInitial: false,
      isAcceptance: false,
      label: "d,f",
    },
    {
      id: "node-14",
      isInitial: false,
      isAcceptance: true,
      label: "c",
    },
  ],
  edges: [
    {
      id: "edge-0.69287600351735821669156213733",
      source: "node-11",
      target: "node-10",
      label: "1",
    },
    {
      id: "edge-0.90767503144179051669156219317",
      source: "node-11",
      target: "node-11",
      label: "0",
    },
    {
      id: "edge-0.74955307267316031669156223327",
      source: "node-13",
      target: "node-11",
      label: "1",
    },
    {
      id: "edge-0.65779638283616591669156229005",
      source: "node-10",
      target: "node-13",
      label: "1",
    },
    {
      id: "edge-0.5128283001529251669156232753",
      source: "node-13",
      target: "node-14",
      label: "0",
    },
    {
      id: "edge-0.46230368197664861669156236342",
      source: "node-14",
      target: "node-14",
      label: "1",
    },
    {
      id: "edge-0.63090650205108761669156242775",
      source: "node-14",
      target: "node-10",
      label: "0",
    },
    {
      id: "edge-0.71159438879471581669156247175",
      source: "node-12",
      target: "node-14",
      label: "1",
    },
    {
      id: "edge-0.15513219689944391669156251111",
      source: "node-12",
      target: "node-11",
      label: "0",
    },
    {
      id: "edge-0.68398871948755931669156254922",
      source: "node-10",
      target: "node-12",
      label: "0",
    },
  ],
};

export { hopcraft_figs_4_12_EQ };
