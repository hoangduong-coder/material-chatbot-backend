import * as math from "mathjs";
import { Entity } from "../../types/helperTypes/clu";
import List from "../../data/material.json";
const CalculationQuestion = (props: Array<Entity>) => {
  let ans = ''
  let searchKeyList: string[] = []
  props.forEach(sk => {if(sk.category === "Search Key") searchKeyList.push(sk.extraInformation?.[0].key!)})

  let searchValue: Array<Entity>
  searchValue = props.filter(f => f.category === "Value")

  let searchedList: any[] = []
  let text: string[] = []
  props.forEach(sc => {if(sc.category !== "Search Key" && sc.category !== "Value") {
    searchedList.push(List.find(l => l[sc.category].replace(/ /g,'') === sc.text!.toUpperCase().replace(/ /g,'')))
    text.push(sc.text!)
  }})

  if (!searchedList || !searchKeyList || !searchValue) return "No answer found!"

  searchKeyList.forEach(sk => {
    for (let i = 0; i < searchedList.length; i++) {
      searchValue.forEach(sv => {
        let m: number = 0
        if (sv.resolutions?.[0].resolutionKind === "LengthResolution") m = math.unit(sv.text).toNumber('m') * searchedList[i].Mass
        else m = math.unit(sv.text).toNumber('kg')
      
        if (sk === 'Mass')  ans += `${sk} of ${sv.text!} ${text[i]}: ${m.toFixed(3)}kg\n`
        else if (sk === 'Cost') ans += `${sk} of ${sv.text!} ${text[i]}: ${(m*searchedList[i].Cost).toFixed(3)}€\n`
      })
    }
  })

  return ans
}

export default CalculationQuestion;
