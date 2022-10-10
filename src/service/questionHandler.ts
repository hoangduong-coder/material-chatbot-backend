import { Question } from "../types/question";
import questionData from "../question.json";

const questionList: Array<Question> = questionData;

const postQuestion = (question: string): Question => {
  const newQuestion: Question = {
    qnaId:
      questionList.length > 0
        ? Math.max(...questionList.map((d) => d.qnaId)) + 1
        : 1,
    question: question,
  };
  questionList.push(newQuestion);
  return newQuestion;
};

export default { postQuestion };
