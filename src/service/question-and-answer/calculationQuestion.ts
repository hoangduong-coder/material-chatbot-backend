/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import * as math from "mathjs";

import { Entity } from "../../types/helperTypes/clu";
import List from "../../data/material.json";
import { Material } from './../../types/helperTypes/material';

const CalculationQuestion = (props: Array<Entity>) => {
  let ans = "";
  const searchKeyList: string[] = [];
  const searchedList: Material[] = [];
  const text: string[] = [];

  const searchValue: Array<Entity> = props.filter(
    (f) => f.category === "Value"
  );

  props.forEach((sk) => {
    if (sk.category === "Search Key")
      searchKeyList.push(sk.extraInformation?.[0].key!);
    if (sk.category !== "Search Key" && sk.category !== "Value") {
      searchedList.push(
        List.find(
          (l) =>
            l[sk.category].replace(/ /g, "") ===
            sk.text.toUpperCase().replace(/ /g, "")
        )!
      );
      text.push(sk.text);
    }
  });

  try {
    searchKeyList.forEach((sk) => {
      for (let i = 0; i < searchedList.length; i++) {
        searchValue.forEach((sv) => {
          let m = 0;
          if (sv.resolutions?.[0].resolutionKind === "WeightResolution")
            m = math.unit(sv.text).toNumber("kg");

          else m = math.unit(sv.text).toNumber("m") * searchedList[i].Mass;
          switch (sk) {
            case "Mass":
              ans += `${sk} of ${sv.text} ${text[i]}: ${m.toFixed(3)}kg\n`;
              break;
            case "Cost":
              ans += `${sk} of ${sv.text} ${text[i]}: ${(
                m * searchedList[i].Cost
              ).toFixed(3)}€\n`;
              break;
            default:
              ans += "No answer found";
          }
        });
      }
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      ans += 'There is an error! Try again!';
    }
  }
  return ans;
};

export default CalculationQuestion;
