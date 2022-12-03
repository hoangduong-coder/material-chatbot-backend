/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Answer, Question } from "../../types";

import CalculationQuestion from "./calculationQuestion";
import DirectQuestion from "./directQuestion";
import EquivalentQuestion from "./equivalentQuestion";
import { QueryModels } from "../../types/helperTypes/query";
import RangeQuestion from "./rangeQuestion";
import Selection from "./selection";
import chatLog from "../../data/chatLog.json";
import { v4 as uuidv4 } from "uuid";

const chatLogData: Array<Question | Answer> = chatLog;

const QuestionService = (props: QueryModels) => {
  switch (props.result.prediction.topIntent) {
    case "DirectQuestion":
      return DirectQuestion({
        searchKey: {
          key: props.result.prediction.entities[0].extraInformation?.[0].key!,
        },
        code: {
          key: props.result.prediction.entities[1].category,
          value: props.result.prediction.entities[1].text!,
        },
      });
    case "Selection":
      return Selection({
        code: {
          key: props.result.prediction.entities[0].category,
          value: props.result.prediction.entities[0].text!,
        },
      });
    case "EquivalentQuestion":
      return EquivalentQuestion({
        code: {
          key: props.result.prediction.entities[1].category,
          value: props.result.prediction.entities[1].text!,
        },
      });
    case "CalculationQuestion":
      return CalculationQuestion({
        searchKey: {
          key: props.result.prediction.entities[0].extraInformation?.[0].key!,
        },
        code: {
          key: props.result.prediction.entities[2].category,
          value: props.result.prediction.entities[2].text!,
        },
        value: {
          kind: props.result.prediction.entities[1].resolutions?.[0]
            .resolutionKind!,
          value: props.result.prediction.entities[1].text!,
        },
      });
    case "RangeQuestion":
      return RangeQuestion({
        searchKey: {
          key: props.result.prediction.entities[0].extraInformation?.[0].key!,
        },
        range: {
          min: props.result.prediction.entities[1].resolutions?.[0].minimum!,
          max: props.result.prediction.entities[1].resolutions?.[0].maximum!,
        },
      });
    default:
      return "No answer found";
  }
};

const postQuestion = (query: QueryModels): Answer => {
  const newQuestion: Question = {
    id: uuidv4(),
    content: query,
  };

  const reply: Answer = {
    id: uuidv4(),
    query: newQuestion,
    type:
      query.result.prediction.topIntent === "Selection"
        ? "Selection"
        : "One-line",
    answer: QuestionService(query),
  };

  chatLogData.push(newQuestion);
  chatLogData.push(reply);
  return reply;
};

export default {
  postQuestion,
};
