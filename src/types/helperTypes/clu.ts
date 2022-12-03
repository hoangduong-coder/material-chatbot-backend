import { LanguageCode, Regex, Synonym } from "./language";

interface SubListItem {
  listKey: string;
  synonyms: Array<Synonym>;
}

type requireComponent = "learned" | "regex" | "list" | "prebuilts";

type ExtraInfo = {
  extraInformation: string;
  key?: string;
  value?: string;
  regexPattern?: string;
};

type Resolution = {
  resolutionKind: string;
  unit?: string;
  value?: number;
  rangeKind?: string;
  minimum?: string | number;
  maximum?: string | number;
};

export type Intent = {
  category: string;
  confidenceScore?: number;
};

export type Entity = {
  category: string;
  compositionSetting?: "combineComponents" | "separateComponents";
  list?: { sublists: SubListItem[] };
  prebuilts?: Array<{ category: string }>;
  regex?: {
    expressions: Regex[];
  };
  requireComponents?: requireComponent[];
  confidenceScore?: number;
  length?: number;
  offset?: number;
  text?: string;
  extraInformation?: Array<ExtraInfo>;
  resolutions?: Array<Resolution>;
};

export type Utterance = {
  text: string;
  language: LanguageCode;
  dataset: "Train" | "Test";
  intent: string;
  entities: Array<{
    category: string;
    offset: number;
    length: number;
  }>;
};

export type Assets = {
  projectKind: string;
  intents: Array<Intent>;
  entities: Array<Entity>;
  utterances: Array<Utterance>;
};
