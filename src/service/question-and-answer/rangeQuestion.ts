/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import List from "../../data/material.json";
import { Entity } from "../../types/helperTypes/clu";

const RangeQuestion = (props: Array<Entity>) => {
  let ans = "";
  let check = "";
  const value: Entity | undefined = props.find((en) => en.category === "Value");
  const searchKey = props.find((en) => en.category === "Search Key")
    ?.extraInformation?.[0].key!;
  if (!value || !searchKey) return ("No answer found!");

  const max = value.resolutions?.[0].maximum!;
  const min = value.resolutions?.[0].minimum!;

  if (typeof max === "string") check = "bigger";
  else if (typeof min === "string") check = "smaller";

  const listSearched = List.filter((ls) => {
    switch (check) {
      case "bigger":
        return ls[searchKey] >= min;
      case "smaller":
        return ls[searchKey] <= max;
      default:
        return ls[searchKey] >= min && ls[searchKey] <= max;
    }
  });
  ans = listSearched.map((s) => s["Material ID"]).join(", ");
  return ans;
}

export default RangeQuestion;
