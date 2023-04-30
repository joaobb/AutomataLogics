// src: Hopcroft:2001 - Figure 4.12, equivalent to figure 4.8
const hopcroft_figs_4_12 = {
  "nodes": [
    {
      "id": "q9",
      "isInitial": true,
      "isAcceptance": false,
      "label": "q9"
    },
    {
      "id": "q10",
      "isInitial": false,
      "isAcceptance": false,
      "label": "q10"
    },
    {
      "id": "q11",
      "isInitial": false,
      "isAcceptance": true,
      "label": "q11"
    },
    {
      "id": "q12",
      "isInitial": false,
      "isAcceptance": false,
      "label": "q12"
    },
    {
      "id": "q13",
      "isInitial": false,
      "isAcceptance": false,
      "label": "q13"
    }
  ],
  "edges": [
    {
      "id": "edge-0.139303261817375731682737048499",
      "source": "q9",
      "target": "q10",
      "label": "0"
    },
    {
      "id": "edge-0.50496932638502261682737051349",
      "source": "q10",
      "target": "q11",
      "label": "1"
    },
    {
      "id": "edge-0.64284813706246351682737054749",
      "source": "q11",
      "target": "q11",
      "label": "1"
    },
    {
      "id": "edge-0.439708630213694551682737058829",
      "source": "q9",
      "target": "q12",
      "label": "1"
    },
    {
      "id": "edge-0.82942211643311281682737064018",
      "source": "q12",
      "target": "q13",
      "label": "1"
    },
    {
      "id": "edge-0.58968164873761682737066633",
      "source": "q13",
      "target": "q13",
      "label": "0"
    },
    {
      "id": "edge-0.37231853545806161682737075035",
      "source": "q13",
      "target": "q9",
      "label": "1"
    },
    {
      "id": "edge-0.070820299170167631682737080816",
      "source": "q12",
      "target": "q11",
      "label": "0"
    },
    {
      "id": "edge-0.63536285601371681682737085900",
      "source": "q11",
      "target": "q9",
      "label": "0"
    },
    {
      "id": "edge-0.9129062114261931682737092232",
      "source": "q10",
      "target": "q13",
      "label": "0"
    }
  ]
};

export { hopcroft_figs_4_12 };
