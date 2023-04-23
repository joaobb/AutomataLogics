const tutorialsPoint = {
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
      id: "edge-0.56936365172682121668994857205",
      source: "q1",
      target: "q1",
      label: "c",
    },
    {
      id: "edge-0.65957394502230551668994861130",
      source: "q1",
      target: "q2",
      label: "d",
    },
    {
      id: "edge-0.07572617124754211668994863856",
      source: "q2",
      target: "q1",
      label: "d",
    },
    {
      id: "edge-0.193935816231757931668994868157",
      source: "q2",
      target: "q3",
      label: "c",
    },
    {
      id: "edge-0.93573341392611331668994873559",
      source: "q3",
      target: "q2",
      label: "c",
    },
    {
      id: "edge-0.45608695359906151668994877009",
      source: "q3",
      target: "q3",
      label: "d",
    },
  ],
};

export { tutorialsPoint };
