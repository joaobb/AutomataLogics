const tutorialsPoint_EQ = {
  nodes: [
    {
      id: "q4",
      isInitial: true,
      isAcceptance: true,
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
  ],
  edges: [
    {
      id: "edge-0.98796646652993811668995003044",
      source: "q4",
      target: "q4",
      label: "c",
    },
    {
      id: "edge-0.24970981095609691668995005797",
      source: "q4",
      target: "q5",
      label: "d",
    },
    {
      id: "edge-0.29230660657662511668995009226",
      source: "q5",
      target: "q4",
      label: "d",
    },
    {
      id: "edge-0.105763844292682711668995014001",
      source: "q7",
      target: "q4",
      label: "d",
    },
    {
      id: "edge-0.474419970393593851668995017346",
      source: "q7",
      target: "q6",
      label: "c",
    },
    {
      id: "edge-0.121167479730767581668995021591",
      source: "q6",
      target: "q7",
      label: "c",
    },
    {
      id: "edge-0.031789354201757771668995025501",
      source: "q6",
      target: "q6",
      label: "d",
    },
    {
      id: "edge-0.34160386135697921668995034806",
      source: "q5",
      target: "q6",
      label: "c",
    },
  ],
};

export { tutorialsPoint_EQ };
