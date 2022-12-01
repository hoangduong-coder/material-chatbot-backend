import List from "./material.json";
import { QuestionAsk } from "./../../types/helperTypes/clu";

const EquivalentQuestion = (props: QuestionAsk) => {
  const searched: any = List.find(
    (l) => l[props.code?.key!] === props.code?.value!.toUpperCase()
  );
  const listSearched = List.filter(
    (ls) => ls.Remarks === searched['Remarks']
  );
  const ans = listSearched.map((s) => s['Material ID']);
  return ans.join(`, `);
};

export default EquivalentQuestion;
