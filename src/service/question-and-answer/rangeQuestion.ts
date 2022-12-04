import List from "../../data/material.json";
import { QuestionAsk } from "../../types";

const RangeQuestion = (props: Pick<QuestionAsk, "range" | "searchKey">) => {
  let check = "";
  const min = props.range.min;
  const max = props.range.max;
  if (typeof min === "number" && typeof max === "number") {
    check = "range";
  } else if (typeof min === "number" && typeof max === "string") {
    check = "bigger";
  } else if (typeof min === "string" && typeof max === "number") {
    check = "smaller";
  }

  const listSearched = List.filter((ls) => {
    switch (check) {
      case "range":
        return ls[props.searchKey.key] >= min && ls[props.searchKey.key] <= max;
      case "bigger":
        return ls[props.searchKey.key] >= min;
      case "smaller":
        return ls[props.searchKey.key] <= max;
      default:
        return "No answer found!";
    }
  });
  const ans = listSearched.map((s) => s["Material ID"]);
  return ans.join(`, `);
};

export default RangeQuestion;
