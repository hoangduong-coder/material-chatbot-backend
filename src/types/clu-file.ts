import { Assets } from "./helperTypes/clu";
import { LanguageCode } from "./helperTypes/language";

export default interface CLUFile {
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
}
