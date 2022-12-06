import List from "../../data/material.json";
import { Entity } from "../../types/helperTypes/clu";
import { Material } from "../../types/helperTypes/material";

const EquivalentQuestion = (props: Array<Entity>) => {
  let ans = ''
  const listCode: Array<Entity> = []
  props.forEach(sk => {if(sk.category === "Material ID" || sk.category === "International Standard") listCode.push(sk)})
  if (!listCode) return ans = "No answer found!";
  listCode.forEach(lc => {
    const searched: Material | undefined = List.find(l => l[lc.category].replace(/ /g,'') === lc.text.toUpperCase().replace(/ /g,''))
    if (!searched) return ans = "No answer found!";
    const listSearched = List.filter(ls => ls.Remarks === searched.Remarks)
    return ans += `The material similar to ${lc.text}: ${listSearched.map((s) => s['Material ID']).join(', ')}\n`
  })
  return ans
}

export default EquivalentQuestion;
