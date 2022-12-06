/* eslint-disable @typescript-eslint/no-unsafe-return */

import List from "../../data/material.json";
import { Entity } from "../../types/helperTypes/clu";

const DirectQuestion = (props: Array<Entity>) => {
  let searchCode: Array<Entity>
  let ans = ''
  let searchKeyList: string[] = []
  props.forEach(sk => {if(sk.category === "Search Key") searchKeyList.push(sk.extraInformation?.[0].key!)})
  searchCode = props.filter(f => f.category !== "Search Key")
  if (!searchCode || !searchKeyList) return "No answer found!";
  searchCode.forEach(sc => {
    const searched = List.find(l => l[sc.category].replace(/ /g,'') === sc.text.toUpperCase().replace(/ /g,''))
    if (!searched) return ans = "No answer found!";
    searchKeyList.forEach(sk => {
      ans += `${sk} of ${sc.text} is ${searched?.[sk]}\n`
    })
    return ans
  })
  return ans
}

export default DirectQuestion;
