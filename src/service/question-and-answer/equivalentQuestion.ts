import List from "../../data/material.json";
import { QuestionAsk } from "../../types";

const EquivalentQuestion = (props: Pick<QuestionAsk, "code">) => {
  const searched = List.find(
    (l) => l[props.code.key] === props.code.value.toUpperCase()
  );
  if (!searched) {
    return "We are unable to calculate!";
  }
  const listSearched = List.filter((ls) => ls.Remarks === searched["Remarks"]);
  const ans = listSearched.map((s) => s["Material ID"]);
  return ans.join(`, `);
};

export default EquivalentQuestion;
