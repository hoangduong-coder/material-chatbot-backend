/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Entity } from "../../types/helperTypes/clu";
import List from "../../data/material.json";

const DirectQuestion = (props: Array<Entity>) => {
  let ans = "";
  const searchKeyList: string[] = [];

  const searchCode: Array<Entity> = props.filter(
    (f) => f.category !== "Search Key"
  );

  props.forEach((sk) => {
    if (sk.category === "Search Key")
      searchKeyList.push(sk.extraInformation?.[0].key!);
  });
  if (!searchCode || !searchKeyList) return "No answer found!";
  searchCode.forEach((sc) => {
    const searched = List.find(
      (l) =>
        l[sc.category].replace(/ /g, "") ===
        sc.text.toUpperCase().replace(/ /g, "")
    );
    if (!searched) return "No answer found!";
    searchKeyList.forEach((sk) => {
      ans += `${sk} of ${sc.text} is ${searched?.[sk]}\n`;
    });
    return ans;
  });
  return ans;
};

export default DirectQuestion;
