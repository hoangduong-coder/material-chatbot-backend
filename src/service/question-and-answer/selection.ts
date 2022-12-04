import List from "../../data/material.json";
import { QuestionAsk } from "../../types";

let ans: string;
const Selection = (props: Pick<QuestionAsk, "code">) => {
  const searched = List.find(
    (l) => l[props.code.key] === props.code.value.toUpperCase()
  );
  if (!searched) {
    return "Try again!";
  }
  for (const [key, value] of Object.entries(searched)) {
    ans += `${key}: ${value}, `;
  }
  return ans.slice(0, -2);
};

export default Selection;