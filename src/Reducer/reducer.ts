import { stat } from "fs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IQuestion, IQuestionData } from "../Backend/model/Question-model";

export const defaultQuesStat = {
  questionData: [],
};

interface IAction {
  type: string;
  payload: {
    index: number;
    selected: number[];
    questionData: IQuestionData;
    updateData: Function;
  };
}

enum Types {
  COMPLETED = "COMPLETED",
  RANDOM = "RANDOM",
  SEARCH_ON = "SEARCH_ON",
}

export function reducer(state: any, action: IAction) {
  if (Types.COMPLETED === action.type) {
    const { selected, questionData, updateData, index } = action.payload;
    const key: string = questionData.topicName;

    let newQuestion = [...selected];
    let updatedQuestionStats = questionData.questions.map(
      (question: IQuestion, qIndex: number) => {
        if (index === qIndex) {
          question.Done = true;
          if (question.Done === true) {
            newQuestion.push(qIndex);
          } else {
            newQuestion.splice(newQuestion.indexOf(qIndex), 1);
          }
          return question;
        } else {
          return question;
        }
      }
    );

    updateData(
      key,
      {
        topicName: questionData.topicName,
        started: newQuestion.length > 0 ? true : false,
        doneQuestions: newQuestion.length,
        questions: updatedQuestionStats,
      },
      questionData.position
    );
    toast.info("🎉 Hurray!! you made it🙌");

    return {
      questionData: questionData,
      ...state,
    };
  } else if (action.type === Types.RANDOM) {
    return state;
  }
}
