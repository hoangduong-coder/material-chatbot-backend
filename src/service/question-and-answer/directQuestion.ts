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
    (f) => f.category !== "Search Key" && f.category !== "Elements"
  );

  const searchElement: Array<Entity> = props.filter(
    (f) => f.category === "Elements"
  );

  props.forEach((sk) => {
    if (sk.category === "Search Key")
      searchKeyList.push(sk.extraInformation?.[0].key!);
  });
  if ((!searchCode || !searchKeyList) || !searchElement) return "No answer found!";
  if (searchElement.length == 0) {
    searchCode.forEach((sc) => {
      const searchedList = List.filter(
        (l) =>{
          if (sc.category === "Basic Material") {
            return l["Basic Material"].substring(0, l["Basic Material"].indexOf(" ")).toUpperCase() === sc.text.toUpperCase().replace(/ /g, "")
          } else {
            return l[sc.category].toUpperCase().replace(/ /g, "") === sc.text.toUpperCase().replace(/ /g, "")
          }
        }
          
      );
      console.log(searchedList)
      if (!searchedList) return "No answer found!";
      const searched: Array<string> = []
      if (searchKeyList.length) {
        searchKeyList.forEach((sk) => {
          searchedList.forEach(sl => searched.push(sl[sk]))
          ans += `${sk} of ${sc.text}: ${searched.join(", ")}\n`;
        })
      } else {
        searchedList.forEach(sl => searched.push(sl["Material ID"]))
        ans += `Material ID of ${sc.text}: ${searched.join(", ")}\n`;
      }
      return ans;
    });
  }
  else {
    const searchedList = List.filter(
      (l) => searchElement.every(se => l["Basic Material"].toUpperCase().includes(se.text.toUpperCase()))
    );
    if (!searchedList) return "No answer found!";
    const searched: Array<string> = []
    searchedList.forEach(sl => searched.push(sl["Material ID"]));
    ans += `Material ID with ${searchElement.map(se => se.text).join(",")}: ${searched.join(", ")}\n`;
  }
  
  return ans;
};

export default DirectQuestion;
