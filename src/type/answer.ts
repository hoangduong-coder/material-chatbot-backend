import { AnswerSpan } from "./helperTypes";

export interface Answer {
  questions: string[];
  answer: string;
  confidenceScore: number;
  id: number;
  source: string;
  metadata?: {
    category: string;
    editorial: string;
  };
  dialog: {
    isContextOnly: boolean;
    prompts: Array<{
      displayOrder: number;
      qnaId: number;
      displayText: string;
    }>;
  };
  answerSpan: AnswerSpan;
}
