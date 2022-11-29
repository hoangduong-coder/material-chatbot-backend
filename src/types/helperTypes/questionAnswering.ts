//To configure Answer span prediction feature.
export interface ShortAnswerOptions {
  confidenceScoreThreshold: number; // Minimum threshold score required to include an answer span, value ranges from 0 to 1.
  enable: boolean; // Enable or disable Answer Span prediction.
  topAnswersWithSpan: number; //Number of Top answers to be considered for span prediction from 1 to 10.
}

//Context object with previous QnA's information.
export interface KnowledgeBaseAnswerContext {
  previousQnaId: number;
  previousUserQuery: string;
}

export type LogicalOperationType = "AND" | "OR";

//Find QnAs that are associated with the given list of metadata.
export interface MetadataFilter {
  logicalOperation: LogicalOperationType;
  metadata: Array<{
    key: string;
    value: string;
  }>;
}

//filters over knowledge base in Question and answering cognitive service.
export interface QueryFilters {
  logicalOperation: LogicalOperationType;
  metadataFilter: MetadataFilter;
  sourceFilter: string[];
}

export interface RankerKind {
  default: string;
  questionOnly: string;
}

export interface AnswerSpan {
  confidenceScore: number;
  length: number;
  offset: number;
  text: string;
}
