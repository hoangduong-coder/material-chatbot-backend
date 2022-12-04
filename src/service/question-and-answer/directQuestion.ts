/* eslint-disable @typescript-eslint/no-unsafe-return */

import List from "../../data/material.json";
import { Material } from "../../types/helperTypes/material";
import { QuestionAsk } from "../../types";

const DirectQuestion = (props: Pick<QuestionAsk, "code" | "searchKey">) => {
  const searched: Material[] = List.filter(
    (l) => l[props.code.key] === props.code.value
  );
  const ans = searched.map((s) => s[props.searchKey.key]);
  if (!ans || ans.length == 0) {
    return "No answer found! Try again!";
  } else return ans.join();
};

export default DirectQuestion;
