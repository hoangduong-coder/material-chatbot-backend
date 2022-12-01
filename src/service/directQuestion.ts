/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import List from "../data/material.json";
import { Material } from "../types/helperTypes/material";
import { QuestionAsk } from "../types/helperTypes/clu";

const DirectQuestion = (props: QuestionAsk) => {
  const searched: Material[] = List.filter(
    (l) => l[props.code?.key!] === props.code?.value!
  );
  const ans = searched.map((s) => s[props.searchKey?.key!]);
  return ans.join();
};

export default DirectQuestion;
