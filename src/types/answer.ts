import { Question } from ".";

export default interface Answer {
  id: string;
  query: Question | string;
  type: "One-line" | "Selection";
  answer: string | string[] | null; //One-line: return a string, Selection: return multiple selections
}
