import { Entity, Intent } from "./helperTypes/clu";

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
