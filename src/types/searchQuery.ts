import { Entity, Intent } from "./helperTypes/clu";

export interface QuestionAsk {
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
}

export default interface QueryModels {
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
}
