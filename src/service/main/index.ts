import { Answer, QueryModels, Question } from "../../types";

import QuestionService from "../question-and-answer";
import chatLog from "../../data/chatLog.json";
import { confidenceScore } from "../question-and-answer/confidenceScore";
import { v4 as uuidv4 } from "uuid";

const chatLogData: Array<Question | Answer> = chatLog;

const isAnswer = (ans: unknown): boolean => {
  return (ans as Answer).answer !== undefined;
};

const getAll = (): (Question | Answer)[] => {
  return chatLogData;
};

const postQuestion = (query: QueryModels): Question => {
  const newQuestion: Question = {
    qnaId: uuidv4(),
    question: query.result.query,
  };
  chatLogData.push(newQuestion);

  const reply: Answer = {
    id: uuidv4(),
    questions: [newQuestion],
    confidenceScore: confidenceScore(query),
    answer: QuestionService(query),
  };

  chatLogData.push(reply);
  return newQuestion;
};

const getAnswer = (id: string) => {
  return chatLogData.find(
    (ans) => isAnswer(ans) && ans["questions"][0]["qnaId"] === id
  );
};

export default {
  postQuestion,
  getAnswer,
  getAll,
};
