import { Assets } from "./clu";
import { LanguageCode } from "./language";

export type CLUFile = {
  projectFileVersion: string;
  stringIndexType: string;
  metadata: {
    projectKind: string;
    projectName: string;
    multilingual: boolean;
    description: string;
    language: LanguageCode;
    settings: {
      confidenceThreshold: number;
    };
  };
  assets: Assets;
};
