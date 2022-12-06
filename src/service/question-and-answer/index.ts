/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Answer, QueryModels, Question } from "../../types";

import CalculationQuestion from "./calculationQuestion";
import DirectQuestion from "./directQuestion";
import EquivalentQuestion from "./equivalentQuestion";
import RangeQuestion from "./rangeQuestion";
import Selection from "./selection";
import chatLog from "../../data/chatLog.json";
import { confidenceScore } from "./confidenceScore";
import { v4 as uuidv4 } from "uuid";
import { Entity } from "../../types/helperTypes/clu";

const chatLogData: Array<Question | Answer> = chatLog;
let entities: Array<Entity>;

const QuestionService = (props: QueryModels): string => {
  entities = props.result.prediction.entities
  switch (props.result.prediction.topIntent) {
    case "DirectQuestion":
      return DirectQuestion(entities)
    case "Selection":
      return Selection(entities)
    case "EquivalentQuestion":
      return EquivalentQuestion(entities)
    case "CalculationQuestion":
      return CalculationQuestion(entities)
    case "RangeQuestion":
      return RangeQuestion(entities)
    default:
      return "No answer found";
  }
};

const postQuestion = (query: QueryModels): Answer => {
  const newQuestion: Question = {
    qnaId: uuidv4(),
    question: query.result.query,
  };

  const reply: Answer = {
    id: uuidv4(),
    questions: [newQuestion],
    confidenceScore: confidenceScore(query),
    answer: QuestionService(query),
  };

  chatLogData.push(newQuestion);
  chatLogData.push(reply);
  return reply;
};

export default {
  postQuestion,
};
