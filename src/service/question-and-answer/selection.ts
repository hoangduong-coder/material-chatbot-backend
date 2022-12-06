/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Entity } from "../../types/helperTypes/clu";
import List from "../../data/material.json";
import { Material } from "../../types/helperTypes/material";

const Selection = (props: Array<Entity>) => {
  let ans = "";
  props.forEach((c) => {
    const searched: Material | undefined = List.find(
      (l) => l[c.category].toUpperCase() === c.text.toUpperCase()
    );
    if (!searched)
      return "No answer found!";
    ans += `\u{2605}Information of ${c.text}\n`;
    for (const [key, value] of Object.entries(searched)) {
      ans += `\u{2606} ${key}: ${value}\n`;
    }
    return ans;
  });
  return ans;
};

export default Selection;
