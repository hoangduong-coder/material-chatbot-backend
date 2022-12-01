import { QueryModels, QuestionAsk } from "./../../types/helperTypes/clu";
import DirectQuestion from "./directQuestion"
import Selection from "./selection"
import EquivalentQuestion from "./equivalentQuestion"
import CalculationQuestion from "./calculationQuestion";
import RangeQuestion from "./rangeQuestion";

let question: QuestionAsk;
let answer: string;

const MainQuestion = (props: QueryModels) => {
  switch (props.result.prediction.topIntent) {
    case 'DirectQuestion':
      question = {
        searchKey: {
          key: props.result.prediction.entities[0].extraInformation?.[0].key!
        },
          code: {
          key: props.result.prediction.entities[1].category!,
          value: props.result.prediction.entities[1].text!
        }
      }
      answer = DirectQuestion(question)
      break;
      case 'Selection':
       question = {
        code: {
          key: props.result.prediction.entities[0].category!,
          value: props.result.prediction.entities[0].text!
        }
       } 
       answer = Selection(question)
      break;
      case 'EquivalentQuestion':
        question = {
            code: {
            key: props.result.prediction.entities[1].category!,
            value: props.result.prediction.entities[1].text!
          }
        }
        answer = EquivalentQuestion(question)
      break;
      case 'CalculationQuestion':
        question = {
          searchKey: {
            key: props.result.prediction.entities[0].extraInformation?.[0].key!
          },
          code: {
            key: props.result.prediction.entities[2].category!,
            value: props.result.prediction.entities[2].text!
          },
          value: {
            kind: props.result.prediction.entities[1].resolutions?.[0].resolutionKind!,
            value: props.result.prediction.entities[1].text!
          }
        }
        answer = CalculationQuestion(question)
        break;
      case 'RangeQuestion':
        question = {
          searchKey: {
            key: props.result.prediction.entities[0].extraInformation?.[0].key!
          },
          range: {
            min: props.result.prediction.entities[1].resolutions?.[0].minimum!,
            max: props.result.prediction.entities[1].resolutions?.[0].maximum!
          }
        }
        answer = RangeQuestion(question)
        break;
  }

  return answer
}

export default MainQuestion