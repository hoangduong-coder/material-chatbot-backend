import {
  KnowledgeBaseAnswerContext,
  QueryFilters,
  RankerKind,
  ShortAnswerOptions,
} from "./helperTypes/questionAnswering";

export default interface Question {
  answerSpanRequest?: ShortAnswerOptions;
  confidenceScoreThreshold?: number;
  context?: KnowledgeBaseAnswerContext;
  filters?: QueryFilters;
  includeUnstructuredSources?: boolean;
  qnaId: string;
  question: string;
  rankerType?: RankerKind;
  top?: number;
  userId?: string;
}
