const nesoAcademy1_EQ = {
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
      id: "edge-0.111509253035199761682211949645",
      source: "q4",
      target: "q4",
      label: "c",
    },
    {
      id: "edge-0.93834402524379251682211956248",
      source: "q4",
      target: "q5",
      label: "d",
    },
    {
      id: "edge-0.52118830839822291682211959477",
      source: "q5",
      target: "q6",
      label: "c",
    },
    {
      id: "edge-0.95082581248454751682211962773",
      source: "q5",
      target: "q4",
      label: "d",
    },
    {
      id: "edge-0.27995381070564341682211965774",
      source: "q6",
      target: "q7",
      label: "c",
    },
    {
      id: "edge-0.017272435437821531682211969803",
      source: "q6",
      target: "q6",
      label: "d",
    },
    {
      id: "edge-0.79977530962565921682211973011",
      source: "q7",
      target: "q6",
      label: "c",
    },
    {
      id: "edge-0.382807810401924351682211976046",
      source: "q7",
      target: "q4",
      label: "d",
    },
  ],
};

export { nesoAcademy1_EQ };
