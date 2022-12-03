import { Entity, Intent } from "./clu";

export type QuestionAsk = {
  searchKey: {
    key: string;
  };
  code: {
    key: string;
    value: string;
  };
  value: {
    kind: string;
    value: string;
  };
  range: {
    min: string | number;
    max: string | number;
  };
};

export type QueryModels = {
  kind: string;
  result: {
    query: string;
    prediction: {
      topIntent: string;
      projectType: string;
      intents: Array<Intent>;
      entities: Array<Entity>;
    };
  };
};
