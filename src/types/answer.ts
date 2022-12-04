import { AnswerSpan } from "./helperTypes/questionAnswering";
import Question from "./question";

export default interface Answer {
  questions?: string[] | Array<Question>;
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
