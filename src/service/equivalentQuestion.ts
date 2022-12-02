import List from "../data/material.json";
import { QuestionAsk } from "../types/helperTypes/clu";

const EquivalentQuestion = (props: Pick<QuestionAsk, "code">) => {
  const searched = List.find(
    (l) => l[props.code.key] === props.code.value.toUpperCase()
  );
  if (!searched) {
    return null;
  }
  const listSearched = List.filter((ls) => ls.Remarks === searched["Remarks"]);
  const ans = listSearched.map((s) => s["Material ID"]);
  return ans.join(`, `);
};

export default EquivalentQuestion;
