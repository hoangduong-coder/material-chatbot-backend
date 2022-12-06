import { Entity } from "../../types/helperTypes/clu";
import List from "../../data/material.json";
import math from "mathjs";

// let math = require('mathjs')
const CalculationQuestion = (props: Array<Entity>) => {
  let ans = '';
  let searchKeyList: string[] = [];
  props.forEach(sk => { if (sk.category === "Search Key") searchKeyList.push(sk.extraInformation?.[0].key!); });
  let searchedList: any[] = [];
  let text: string[] = [];
  props.forEach(sc => {
    if (sc.category !== "Search Key" && sc.category !== "Value") {
      searchedList.push(List.find(l => l[sc.category].replace(/ /g, '') === sc.text!.toUpperCase().replace(/ /g, '')));
      text.push(sc.text!);
    }
  });
  let searchValue: Array<Entity>;
  searchValue = props.filter(f => f.category === "Value");
  if (!searchedList || !searchKeyList || !searchValue) return ans = "No answer found!";
  console.log(searchValue);
  const input = math.unit(searchValue[0].text).toNumber('m');
  console.log(input);
  searchValue.forEach(sv => {
    let m: number[] = [];
    console.log(math.unit(sv.text).toNumber('m'));
    if (sv.resolutions?.[0].resolutionKind === "LengthResolution") {
      searchedList.forEach(sl => m.push(math.unit(sv.text).toNumber('m') * sl.Mass));
    } else { for (let i = 0; i < searchedList.length; i++) m.push(math.unit(sv.text).toNumber('kg')); }
    searchKeyList.forEach(sk => {
      switch (sk) {
        case 'Mass':
          for (let i = 0; i < m.length; i++) {
            ans += `${sk} of ${searchValue[i].text!} ${text[i]}: ${m[i].toFixed(3)}kg\n`;
          }
          break;
        case 'Cost':
          for (let i = 0; i < m.length; i++) {
            ans += `${sk} of ${searchValue[i].text!} ${text[i]}: ${(m[i] * searchedList[i].Cost).toFixed(3)}€\n`;
          }
          break;
      }
    });
  });
  return ans;
};

export default CalculationQuestion;
