import List from "../../data/material.json";
import { QuestionAsk } from "../../types";
import math from "mathjs";

const CalculationQuestion = (props: Omit<QuestionAsk, "range">) => {
  const inputValue = math.unit(props.value.value).toNumber("m");
  const searched = List.find(
    (l) => l[props.code.key] === props.code?.value.toUpperCase()
  );
  if (!searched) {
    return "We are unable to calculate!";
  }
  switch (props.searchKey?.key) {
    case "Cost":
      if (props.value?.kind === "LengthResolution") {
        return `${(searched.Mass * inputValue * searched.Cost).toFixed(3)}`;
      } else {
        return `${(inputValue * searched.Cost).toFixed(3)}`;
      }
    case "Mass":
      return `${(searched.Mass * inputValue).toFixed(3)}`;
    default:
      return "We are unable to calculate!";
  }
};

export default CalculationQuestion;
