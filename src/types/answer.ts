import { AnswerSpan } from "./helperTypes/questionAnswering";

export default interface Answer {
  questions?: string[];
  answer: string;
  confidenceScore?: number;
  id: number | string;
  source?: string;
  metadata?: {
    category: string;
    editorial: string;
  };
  dialog?: {
    isContextOnly: boolean;
    prompts: Array<{
      displayOrder: number;
      qnaId: number;
      displayText: string;
    }>;
  };
  answerSpan?: AnswerSpan;
}
