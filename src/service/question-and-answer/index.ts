import CalculationQuestion from "./calculationQuestion";
import DirectQuestion from "./directQuestion";
import { Entity } from "../../types/helperTypes/clu";
import EquivalentQuestion from "./equivalentQuestion";
import { QueryModels } from "../../types";
import RangeQuestion from "./rangeQuestion";
import Selection from "./selection";

const QuestionService = (props: QueryModels): string => {
  const entities: Array<Entity> = props.result.prediction.entities;
  switch (props.result.prediction.topIntent) {
    case "DirectQuestion":
      return DirectQuestion(entities);
    case "Selection":
      return Selection(entities);
    case "EquivalentQuestion":
      return EquivalentQuestion(entities);
    case "CalculationQuestion":
      return CalculationQuestion(entities);
    case "RangeQuestion":
      return RangeQuestion(entities);
    default:
      return "No answer found";
  }
};

export default QuestionService;
