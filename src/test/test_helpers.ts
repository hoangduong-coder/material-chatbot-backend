export const sampleQuery = [
  {
    question: {
      query: "X20Cr13",
      prediction: {
        topIntent: "Selection",
        projectKind: "Conversation",
        intents: [
          {
            category: "Selection",
            confidenceScore: 0.74700713,
          },
        ],
        entities: [
          {
            category: "Material ID",
            text: "X20Cr13",
            offset: 0,
            length: 7,
            confidenceScore: 1,
          },
          {
            category: "Basic Material",
            text: "X20Cr13",
            offset: 0,
            length: 7,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Basic Material",
              },
            ],
          },
        ],
      },
    },
    expect: `\u{2605}Information of X20Cr13
    \u{2606} Material ID: MAT0011
    \u{2606} Object Name: ROUND BAR
    \u{2606} Dimension: 45
    \u{2606} Unit of Measure: M
    \u{2606} International Standard: EN 10060
    \u{2606} Basic Material: X20Cr13    EN 10088-3
    \u{2606} Remarks: Martensitic stainless steel
    \u{2606} Mass: 12.2463
    \u{2606} Density: 0.0000077
    \u{2606} Cost: 12
    \u{2606} Properties: %C: 0.16-0.25, %Si: max 1.0, %P: max 0.04, %S: max 0.03, %Cr: 12.0-14.0
  `,
  },
  //Direct
  {
    question: {
      query: "Material ID for Nitriding steel",
      prediction: {
        topIntent: "DirectQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "DirectQuestion",
            confidenceScore: 0.7917661,
          },
        ],
        entities: [
          {
            category: "Search Key",
            text: "Material ID",
            offset: 0,
            length: 11,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Material ID",
              },
            ],
          },
          {
            category: "Remarks",
            text: "Nitriding steel",
            offset: 16,
            length: 15,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Remarks",
              },
            ],
          },
        ],
      },
    },
    expect: "MAT0020, MAT0039",
  },
  {
    question: {
      query: "Chemical composition of MAT0008",
      prediction: {
        topIntent: "DirectQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "DirectQuestion",
            confidenceScore: 0.8185049,
          },
        ],
        entities: [
          {
            category: "Search Key",
            text: "Chemical composition",
            offset: 0,
            length: 20,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Properties",
              },
            ],
          },
          {
            category: "Material ID",
            text: "MAT0008",
            offset: 24,
            length: 7,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "RegexKey",
                key: "Material ID",
                regexPattern: "MAT[0-9]{4}",
              },
            ],
          },
        ],
      },
    },
    expect:
      "%Al: 0.01, %Fe: 0.2, %Si: 0.01, %Mn: 0.2, %P: 0.6, %S: 0.05, %Ni: 2.0, %Cu: 85.0-88.5, %Zn: 0.5, %Sn: 10.5-13.0, %Pb: 0.7",
  },
  {
    question: {
      query: "List all copper alloy material",
      prediction: {
        topIntent: "RangeQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "RangeQuestion",
            confidenceScore: 0.6758639,
          },
        ],
        entities: [
          {
            category: "Remarks",
            text: "copper alloy",
            offset: 9,
            length: 12,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Remarks",
              },
            ],
          },
        ],
      },
    },
    expect: "MAT0007, MAT0008, MAT0026, MAT0027, MAT0028, MAT0034",
  },
  {
    question: {
      query: "Which material of nickel-based superalloy",
      prediction: {
        topIntent: "DirectQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "DirectQuestion",
            confidenceScore: 0.60776645,
          },
        ],
        entities: [
          {
            category: "Remarks",
            text: "nickel-based superalloy",
            offset: 18,
            length: 23,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Remarks",
              },
            ],
          },
        ],
      },
    },
    expect: "MAT0016",
  },
  //Calculation
  {
    question: {
      query: "Cost of 7 m MAT0032",
      prediction: {
        topIntent: "CalculationQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "CalculationQuestion",
            confidenceScore: 0.7800266,
          },
        ],
        entities: [
          {
            category: "Search Key",
            text: "Cost",
            offset: 0,
            length: 4,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Cost",
              },
            ],
          },
          {
            category: "Value",
            text: "7 m",
            offset: 8,
            length: 3,
            confidenceScore: 1,
            resolutions: [
              {
                resolutionKind: "LengthResolution",
                unit: "Meter",
                value: 7,
              },
            ],
            extraInformation: [
              {
                extraInformationKind: "EntitySubtype",
                value: "quantity.dimension",
              },
            ],
          },
          {
            category: "Material ID",
            text: "MAT0032",
            offset: 12,
            length: 7,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "RegexKey",
                key: "Material ID",
                regexPattern: "MAT[0-9]{4}",
              },
            ],
          },
        ],
      },
    },
    expect: "10086.048€",
  },
  {
    question: {
      query: "9mm MAT0008 weight?",
      prediction: {
        topIntent: "CalculationQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "CalculationQuestion",
            confidenceScore: 0.8488628,
          },
        ],
        entities: [
          {
            category: "Value",
            text: "9mm",
            offset: 0,
            length: 3,
            confidenceScore: 1,
            resolutions: [
              {
                resolutionKind: "LengthResolution",
                unit: "Millimeter",
                value: 9,
              },
            ],
            extraInformation: [
              {
                extraInformationKind: "EntitySubtype",
                value: "quantity.dimension",
              },
            ],
          },
          {
            category: "Material ID",
            text: "MAT0008",
            offset: 4,
            length: 7,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "RegexKey",
                key: "Material ID",
                regexPattern: "MAT[0-9]{4}",
              },
            ],
          },
          {
            category: "Search Key",
            text: "weight",
            offset: 12,
            length: 6,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Mass",
              },
            ],
          },
        ],
      },
    },
    expect: "0.322kg",
  },
  //Range
  {
    question: {
      query: "Material range dimension bigger than 200",
      prediction: {
        topIntent: "DirectQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "DirectQuestion",
            confidenceScore: 0.80926865,
          },
        ],
        entities: [
          {
            category: "Search Key",
            text: "dimension",
            offset: 15,
            length: 9,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Dimensions",
              },
            ],
          },
          {
            category: "Value",
            text: "bigger than 200",
            offset: 25,
            length: 15,
            confidenceScore: 1,
            resolutions: [
              {
                resolutionKind: "NumericRangeResolution",
                rangeKind: "Number",
                minimum: 200,
                maximum: "Infinity",
              },
            ],
            extraInformation: [
              {
                extraInformationKind: "EntitySubtype",
                value: "quantity.numberrange",
              },
            ],
          },
        ],
      },
    },
    expect: "MAT0005, MAT0019, MAT0036, MAT0038",
  },
  {
    question: {
      query: "List material with mass smaller than 1",
      prediction: {
        topIntent: "RangeQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "RangeQuestion",
            confidenceScore: 0.9987613,
          },
        ],
        entities: [
          {
            category: "Search Key",
            text: "mass",
            offset: 19,
            length: 4,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Mass",
              },
            ],
          },
          {
            category: "Value",
            text: "smaller than 1",
            offset: 24,
            length: 14,
            confidenceScore: 1,
            resolutions: [
              {
                resolutionKind: "NumericRangeResolution",
                rangeKind: "Number",
                minimum: "-Infinity",
                maximum: 1,
              },
            ],
            extraInformation: [
              {
                extraInformationKind: "EntitySubtype",
                value: "quantity.numberrange",
              },
            ],
          },
        ],
      },
    },
    expect: "MAT0004, MAT0034, MAT0037",
  },
  //Equivalent
  {
    question: {
      query: "Which material similar to MAT0005?",
      prediction: {
        topIntent: "EquivalentQuestion",
        projectKind: "Conversation",
        intents: [
          {
            category: "EquivalentQuestion",
            confidenceScore: 0.955627,
          },
        ],
        entities: [
          {
            category: "Equivalent",
            text: "similar",
            offset: 15,
            length: 7,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "ListKey",
                key: "Equivalent",
              },
            ],
          },
          {
            category: "Material ID",
            text: "MAT0005",
            offset: 26,
            length: 7,
            confidenceScore: 1,
            extraInformation: [
              {
                extraInformationKind: "RegexKey",
                key: "Material ID",
                regexPattern: "MAT[0-9]{4}",
              },
            ],
          },
        ],
      },
    },
    expect: "MAT0005, MAT0006, MAT0033",
  },
];
