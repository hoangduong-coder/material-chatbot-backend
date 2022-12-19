import List from '../../data/material.json';
import { Material } from "../../types/helperTypes/material";

const materialList: Array<Material> = List;

const getAll = (): Material[] => {
  return materialList;
};

const getById = (id: string) => {
  return materialList.find(m => m["Material ID"] === id);
};

export default { getAll, getById };