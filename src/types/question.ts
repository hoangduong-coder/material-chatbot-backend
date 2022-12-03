import { QueryModels } from "./helperTypes/query";

export default interface Question {
  id: string;
  userId?: string;
  content: QueryModels;
}
