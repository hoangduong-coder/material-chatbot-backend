import List from "../data/material.json";
import { Material } from "../types/helperTypes/material";
import { QuestionAsk } from "../types/helperTypes/clu";

let ans: string;
const Selection = (props: QuestionAsk) => {
  const searched: Material = List.find(
    (l) => l[props.code?.key!] === props.code?.value!.toUpperCase()
  );
  console.log(searched);

  for (const [key, value] of Object.entries(searched)) {
    ans += `${key}: ${value}, `;
  }
  return ans.slice(0, -2);
};

export default Selection;
