const sundeep = {
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
      isAcceptance: true,
      label: "q2",
    },
  ],
  edges: [
    {
      id: "edge-0.71477514614702261669086817411",
      source: "q2",
      target: "q2",
      label: "0",
    },
    {
      id: "edge-0.91220486178272281669086826037",
      source: "q1",
      target: "q1",
      label: "0",
    },
    {
      id: "edge-0.81944746464912721669086830410",
      source: "q1",
      target: "q2",
      label: "1",
    },
    {
      id: "edge-0.4043719022410791669086832759",
      source: "q2",
      target: "q1",
      label: "1",
    },
  ],
};

export { sundeep };
